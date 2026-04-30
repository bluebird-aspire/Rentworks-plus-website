import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const HUBSPOT_SCRIPT_SRC = 'https://js-na3.hsforms.net/forms/embed/v2.js';
const TARGET_ID = 'hubspot-contact-form';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.contact-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const renderForm = () => {
      if (!window.hbspt) return;
      const target = document.getElementById(TARGET_ID);
      if (target) target.innerHTML = '';
      window.hbspt.forms.create({
        portalId: '343026193',
        formId: 'a131c884-afbc-4249-9268-3ec8c883bc59',
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
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="contact-title opacity-0 inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ background: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)', color: 'var(--theme-accent)' }}>
            Get In Touch
          </span>
          <h2 className="contact-title opacity-0 text-3xl md:text-5xl font-heading font-bold mb-4" style={{ color: 'var(--theme-text)' }}>
            Ready to Transform Your
            <span className="text-gradient"> Rental Business?</span>
          </h2>
          <p className="contact-title opacity-0 text-lg max-w-2xl mx-auto" style={{ color: 'var(--theme-text-muted)' }}>
            Schedule a personalized demo and see how RentWorksPlus can streamline your operations,
            enhance efficiency, and deliver exceptional customer experiences.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="contact-card opacity-0 glass-card rounded-2xl p-6 md:p-8">
            <div id={TARGET_ID} />
          </div>
        </div>
      </div>
    </section>
  );
}
