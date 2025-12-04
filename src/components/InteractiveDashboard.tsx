'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Server, Globe, Zap, Shield } from 'lucide-react';
import StatsCounter from './StatsCounter';
import IntersectionObserverWrapper from './IntersectionObserverWrapper';

export default function InteractiveDashboard() {
  const stats = [
    {
      end: 325,
      suffix: '+',
      label: 'Ecosystem Providers Aligned',
      icon: <Users className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      end: 180,
      suffix: '+',
      label: 'Enterprise Programs Orchestrated',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      end: 45,
      suffix: '+',
      label: 'Regulated Industries Served',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      end: 35,
      suffix: '%',
      decimals: 0,
      label: 'Avg. Cloud & FinOps Savings',
      icon: <Server className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Static background grid - removed animation to prevent flickering */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Static orbs - removed animation to prevent flickering */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl opacity-40 pointer-events-none" />

      <div className="container-clean relative z-10">
        {/* Header */}
        <IntersectionObserverWrapper animation="fadeInUp" className="text-center mb-12 md:mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-dark border border-white/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-bold uppercase tracking-wider">
              Advisory Impact
            </span>
          </motion.div>
          
          <h2 className="text-h1 mb-6">
            Outcomes That <span className="gradient-text-gold">Stand Up</span> in the Boardroom
          </h2>
          
          <p className="text-body-lg text-white/80 max-w-3xl mx-auto">
            We measure what matters—cost optimization, resiliency, security posture, and adoption. These are the signals our Technology Advisors use to keep every transformation accountable.
          </p>
        </IntersectionObserverWrapper>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <StatsCounter
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              decimals={stat.decimals}
              label={stat.label}
              icon={stat.icon}
              color={stat.color}
              duration={2.5}
            />
          ))}
        </div>

        {/* Performance Indicators */}
        <IntersectionObserverWrapper animation="fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Cost & FinOps Governance",
                metric: "Clarity",
                description: "Integrated benchmarking, funding capture, and continuous optimization to keep investments disciplined.",
                icon: <Zap className="w-8 h-8" />,
                color: "from-yellow-400 to-orange-500"
              },
              {
                title: "Resilience & Security",
                metric: "Assured",
                description: "Zero-trust architectures, continuity planning, and provider oversight without owning any infrastructure.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-green-400 to-emerald-500"
              },
              {
                title: "AI & Data Readiness",
                metric: "Operational",
                description: "Reference architectures and governance models that unlock responsible AI, analytics, and automation.",
                icon: <Server className="w-8 h-8" />,
                color: "from-blue-400 to-cyan-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all group"
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${item.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-white">{item.icon}</div>
                </motion.div>
                
                <h3 className="text-h4 mb-2">{item.title}</h3>
                <div className={`text-4xl font-bold mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.metric}
                </div>
                <p className="text-body-sm text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </IntersectionObserverWrapper>
      </div>
    </section>
  );
}

