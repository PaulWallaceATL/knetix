'use client';

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      setEmail('');
      setIsSubmitting(false);
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#0A2E50] to-[#00C4B4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-8">
          <Mail className="w-12 h-12 mx-auto mb-4 text-[#FF8C00]" />
          <h3 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h3>
          <p className="text-lg text-gray-200">
            Subscribe to our newsletter for the latest insights, industry trends, and technology updates.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-green-500 text-white p-6 rounded-lg flex items-center justify-center gap-3 animate-fade-in">
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold">Thank you for subscribing! Check your inbox for confirmation.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:border-[#FF8C00] transition-colors backdrop-blur-sm"
              />
              {error && <p className="text-red-300 text-sm mt-2 ml-6">{error}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FF8C00] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e67e00] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </form>
        )}

        <p className="text-center text-gray-300 text-sm mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

