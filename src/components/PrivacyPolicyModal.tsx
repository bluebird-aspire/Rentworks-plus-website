import LegalModal, { type LegalSection } from './LegalModal';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const privacySections: LegalSection[] = [
  {
    title: 'Introduction',
    content: (
      <p>
        Your privacy is important to us. This privacy policy is intended to inform you about the
        information that we collect when you visit our site, how this information is used and
        disclosed, and how you can control the usage and disclosure of your information.
      </p>
    ),
  },
  {
    title: 'Information Collected on Our Website',
    content: (
      <>
        <p>
          Most companies on the web use cookies (or other similar tools). Cookies are small text files
          a website uses to recognize users, and are typically placed on your computer, mobile phone,
          or other device by a web server. Cookies contain information that can later be read by a web
          server in the domain that issued the cookie to you or that, in some cases, can be read by a
          third party domain. Pixels are small blocks of code on webpages that do things like allow
          another server to measure viewing of a webpage and often are used in connection with cookies.
        </p>
        <p>
          We use technologies like cookies, pixels, web beacons, and similar technologies to collect
          or receive information from you and your computer, and use that information for measurement
          purposes and to facilitate the delivery of content or advertisements that we believe may be
          of interest to you.
        </p>
        <p>
          We may also record information about your use of our site so that we can provide a
          continuous and more personalized experience for you, including for one or more of the
          following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>To help identify visitors</li>
          <li>Assess usage patterns</li>
          <li>Identify preferences</li>
          <li>Control the display of ads</li>
          <li>Diagnose problems with our servers</li>
          <li>Gather demographic information</li>
          <li>Analyze trends and usage patterns</li>
          <li>Conduct research</li>
          <li>Deliver editorial content</li>
          <li>Record registration and personalized information</li>
          <li>Otherwise administer our products and services</li>
        </ul>
        <p>
          We may also collect information about how visitors use our sites, including the number of
          visitors, the websites that referred them to our websites and the pages that they visited on
          our website. We use this information to compile reports and to help us improve our websites.
        </p>
      </>
    ),
  },
  {
    title: 'Opt-Out Options',
    content: (
      <>
        <p>To opt-out of data collection on this site, visit the following links:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Facebook:{' '}
            <a
              href="https://www.facebook.com/ads/website_custom_audiences/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
              style={{ color: 'var(--theme-accent)' }}
            >
              https://www.facebook.com/ads/website_custom_audiences/
            </a>
          </li>
          <li>
            Google Ads:{' '}
            <a
              href="https://www.google.com/settings/u/0/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
              style={{ color: 'var(--theme-accent)' }}
            >
              https://www.google.com/settings/u/0/ads
            </a>
          </li>
          <li>
            Google Analytics:{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
              style={{ color: 'var(--theme-accent)' }}
            >
              https://tools.google.com/dlpage/gaoptout?hl=en
            </a>
          </li>
        </ul>
        <p>
          Also refer to your browser or device's help material to learn what controls you can often
          use to remove or block cookies or other similar technologies or block or remove other data
          stored on your computer or device.
        </p>
      </>
    ),
  },
  {
    title: 'Information Collected on Third Party Sites',
    content: (
      <>
        <p>
          If you register for events or webinars provided by us, we may receive information about you
          from the service providers that host or process registration for these programs. By registering
          for or attending our events or webinars, you specifically consent to the receipt of these
          communications.
        </p>
        <p>
          If you do not want to receive emails, text messages or other communications from us, please
          notify us by email. You may unsubscribe to any of our e-mail updates by following the
          unsubscribe instructions in the body of any message, or by contacting us.
        </p>
      </>
    ),
  },
  {
    title: 'Disclosure to Third Parties',
    content: (
      <p>
        We may disclose information from or concerning you or your computer or device to third
        parties such as third party advertisers and ad networks, providers of analytics tools, and
        event sponsors. By visiting, accessing, attending or using our website, services or events,
        you consent to the disclosure of your information to third parties for this purpose. This
        Privacy Policy does not apply to the policies or practices of any of these third parties.
      </p>
    ),
  },
  {
    title: 'Changes to the Privacy Policy',
    content: (
      <>
        <p>
          We retain the discretion to amend or modify this Privacy Policy from time to time. Use and
          disclosure of information we obtain is subject to the later of: (1) the Privacy Policy in
          effect at the time such information is collected or (2) any subsequent Privacy Policy of
          which you have notice.
        </p>
        <p>
          If we make material changes to the way we collect, use or disclose Personally Identifying
          Information, we will notify you by posting a clear and prominent announcement on our site or
          through a direct communication.
        </p>
        <p>
          Your continued access to or use of our site following notice of material changes to this
          Privacy Policy shall constitute consent to any amendments and/or modifications.
        </p>
      </>
    ),
  },
  {
    title: 'How to Contact Us',
    content: (
      <p>
        We welcome any questions or comments you may have regarding this Privacy Policy or its
        implementation. Any such questions or comments should be submitted via the "Contact" link
        above.
      </p>
    ),
  },
];

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  return (
    <LegalModal
      isOpen={isOpen}
      onClose={onClose}
      title="Privacy Policy"
      sections={privacySections}
    />
  );
}
