'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you own data centers or operate managed infrastructure?',
    answer: 'No. Knetix is a strategic Technology Advisor. We do not own data centers, cloud platforms, or network assets. Our role is to evaluate the right providers, negotiate the best commercial constructs, and govern outcomes on your behalf.',
  },
  {
    question: 'How does the TSD ecosystem benefit my organization?',
    answer: 'By working inside the national Technology Services Distributor (TSD) ecosystem, we give you streamlined access to hundreds of vetted cloud, security, connectivity, CX, and AI providers while maintaining vendor-neutral guidance.',
  },
  {
    question: 'What industries do you support?',
    answer: 'We partner with regulated and complex enterprises across healthcare, finance, manufacturing, retail, energy, and technology. Our methodologies adapt to strict security, data, and compliance requirements.',
  },
  {
    question: 'What types of challenges do you solve?',
    answer: 'Clients engage us for multi-cloud architecture, cybersecurity governance, AI and data modernization, contact center transformation, resiliency planning, and enterprise cost optimization/FinOps initiatives.',
  },
  {
    question: 'How do you ensure cost optimization and FinOps discipline?',
    answer: 'We build FinOps guardrails into every engagement—covering funding programs, baselines, KPIs, and ongoing optimization tight to business outcomes. Providers execute; we hold them accountable.',
  },
  {
    question: 'Can you work alongside our existing teams and vendors?',
    answer: 'Absolutely. We embed with your IT, security, finance, and operations leaders, then coordinate the right partner mix through the TSD network so your teams stay focused on the business.'
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
            Questions? We Have Answers
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Find quick answers to the most common questions about Knetix services, 
            implementation timelines, and support.
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
          <p className="text-gray-700 mb-6 text-lg">
            Don&apos;t see your question answered? Our team is ready to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#FF8C00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e67e00] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ask Us Anything
          </a>
        </div>
    </div>
  );
}

