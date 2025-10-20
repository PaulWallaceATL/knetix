'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KnetixLogo from './KnetixLogo';
import { ChevronDown, Shield, Cloud, Network, Phone, Server, BookOpen, Users, Briefcase, Mail, ArrowRight } from 'lucide-react';

export default function EnterpriseNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    { name: 'Network Performance', href: '/solutions/network-performance', icon: <Network className="w-5 h-5" />, description: 'Optimize connectivity' },
    { name: 'Cybersecurity', href: '/solutions/cybersecurity', icon: <Shield className="w-5 h-5" />, description: 'Advanced threat protection' },
    { name: 'Cloud Infrastructure', href: '/solutions/cloud-infrastructure', icon: <Cloud className="w-5 h-5" />, description: 'Scalable cloud solutions' },
    { name: 'Unified Communications', href: '/solutions/unified-communications', icon: <Phone className="w-5 h-5" />, description: 'Seamless collaboration' },
    { name: 'Managed Services', href: '/solutions/managed-services', icon: <Server className="w-5 h-5" />, description: '24/7 expert support' },
    { name: 'Contact Center', href: '/solutions/contact-center', icon: <Users className="w-5 h-5" />, description: 'Customer experience' },
  ];

  const company = [
    { name: 'About Us', href: '/about', icon: <Briefcase className="w-5 h-5" />, description: 'Our story & mission' },
    { name: 'Insights', href: '/insights', icon: <BookOpen className="w-5 h-5" />, description: 'Industry expertise' },
    { name: 'Careers', href: '/careers', icon: <Users className="w-5 h-5" />, description: 'Join our team' },
    { name: 'Contact', href: '/contact', icon: <Mail className="w-5 h-5" />, description: 'Get in touch' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
      style={{ zIndex: 1030 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container-clean">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <KnetixLogo size="md" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Solutions Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('solutions')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors">
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMegaMenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeMegaMenu === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {solutions.map((solution, index) => (
                        <Link
                          key={index}
                          href={solution.href}
                          className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
                        >
                          <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white group-hover:scale-110 transition-transform">
                            {solution.icon}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                              {solution.name}
                            </div>
                            <div className="text-sm text-gray-500">{solution.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Link
                        href="/solutions"
                        className="flex items-center justify-between text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        View All Solutions
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services */}
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
              Services
            </Link>

            {/* Company Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('company')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors">
                Company
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMegaMenu === 'company' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeMegaMenu === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[300px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 z-50"
                  >
                    {company.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
                      >
                        <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open menu</span>
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.svg
                    key="close"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container-clean py-6 space-y-4">
              <div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Solutions</div>
                <div className="space-y-2">
                  {solutions.map((solution, index) => (
                    <Link
                      key={index}
                      href={solution.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        {solution.icon}
                      </div>
                      <span className="font-semibold text-gray-900">{solution.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Company</div>
                <div className="space-y-2">
                  {company.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        {item.icon}
                      </div>
                      <span className="font-semibold text-gray-900">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="btn btn-primary w-full justify-center">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

