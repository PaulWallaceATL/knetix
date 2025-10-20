'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import KnetixLogo from './KnetixLogo';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function EnterpriseFooter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

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
      { name: 'Partners', href: '/partners' },
      { name: 'News', href: '/news' },
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

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#', color: 'hover:bg-sky-500' },
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#', color: 'hover:bg-blue-700' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#', color: 'hover:bg-pink-600' },
    { name: 'Youtube', icon: <Youtube className="w-5 h-5" />, href: '#', color: 'hover:bg-red-600' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#000D33] via-[#0A2E50] to-[#000D33] text-white overflow-hidden">
      {/* Static Background - removed animation to prevent flickering */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container-clean py-20 md:py-24 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Ahead of the Curve
            </h3>
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed font-light">
              Get the latest insights, industry trends, and exclusive content delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-10 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50"
                disabled={subscribed}
              >
                {subscribed ? (
                  'Subscribed!'
                ) : (
                  <>
                    Subscribe
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container-clean pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <KnetixLogo size="lg" className="mb-6" />
            <p className="text-body text-white/70 mb-8 leading-relaxed">
              Empowering businesses with intelligent, secure, and scalable technology solutions 
              that drive transformational results.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 group cursor-pointer">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <div className="text-sm text-white/70 group-hover:text-white transition-colors">
                  <div className="font-semibold">Headquarters</div>
                  <div>2137 Chelsea Blvd. Unit C1</div>
                  <div>Allen, TX 75013</div>
                </div>
              </div>

              <a href="mailto:info@knetix.com" className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-white/70 group-hover:text-cyan-400 transition-colors">
                  info@knetix.com
                </span>
              </a>

              <a href="tel:+15551234567" className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-white/70 group-hover:text-cyan-400 transition-colors">
                  (555) 123-4567
                </span>
              </a>
            </div>
          </motion.div>

          {/* Navigation Links */}
          {[
            { title: 'Solutions', links: navigationLinks.solutions },
            { title: 'Company', links: navigationLinks.company },
            { title: 'Resources', links: navigationLinks.resources },
            { title: 'Legal', links: navigationLinks.legal },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-h4 mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-white/70 hover:text-cyan-400 transition-colors group flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          className="border-t border-white/10 pt-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { title: "SOC 2", subtitle: "Type II Certified" },
              { title: "ISO 27001", subtitle: "Compliant" },
              { title: "GDPR", subtitle: "Compliant" },
              { title: "99.99%", subtitle: "Uptime SLA" },
            ].map((badge, index) => (
              <motion.div
                key={badge.title}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {badge.title}
                </div>
                <div className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                  {badge.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 pt-8 pb-8 flex flex-col lg:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-body-sm text-white/50">
            &copy; {currentYear} Knetix. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

