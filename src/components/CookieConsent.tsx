'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Delay showing banner for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleReject = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly));
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 p-4 sm:p-6"
          style={{ zIndex: 1070 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="glass-dark rounded-2xl p-6 shadow-2xl border border-white/20"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {!showSettings ? (
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* Icon and Content */}
                  <div className="flex items-start gap-4 flex-1">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Cookie className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        We Value Your Privacy
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed">
                        We use cookies to enhance your browsing experience, analyze site traffic, 
                        and personalize content. By clicking &quot;Accept All&quot;, you consent to our use 
                        of cookies.{' '}
                        <Link href="/cookies" className="text-cyan-400 hover:text-cyan-300 underline">
                          Learn more
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAcceptAll}
                      className="btn btn-accent flex-1 lg:flex-none"
                    >
                      <Check className="w-4 h-4" />
                      Accept All
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowSettings(true)}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-all flex-1 lg:flex-none"
                    >
                      <Settings className="w-4 h-4" />
                      Customize
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleReject}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold hover:bg-white/10 transition-all flex-1 lg:flex-none"
                    >
                      Reject All
                    </motion.button>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Settings Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Cookie Preferences</h3>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowSettings(false)}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <X className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>

                  {/* Cookie Categories */}
                  <div className="space-y-4 mb-6">
                    {[
                      {
                        key: 'necessary',
                        title: 'Necessary Cookies',
                        description: 'Essential for the website to function properly. Cannot be disabled.',
                        required: true
                      },
                      {
                        key: 'analytics',
                        title: 'Analytics Cookies',
                        description: 'Help us understand how visitors interact with our website.',
                        required: false
                      },
                      {
                        key: 'marketing',
                        title: 'Marketing Cookies',
                        description: 'Used to track visitors and display relevant ads.',
                        required: false
                      }
                    ].map((category) => (
                      <motion.div
                        key={category.key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-start justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">{category.title}</h4>
                          <p className="text-sm text-white/70">{category.description}</p>
                        </div>
                        
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            if (!category.required) {
                              setPreferences(prev => ({
                                ...prev,
                                [category.key]: !prev[category.key as keyof typeof prev]
                              }));
                            }
                          }}
                          disabled={category.required}
                          className={`flex-shrink-0 w-12 h-6 rounded-full transition-colors ${
                            preferences[category.key as keyof typeof preferences]
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                              : 'bg-white/20'
                          } ${category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <motion.div
                            className="w-5 h-5 bg-white rounded-full shadow-lg"
                            animate={{
                              x: preferences[category.key as keyof typeof preferences] ? 26 : 2,
                            }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Settings Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAcceptSelected}
                      className="btn btn-accent flex-1"
                    >
                      Save Preferences
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAcceptAll}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-all flex-1"
                    >
                      Accept All
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

