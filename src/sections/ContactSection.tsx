import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Loader2,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';
import logoWithSlogan from '../assets/logo-with-slogan.svg';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contact@rentworksplus.com', href: 'mailto:contact@rentworksplus.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, label: 'Address', value: '123 Business Ave, Suite 100, New York, NY 10001', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM EST', href: '#' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn', hoverBg: '#0077B5' },
  { icon: Twitter, href: '#', label: 'Twitter', hoverBg: '#1DA1F2' },
  { icon: Facebook, href: '#', label: 'Facebook', hoverBg: '#1877F2' },
  { icon: Instagram, href: '#', label: 'Instagram', hoverBg: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

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
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.contact-info-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-info-container',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    }, 5000);
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
      <style>{`
        .social-link-enhanced {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .social-link-enhanced::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          transform: scale(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .social-link-enhanced:hover {
          transform: scale(1.15);
        }
        .social-link-enhanced:hover::before {
          transform: scale(1);
        }
        .social-link-enhanced:hover .social-icon {
          color: #fff;
          position: relative;
          z-index: 1;
        }
        .social-link-enhanced .social-icon {
          width: 22px;
          height: 22px;
          transition: color 0.3s ease;
        }
        .social-link-enhanced[data-platform="LinkedIn"]::before {
          background: #0077B5;
        }
        .social-link-enhanced[data-platform="Twitter"]::before {
          background: #1DA1F2;
        }
        .social-link-enhanced[data-platform="Facebook"]::before {
          background: #1877F2;
        }
        .social-link-enhanced[data-platform="Instagram"]::before {
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="contact-title inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ background: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)', color: 'var(--theme-accent)' }}>
            Get In Touch
          </span>
          <h2 className="contact-title text-3xl md:text-5xl font-heading font-bold mb-4" style={{ color: 'var(--theme-text)' }}>
            Ready to Transform Your
            <span className="text-gradient"> Rental Business?</span>
          </h2>
          <p className="contact-title text-lg max-w-2xl mx-auto" style={{ color: 'var(--theme-text-muted)' }}>
            Schedule a personalized demo and see how RentWorksPlus can streamline your operations,
            enhance efficiency, and deliver exceptional customer experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="contact-info-container lg:col-span-2 space-y-6">
            <div className="contact-card glass-card rounded-2xl p-6">
              <h3 className="text-xl font-heading font-semibold mb-6" style={{ color: 'var(--theme-text)' }}>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="contact-info-item flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors" style={{ background: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)' }}>
                      <item.icon className="w-5 h-5" style={{ color: 'var(--theme-accent)' }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: 'var(--theme-text-muted)' }}>{item.label}</p>
                      <p className="group-hover:opacity-80 transition-colors" style={{ color: 'var(--theme-text)' }}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-card glass-card rounded-2xl p-6">
              <h3 className="text-xl font-heading font-semibold mb-4" style={{ color: 'var(--theme-text)' }}>
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    data-platform={social.label}
                    className="social-link-enhanced"
                  >
                    <social.icon className="social-icon" style={{ color: 'var(--theme-text-muted)' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-card lg:col-span-3 glass-card rounded-2xl p-6 md:p-8">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
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
                        Full Name <span style={{ color: 'var(--theme-accent)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder:opacity-50 focus:outline-none focus:ring-1 transition-all"
                        style={{ color: 'var(--theme-text)', borderColor: 'var(--theme-divider)' }}
                      />
                    </div>
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
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
                    <a href="#" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Privacy Policy</a>
                    {' '}and{' '}
                    <a href="#" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Terms of Service</a>.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12" style={{ borderTop: '1px solid var(--theme-divider)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <a href="#" className="inline-block mb-4">
                <img src={logoWithSlogan} alt="RentWorksPlus" className="h-10 w-auto" />
              </a>
              <p className="max-w-sm mb-6" style={{ color: 'var(--theme-text-muted)' }}>
                The complete fleet management platform designed for modern rental businesses.
                Streamline operations, enhance efficiency, and deliver exceptional customer experiences.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    data-platform={social.label}
                    className="social-link-enhanced"
                  >
                    <social.icon className="social-icon" style={{ color: 'var(--theme-text-muted)' }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4" style={{ color: 'var(--theme-text)' }}>Quick Links</h4>
              <ul className="space-y-2">
                {['Features', 'Modules', 'Pricing', 'About Us', 'Careers'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--theme-text-muted)' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-heading font-semibold mb-4" style={{ color: 'var(--theme-text)' }}>Support</h4>
              <ul className="space-y-2">
                {['Help Center', 'Documentation', 'API Reference', 'Status', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--theme-text-muted)' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--theme-divider)' }}>
            <p className="text-sm" style={{ color: 'var(--theme-text-muted)' }}>
              &copy; 2026 RentWorksPlus. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--theme-text-muted)' }}>
                Privacy Policy
              </a>
              <a href="#" className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--theme-text-muted)' }}>
                Terms of Service
              </a>
              <a href="#" className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--theme-text-muted)' }}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
