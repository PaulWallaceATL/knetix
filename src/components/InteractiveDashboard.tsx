'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Server, Globe, Zap, Shield } from 'lucide-react';
import StatsCounter from './StatsCounter';
import IntersectionObserverWrapper from './IntersectionObserverWrapper';

export default function InteractiveDashboard() {
  const stats = [
    {
      end: 500,
      suffix: '+',
      label: 'Enterprise Clients',
      icon: <Users className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      end: 99.99,
      decimals: 2,
      suffix: '%',
      label: 'Uptime SLA',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      end: 50,
      suffix: '+',
      label: 'Countries Served',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      end: 2.5,
      decimals: 1,
      suffix: 'M+',
      label: 'Transactions Daily',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
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
        <IntersectionObserverWrapper animation="fadeInUp" className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-dark border border-white/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-bold uppercase tracking-wider">
              Real-Time Performance
            </span>
          </motion.div>
          
          <h2 className="text-h1 mb-6">
            Numbers That Speak <span className="gradient-text-gold">Volumes</span>
          </h2>
          
          <p className="text-body-lg text-white/80 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in every metric. See how we&apos;re delivering 
            exceptional value to enterprises worldwide.
          </p>
        </IntersectionObserverWrapper>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lightning Fast",
                metric: "<100ms",
                description: "Average API response time",
                icon: <Zap className="w-8 h-8" />,
                color: "from-yellow-400 to-orange-500"
              },
              {
                title: "Rock Solid",
                metric: "99.99%",
                description: "Historical uptime reliability",
                icon: <Server className="w-8 h-8" />,
                color: "from-green-400 to-emerald-500"
              },
              {
                title: "Enterprise Grade",
                metric: "SOC 2",
                description: "Type II certified security",
                icon: <Shield className="w-8 h-8" />,
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

