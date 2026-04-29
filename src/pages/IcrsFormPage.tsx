import { useEffect } from 'react';

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region: string;
          target?: string;
        }) => void;
      };
    };
  }
}

const HUBSPOT_SCRIPT_SRC = 'https://js-na3.hsforms.net/forms/embed/v2.js';
const TARGET_ID = 'hubspot-icrs-form';

function IcrsFormPage() {
  useEffect(() => {
    const renderForm = () => {
      if (!window.hbspt) return;
      const target = document.getElementById(TARGET_ID);
      if (target) target.innerHTML = '';
      window.hbspt.forms.create({
        portalId: '343026193',
        formId: 'da3f7bcd-128e-401f-8177-5734f6808e19',
        region: 'na3',
        target: `#${TARGET_ID}`,
      });
    };

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${HUBSPOT_SCRIPT_SRC}"]`
    );

    if (existing && window.hbspt) {
      renderForm();
      return;
    }

    const script = existing ?? document.createElement('script');
    if (!existing) {
      script.src = HUBSPOT_SCRIPT_SRC;
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    }
    script.addEventListener('load', renderForm);

    return () => {
      script.removeEventListener('load', renderForm);
    };
  }, []);

  return (
    <main style={{ minHeight: '100vh', padding: '40px 20px', background: '#fff' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div id={TARGET_ID} />
      </div>
    </main>
  );
}

export default IcrsFormPage;
