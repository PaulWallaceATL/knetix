'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What industries does Knetix serve?',
    answer: 'Knetix serves a diverse range of industries including healthcare, finance, manufacturing, retail, energy, and technology. Our solutions are tailored to meet the unique needs and compliance requirements of each sector.',
  },
  {
    question: 'How quickly can you deploy a solution?',
    answer: 'Deployment timelines vary based on complexity and scope. Simple solutions can be deployed in days, while comprehensive enterprise implementations typically range from 2-12 weeks. We work closely with you to establish realistic timelines that minimize disruption.',
  },
  {
    question: 'Do you provide 24/7 support?',
    answer: 'Yes! Our expert support team is available 24/7/365 to ensure your systems run smoothly. We offer multiple support tiers with guaranteed response times based on your service level agreement.',
  },
  {
    question: 'What makes Knetix different from other IT providers?',
    answer: 'Knetix combines deep technical expertise with a true partnership approach. We don\'t just implement solutions—we become invested in your success, providing strategic guidance, proactive monitoring, and continuous optimization.',
  },
  {
    question: 'Can you work with our existing infrastructure?',
    answer: 'Absolutely. We specialize in hybrid environments and can integrate with your current systems. Our approach is to enhance and optimize what works while modernizing areas that need improvement.',
  },
  {
    question: 'What security certifications do you maintain?',
    answer: 'Knetix maintains ISO 27001 certification, SOC 2 Type II compliance, and adheres to industry-specific standards like HIPAA for healthcare and PCI DSS for payment processing. Security is foundational to everything we do.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700">
            Get answers to common questions about our services and solutions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#00C4B4] transition-colors"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#F0F2F5] transition-colors"
              >
                <span className="font-semibold text-lg text-[#0A2E50] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#00C4B4] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#FF8C00] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e67e00] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Our Team
          </a>
        </div>
    </div>
  );
}

