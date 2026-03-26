import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import PrivacyPolicyModal from '../components/PrivacyPolicyModal';
import TermsOfServiceModal from '../components/TermsOfServiceModal';
import {
  Send,
  CheckCircle,
  Loader2,
} from 'lucide-react';

const EMAIL_API_URL = import.meta.env.DEV
  ? '/api/v1/email/send-public'
  : 'https://backend-api.dev.rentworksplus.com/api/v1/email/send-public';

const INITIAL_FORM_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  phone: '',
  message: '',
};

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [formData, setFormData] = useState({ ...INITIAL_FORM_DATA });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const bodyLines = [
      `Received from: ${formData.firstName}, ${formData.lastName}`,
      `Receiver email address: ${formData.email}`,
    ];
    if (formData.company) bodyLines.push(`Company: ${formData.company}`);
    if (formData.phone) bodyLines.push(`Phone: ${formData.phone}`);
    bodyLines.push(`Email body: ${formData.message}`);

    const bodyText = bodyLines.join('\n');
    const bodyHtml = bodyLines.map(line => {
      const [label, ...rest] = line.split(': ');
      return `<p><b>${label}:</b> ${rest.join(': ')}</p>`;
    }).join('');

    try {
      const response = await fetch(EMAIL_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipientEmail: 'hello@heycarla.ai',
          subject: 'RW+',
          bodyHtml,
          bodyText,
          replyTo: formData.email,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Form submission failed');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ ...INITIAL_FORM_DATA });
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert(`Failed to submit form: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
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

        {/* Centered Form */}
        <div className="max-w-2xl mx-auto">
          <div className="contact-card opacity-0 glass-card rounded-2xl p-6 md:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: 'color-mix(in srgb, var(--theme-accent) 20%, transparent)' }}>
                  <CheckCircle className="w-10 h-10" style={{ color: 'var(--theme-accent)' }} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2" style={{ color: 'var(--theme-text)' }}>
                  Message Sent Successfully!
                </h3>
                <p className="max-w-md" style={{ color: 'var(--theme-text-muted)' }}>
                  Thank you for reaching out. Our team will get back to you within 24 hours
                  to schedule your personalized demo.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-heading font-semibold mb-6" style={{ color: 'var(--theme-text)' }}>
                  Request a Demo
                </h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm mb-2" style={{ color: 'var(--theme-text-muted)' }}>
                        First Name <span style={{ color: 'var(--theme-accent)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder:opacity-50 focus:outline-none focus:ring-1 transition-all"
                        style={{ color: 'var(--theme-text)', borderColor: 'var(--theme-divider)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2" style={{ color: 'var(--theme-text-muted)' }}>
                        Last Name <span style={{ color: 'var(--theme-accent)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder:opacity-50 focus:outline-none focus:ring-1 transition-all"
                        style={{ color: 'var(--theme-text)', borderColor: 'var(--theme-divider)' }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm mb-2" style={{ color: 'var(--theme-text-muted)' }}>
                        Email Address <span style={{ color: 'var(--theme-accent)' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder:opacity-50 focus:outline-none focus:ring-1 transition-all"
                        style={{ color: 'var(--theme-text)', borderColor: 'var(--theme-divider)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2" style={{ color: 'var(--theme-text-muted)' }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder:opacity-50 focus:outline-none focus:ring-1 transition-all"
                        style={{ color: 'var(--theme-text)', borderColor: 'var(--theme-divider)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2" style={{ color: 'var(--theme-text-muted)' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder:opacity-50 focus:outline-none focus:ring-1 transition-all"
                        style={{ color: 'var(--theme-text)', borderColor: 'var(--theme-divider)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: 'var(--theme-text-muted)' }}>
                      Message <span style={{ color: 'var(--theme-accent)' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your fleet and requirements..."
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder:opacity-50 focus:outline-none focus:ring-1 transition-all resize-none"
                      style={{ color: 'var(--theme-text)', borderColor: 'var(--theme-divider)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ background: 'var(--theme-accent)', color: 'var(--theme-accent-fg)' }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Request Demo
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: 'var(--theme-text-muted)' }}>
                    By submitting this form, you agree to our{' '}
                    <button type="button" onClick={() => setShowPrivacyPolicy(true)} className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Privacy Policy</button>
                    {' '}and{' '}
                    <button type="button" onClick={() => setShowTermsOfService(true)} className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Terms of Service</button>.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <PrivacyPolicyModal isOpen={showPrivacyPolicy} onClose={() => setShowPrivacyPolicy(false)} />
      <TermsOfServiceModal open={showTermsOfService} onClose={() => setShowTermsOfService(false)} />
    </section>
  );
}
