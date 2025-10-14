import Link from 'next/link';
import KnetixLogo from './KnetixLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = {
    solutions: [
      { name: 'Network Performance', href: '/solutions/network-performance' },
      { name: 'Cybersecurity', href: '/solutions/cybersecurity' },
      { name: 'Unified Communications', href: '/solutions/unified-communications' },
      { name: 'Cloud Infrastructure', href: '/solutions/cloud-infrastructure' },
      { name: 'Contact Center', href: '/solutions/contact-center' },
      { name: 'Managed Services', href: '/solutions/managed-services' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Insights', href: '/insights' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialMedia = [
    { name: 'LinkedIn', icon: 'linkedin', href: '#' },
    { name: 'Twitter', icon: 'twitter', href: '#' },
    { name: 'Facebook', icon: 'facebook', href: '#' },
  ];

  return (
    <footer className="bg-[#0A2E50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <KnetixLogo size="lg" className="text-[#00C4B4]" />
            </div>
            <p className="text-gray-300 mb-4">
              Empowering businesses with intelligent, secure, and scalable technology solutions.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>2137 Chelsea Blvd. Unit C1</p>
              <p>Allen, TX 75013</p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#00C4B4]">Solutions</h4>
            <ul className="space-y-2">
              {navigationLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#00C4B4] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#00C4B4]">Company</h4>
            <ul className="space-y-2">
              {navigationLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#00C4B4] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#00C4B4]">Connect With Us</h4>
            <div className="space-y-2 text-sm text-gray-300 mb-4">
              <p>Email: info@knetix.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-300 hover:text-[#00C4B4] transition-colors duration-300"
                  aria-label={social.name}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Knetix. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {navigationLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#00C4B4] text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

