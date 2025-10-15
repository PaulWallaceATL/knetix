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
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tl from-pink-500/30 to-orange-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Newsletter Section */}
      <motion.div 
        className="relative z-10 border-b border-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
      >
        <div className="container-clean py-16">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="apple-text-title2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Stay ahead of the curve
            </motion.h3>
            <motion.p 
              className="apple-text-body text-gray-400 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Get the latest insights, updates, and exclusive content delivered to your inbox.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700 text-white placeholder-gray-400 apple-focus focus:border-blue-500 transition-all duration-300"
                whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                transition={{ duration: 0.2 }}
              />
              <motion.button
                className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <span className="relative z-10">Subscribe</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="relative z-10 container-clean py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        {/* Social Media & Trust Badges */}
        <motion.div 
          className="border-t border-gray-800 pt-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            {/* Enhanced Social Media */}
            <motion.div 
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="apple-text-body text-gray-400">Follow Us:</span>
              <div className="flex space-x-4">
                {[
                  { name: 'LinkedIn', icon: '💼', href: '#', color: 'from-blue-500 to-blue-600' },
                  { name: 'Twitter', icon: '🐦', href: '#', color: 'from-sky-500 to-sky-600' },
                  { name: 'YouTube', icon: '📺', href: '#', color: 'from-red-500 to-red-600' },
                  { name: 'GitHub', icon: '🐙', href: '#', color: 'from-gray-600 to-gray-700' },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-lg hover:bg-gradient-to-r ${social.color} transition-all duration-300 group relative overflow-hidden`}
                    whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="relative z-10 group-hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {social.icon}
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Trust Badges */}
            <motion.div 
              className="flex items-center space-x-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { title: "SOC 2", subtitle: "Certified", color: "from-blue-400 to-blue-500" },
                { title: "ISO 27001", subtitle: "Compliant", color: "from-green-400 to-green-500" },
                { title: "99.9%", subtitle: "Uptime", color: "from-purple-400 to-purple-500" },
              ].map((badge, index) => (
                <motion.div 
                  key={badge.title}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`apple-text-title3 bg-gradient-to-r ${badge.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {badge.title}
                  </motion.div>
                  <div className="apple-text-footnote text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                    {badge.subtitle}
                  </div>
                </motion.div>
              ))}
            </motion.div>
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