'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface SolutionBenefitsProps {
  benefits: string[];
}

export default function SolutionBenefits({ benefits }: SolutionBenefitsProps) {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container-clean">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Advisory Outcomes You Can Trust
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-12 shadow-2xl">
              <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col items-center justify-center text-center text-white space-y-3">
                <div className="text-sm uppercase tracking-[0.3em] text-white/70">
                  Our Role
                </div>
                <div className="text-3xl font-semibold">Strategy → Architecture → Provider Selection → Oversight</div>
                <p className="text-base text-white/80">
                  We remain asset-light and vendor-neutral while ensuring every partner delivers on the outcomes that matter.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

