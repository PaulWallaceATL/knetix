'use client';

import { motion } from 'framer-motion';
import { TrendingUp, BookOpen, Brain, Target, Award, Users } from 'lucide-react';
import IntersectionObserverWrapper from './IntersectionObserverWrapper';
import Link from 'next/link';

export default function ThoughtLeadership() {
  const insights = [
    {
      category: "Digital Transformation",
      title: "The Future of Enterprise Technology: 2025 and Beyond",
      excerpt: "Explore how AI, quantum computing, and edge technologies are reshaping the enterprise landscape.",
      author: "Dr. Sarah Chen",
      role: "Chief Technology Strategist",
      readTime: "8 min read",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      tags: ["AI", "Innovation", "Strategy"]
    },
    {
      category: "Cybersecurity",
      title: "Zero Trust Architecture: A Comprehensive Implementation Guide",
      excerpt: "Learn how leading enterprises are achieving unparalleled security through zero trust frameworks.",
      author: "Michael Torres",
      role: "Security & Compliance Director",
      readTime: "12 min read",
      icon: <Target className="w-6 h-6" />,
      color: "from-red-500 to-orange-500",
      tags: ["Security", "Compliance", "Best Practices"]
    },
    {
      category: "Cloud Infrastructure",
      title: "Multi-Cloud Excellence: Strategies for Optimal Performance",
      excerpt: "Discover proven approaches to maximize efficiency and minimize costs across cloud platforms.",
      author: "Jennifer Park",
      role: "Cloud Solutions Architect",
      readTime: "10 min read",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      tags: ["Cloud", "Optimization", "Cost Management"]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0A2E50 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-clean relative z-10">
        {/* Section Header */}
        <IntersectionObserverWrapper animation="fadeInUp" className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-bold text-blue-900 uppercase tracking-wider">
              Thought Leadership
            </span>
          </motion.div>
          
          <h2 className="text-h1 text-gray-900 mb-6">
            Insights That Drive{' '}
            <span className="gradient-text">Innovation</span>
          </h2>
          
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with expert perspectives, industry analysis, and actionable strategies 
            from our team of technology leaders.
          </p>
        </IntersectionObserverWrapper>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {insights.map((insight, index) => (
            <IntersectionObserverWrapper
              key={index}
              animation="fadeInUp"
              delay={index * 0.1}
            >
              <motion.article
                whileHover={{ y: -8 }}
                className="group h-full enterprise-card cursor-pointer"
              >
                {/* Category Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="badge badge-info">{insight.category}</span>
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-r ${insight.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">
                      {insight.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-h4 text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {insight.title}
                </h3>

                {/* Excerpt */}
                <p className="text-body text-gray-600 mb-6 line-clamp-3">
                  {insight.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {insight.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author & Meta */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {insight.author}
                    </div>
                    <div className="text-xs text-gray-500">{insight.role}</div>
                  </div>
                  <div className="text-sm text-gray-500">{insight.readTime}</div>
                </div>

                {/* Hover Effect Line */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${insight.color} mt-6 rounded-full`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.article>
            </IntersectionObserverWrapper>
          ))}
        </div>

        {/* Industry Recognition */}
        <IntersectionObserverWrapper animation="fadeInUp">
          <div className="glass-card rounded-3xl p-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-wider">
                    Industry Recognition
                  </span>
                </motion.div>
                
                <h3 className="text-h2 mb-4">
                  Recognized Global Leader
                </h3>
                <p className="text-body-lg text-white/90 mb-8">
                  Our thought leadership and innovative solutions have earned recognition 
                  from leading industry analysts and organizations worldwide.
                </p>
                
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-accent"
                  >
                    <Users className="w-5 h-5" />
                    Meet Our Team
                  </motion.button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { award: "Gartner Leader", year: "2024", category: "Magic Quadrant" },
                  { award: "Forbes Cloud 100", year: "2024", category: "Rising Star" },
                  { award: "Deloitte Fast 500", year: "2023", category: "Technology" },
                  { award: "ISO 27001", year: "2023", category: "Certified" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold mb-2">{item.award}</div>
                    <div className="text-sm text-white/70 mb-1">{item.category}</div>
                    <div className="text-xs text-white/50">{item.year}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </IntersectionObserverWrapper>
      </div>
    </section>
  );
}

