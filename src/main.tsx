import React from 'react'
import ReactDOM from 'react-dom/client'
import posthog from 'posthog-js'
import App from './App'
import './index.css'

posthog.init('phc_kje6cksDDS5tXguUWDATyq5BigTsipVfBUB8ZJ5nnvB9', {
  api_host: 'https://eu.i.posthog.com',
  defaults: '2026-01-30',
  person_profiles: 'identified_only',
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
