/**
 * Post-build prerender script.
 * Launches Puppeteer, opens the built SPA, waits for content to render,
 * then writes the fully-rendered HTML back to build/index.html.
 *
 * Usage: node scripts/prerender.mjs
 */

import { launch } from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, join } from 'path';

const BUILD_DIR = resolve(process.cwd(), 'build');
const INDEX_PATH = join(BUILD_DIR, 'index.html');
const PORT = 4173;

// Simple static file server for the build directory
function startServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.txt': 'text/plain',
    '.xml': 'application/xml',
  };

  const server = createServer((req, res) => {
    let filePath = join(BUILD_DIR, req.url === '/' ? 'index.html' : req.url);
    const ext = '.' + filePath.split('.').pop();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    try {
      const content = readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } catch {
      // SPA fallback — serve index.html for any unmatched route
      try {
        const content = readFileSync(INDEX_PATH);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    }
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => {
      console.log(`[prerender] Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('[prerender] Starting prerender process...');

  // Start static server
  const server = await startServer();

  // Launch Puppeteer
  const browser = await launch({ headless: true });
  const page = await browser.newPage();

  // Navigate and wait for content to render
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });

  // Wait extra time for GSAP animations to settle
  await new Promise((r) => setTimeout(r, 3000));

  // Get the fully rendered HTML
  const html = await page.content();

  // Close browser and server
  await browser.close();
  server.close();

  // Write prerendered HTML back to index.html
  writeFileSync(INDEX_PATH, html, 'utf-8');

  console.log(`[prerender] Wrote prerendered HTML to ${INDEX_PATH}`);
  console.log(`[prerender] HTML size: ${(html.length / 1024).toFixed(1)} KB`);
}

prerender().catch((err) => {
  console.error('[prerender] Error:', err);
  process.exit(1);
});
