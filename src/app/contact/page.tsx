'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-16 md:py-20 lg:py-24">
        <div className="container-clean text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let&apos;s Start Your Transformation
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your technology infrastructure? Our enterprise solutions team is here to help. 
            Get a free consultation and discover what&apos;s possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-clean">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A2E50] mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fill out the form below and our team will respond within 24 hours. 
                For urgent inquiries, please call us directly at (555) 123-4567.
              </p>

              {submitSuccess && (
                <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-green-700 font-semibold">
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00C4B4] focus:border-transparent outline-none transition ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00C4B4] focus:border-transparent outline-none transition ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00C4B4] focus:border-transparent outline-none transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john.doe@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00C4B4] focus:border-transparent outline-none transition ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00C4B4] focus:border-transparent outline-none transition ${
                      errors.company ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your Company Inc."
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message or Comment *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00C4B4] focus:border-transparent outline-none transition resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your project or how we can help..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF8C00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e67e00] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A2E50] mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Multiple ways to connect with our team. Choose the method that works best for you, 
                and we&apos;ll respond promptly to discuss your technology needs.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] text-white p-3 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2E50] mb-1">Address</h3>
                    <p className="text-gray-700">2137 Chelsea Blvd. Unit C1</p>
                    <p className="text-gray-700">Allen, TX 75013</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] text-white p-3 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2E50] mb-1">Phone</h3>
                    <p className="text-gray-700">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] text-white p-3 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2E50] mb-1">Email</h3>
                    <p className="text-gray-700">info@knetix.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] text-white p-3 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2E50] mb-1">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM CST</p>
                    <p className="text-gray-700">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-[#F0F2F5] rounded-lg overflow-hidden h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="font-semibold">Map Location</p>
                  <p className="text-sm">2137 Chelsea Blvd. Unit C1, Allen, TX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="bg-[#F0F2F5] py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-[#0A2E50] mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Schedule a free 30-minute consultation with our enterprise solutions team. 
            We&apos;ll discuss your challenges and explore how Knetix can help.
          </p>
          <button className="bg-[#00C4B4] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#00b3a3] transition-all duration-300 shadow-lg hover:shadow-xl">
            Book Your Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
}

