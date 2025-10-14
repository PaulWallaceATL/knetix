'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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
      { name: 'News', href: '/news' },
      { name: 'Partners', href: '/partners' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Support Center', href: '/support' },
      { name: 'Training', href: '/training' },
      { name: 'Community', href: '/community' },
      { name: 'Status', href: '/status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <motion.div 
        className="border-b border-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-clean py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="apple-text-title2 mb-4">
              Stay ahead of the curve
            </h3>
            <p className="apple-text-body text-gray-400 mb-8">
              Get the latest insights, updates, and exclusive content delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 apple-focus"
              />
              <motion.button
                className="apple-button apple-button-primary px-6 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="container-clean py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <KnetixLogo size="lg" className="text-blue-400 mb-6" />
              <p className="apple-text-body text-gray-400 mb-6 leading-relaxed">
                Empowering businesses with intelligent, secure, and scalable technology solutions. 
                We deliver enterprise-grade innovation that drives real business results.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-1">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="apple-text-footnote text-gray-500 mb-1">Headquarters</div>
                  <div className="apple-text-body text-gray-300">2137 Chelsea Blvd. Unit C1</div>
                  <div className="apple-text-body text-gray-300">Allen, TX 75013</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="apple-text-footnote text-gray-500 mb-1">Email</div>
                  <a href="mailto:info@knetix.com" className="apple-text-body text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    info@knetix.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="apple-text-footnote text-gray-500 mb-1">Phone</div>
                  <a href="tel:+15551234567" className="apple-text-body text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          {[
            { title: 'Solutions', links: navigationLinks.solutions },
            { title: 'Company', links: navigationLinks.company },
            { title: 'Resources', links: navigationLinks.resources },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="apple-text-title3 text-white mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="apple-text-body text-gray-400 hover:text-white transition-colors duration-300 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Media & Trust Badges */}
        <motion.div 
          className="border-t border-gray-800 pt-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="apple-text-body text-gray-400">Follow Us:</span>
              <div className="flex space-x-4">
                {[
                  { name: 'LinkedIn', icon: '💼', href: '#' },
                  { name: 'Twitter', icon: '🐦', href: '#' },
                  { name: 'YouTube', icon: '📺', href: '#' },
                  { name: 'GitHub', icon: '🐙', href: '#' },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-lg hover:bg-gray-700 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="apple-text-title3 text-blue-400">SOC 2</div>
                <div className="apple-text-footnote text-gray-500">Certified</div>
              </div>
              <div className="text-center">
                <div className="apple-text-title3 text-blue-400">ISO 27001</div>
                <div className="apple-text-footnote text-gray-500">Compliant</div>
              </div>
              <div className="text-center">
                <div className="apple-text-title3 text-blue-400">99.9%</div>
                <div className="apple-text-footnote text-gray-500">Uptime</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="apple-text-body text-gray-400">
            &copy; {currentYear} Knetix. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
            {navigationLinks.legal.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="apple-text-body text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}