'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Brain, 
  Shield, 
  Zap, 
  Database, 
  Cloud, 
  Lock,
  Server,
} from 'lucide-react'

export default function Technology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const technologies = [
    {
      icon: Brain,
      title: 'Advanced AI/ML',
      description: 'State-of-the-art machine learning models for natural language processing and speech analysis.',
      features: ['GPT-4 Integration', 'Custom NLP Models', 'Real-time Processing'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Scalable Architecture',
      description: 'Cloud-native infrastructure designed to handle millions of interview sessions with high performance.',
      features: ['Microservices', 'Auto-scaling', 'Load Balancing'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with industry standards.',
      features: ['End-to-end Encryption', 'SOC 2 Compliance', 'GDPR Ready'],
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const techStack = [
    { name: 'React & Next.js', category: 'Frontend' },
    { name: 'Node.js & Express', category: 'Backend' },
    { name: 'MongoDB & Redis', category: 'Database' },
    { name: 'AWS & Docker', category: 'Infrastructure' },
    { name: 'TensorFlow & PyTorch', category: 'AI/ML' },
    { name: 'WebRTC & WebSocket', category: 'Real-time' }
  ]

  const metrics = [
    { value: '99.9%', label: 'Uptime' },
    { value: '<100ms', label: 'Response Time' },
    { value: '10M+', label: 'API Calls/Day' },
    { value: '256-bit', label: 'Encryption' }
  ]

  return (
    <section id="technology" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Powered by <span className="gradient-text">Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our platform leverages the latest advancements in AI, cloud computing, and security 
            to deliver exceptional interview analysis and feedback.
          </p>
        </motion.div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card-hover glass-effect p-8 rounded-2xl h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {tech.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {tech.description}
                </p>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-white/60 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Technology Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="glass-effect p-4 rounded-xl">
                  <div className="text-sm text-white/60 mb-2">{tech.category}</div>
                  <div className="text-white font-semibold">{tech.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Performance Metrics
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="glass-effect p-6 rounded-xl">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {metric.value}
                  </div>
                  <div className="text-white/60">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Architecture Description */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              Scalable & Secure Architecture
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Cloud-Native Design</h4>
                  <p className="text-white/70">Built on AWS infrastructure with auto-scaling capabilities and global CDN distribution.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Security First</h4>
                  <p className="text-white/70">Enterprise-grade security with end-to-end encryption and compliance certifications.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">High Performance</h4>
                  <p className="text-white/70">Optimized for speed with sub-100ms response times and 99.9% uptime guarantee.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Server className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  System Architecture
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Frontend</span>
                    <span className="text-white">React + Next.js</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Backend</span>
                    <span className="text-white">Node.js + Express</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Database</span>
                    <span className="text-white">MongoDB + Redis</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">AI/ML</span>
                    <span className="text-white">TensorFlow + GPT-4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Infrastructure</span>
                    <span className="text-white">AWS + Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 