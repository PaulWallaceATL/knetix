'use client';

import { motion } from 'framer-motion';
import { Shield, Award, TrendingUp, Lock, CheckCircle, Zap, Globe } from 'lucide-react';
import IntersectionObserverWrapper from './IntersectionObserverWrapper';

export default function TrustBuilders() {
  const certifications = [
    {
      title: "SOC 2 Type II",
      subtitle: "Security Certified",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      description: "Independently verified security controls"
    },
    {
      title: "ISO 27001",
      subtitle: "Information Security",
      icon: <Lock className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      description: "International security standards compliance"
    },
    {
      title: "GDPR",
      subtitle: "Data Protection",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      description: "European data privacy compliance"
    },
    {
      title: "HIPAA",
      subtitle: "Healthcare Ready",
      icon: <Award className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      description: "Healthcare information protection"
    }
  ];

  const partnerships = [
    { name: "Microsoft Gold Partner", level: "Premier" },
    { name: "AWS Advanced Partner", level: "Advanced" },
    { name: "Google Cloud Partner", level: "Premier" },
    { name: "Cisco Select Partner", level: "Select" },
    { name: "VMware Principal", level: "Principal" },
    { name: "Dell Technologies", level: "Titanium" }
  ];

  const caseStudies = [
    {
      client: "Global Financial Services",
      industry: "Finance & Banking",
      challenge: "Legacy infrastructure limiting growth",
      solution: "Cloud migration & modernization",
      results: [
        { metric: "78%", label: "Cost Reduction" },
        { metric: "300%", label: "Performance Gain" },
        { metric: "99.99%", label: "Uptime SLA" }
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      client: "Healthcare Provider Network",
      industry: "Healthcare",
      challenge: "Security compliance & data protection",
      solution: "Zero-trust architecture implementation",
      results: [
        { metric: "100%", label: "Compliance Score" },
        { metric: "0", label: "Security Incidents" },
        { metric: "$2.4M", label: "Cost Avoidance" }
      ],
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      client: "E-commerce Platform",
      industry: "Retail & Technology",
      challenge: "Scaling for peak demand",
      solution: "Auto-scaling cloud infrastructure",
      results: [
        { metric: "500%", label: "Traffic Handled" },
        { metric: "40ms", label: "Avg Response" },
        { metric: "45%", label: "Cost Savings" }
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Static background - removed animation to prevent flickering */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, #0A2E50 1px, transparent 1px),
                             linear-gradient(180deg, #0A2E50 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-clean relative z-10">
        {/* Certifications & Compliance */}
        <IntersectionObserverWrapper animation="fadeInUp" className="mb-32">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-green-50 border border-blue-100 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-900 uppercase tracking-wider">
                Security & Compliance
              </span>
            </motion.div>
            
            <h2 className="text-h1 text-gray-900 mb-6">
              Enterprise-Grade <span className="gradient-text">Security</span>
            </h2>
            <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
              Your trust is our foundation. We maintain the highest security standards 
              and compliance certifications in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group enterprise-card text-center"
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-r ${cert.color} shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-white">{cert.icon}</div>
                </motion.div>
                
                <h3 className="text-h4 text-gray-900 mb-2">{cert.title}</h3>
                <div className="text-sm font-semibold text-gray-500 mb-3">{cert.subtitle}</div>
                <p className="text-body-sm text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </IntersectionObserverWrapper>

        {/* Strategic Partnerships */}
        <IntersectionObserverWrapper animation="fadeInUp" className="mb-32">
          <div className="glass-card rounded-3xl p-12 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-sm mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-blue-900 uppercase tracking-wider">
                  Strategic Partnerships
                </span>
              </motion.div>
              
              <h2 className="text-h2 text-gray-900 mb-4">
                Partnered with Industry Leaders
              </h2>
              <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
                We collaborate with the world&apos;s leading technology providers to deliver 
                best-in-class solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partnerships.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all text-center group cursor-pointer"
                >
                  <div className="font-bold text-gray-900 text-sm mb-2 group-hover:text-blue-600 transition-colors">
                    {partner.name.split(' ')[0]}
                  </div>
                  <div className="text-xs text-gray-500">{partner.level}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </IntersectionObserverWrapper>

        {/* Case Studies with ROI */}
        <IntersectionObserverWrapper animation="fadeInUp">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm font-bold text-green-900 uppercase tracking-wider">
                Proven Results
              </span>
            </motion.div>
            
            <h2 className="text-h1 text-gray-900 mb-6">
              Real Impact, Real <span className="gradient-text">Numbers</span>
            </h2>
            <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
              See how we&apos;ve helped enterprises achieve transformational results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group enterprise-card"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="badge badge-info">{study.industry}</span>
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-r ${study.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">{study.icon}</div>
                  </motion.div>
                </div>

                {/* Client */}
                <h3 className="text-h4 text-gray-900 mb-6">{study.client}</h3>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                      Challenge
                    </div>
                    <p className="text-body-sm text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                      Solution
                    </div>
                    <p className="text-body-sm text-gray-600">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
                    Results
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent mb-1`}>
                          {result.metric}
                        </div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </IntersectionObserverWrapper>
      </div>
    </section>
  );
}

