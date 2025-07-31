import React from 'react';
import { motion } from 'framer-motion';

const trustIndicators = [
  { icon: '🔧', label: 'Certified Technicians' },
  { icon: '🛡️', label: 'Genuine Parts' },
  { icon: '⏱️', label: 'Quick Turnaround' },
];

const HeroSection = () => (
  <section
    className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f5f8fc] to-[#e6f0fa] py-8 md:py-0"
    style={{ minHeight: '80vh' }}
  >
    {/* Animated floating ellipse background */}
    <motion.div
      className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-[#b6d0f7] to-[#e3f2fd] rounded-full opacity-40 blur-3xl z-0"
      initial={{ scale: 0.9, opacity: 0.3 }}
      animate={{ scale: 1.05, opacity: 0.4 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    />
    <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-10 md:gap-0">
      {/* Left: Text Content */}
      <motion.div
        className="flex-1 flex flex-col items-start justify-center text-left md:pr-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-3 font-montserrat text-[#1a237e] drop-shadow-lg leading-tight relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          Premium Diesel Injector <br className="hidden md:block" />& Pump Repair
          {/* Gradient accent bar under headline */}
          <span className="block mt-2 w-24 h-1 rounded-full bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2]" />
        </motion.h1>
        <motion.p
          className="text-base md:text-lg lg:text-xl mb-6 font-inter font-medium text-[#1976d2] drop-shadow max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
        >
          Certified expertise, genuine parts, and fast turnaround. Trusted by professionals for over 30 years.
        </motion.p>
        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap gap-3 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        >
          {trustIndicators.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1976d2] shadow-sm text-[#1976d2] font-inter text-sm">
              <span className="text-lg text-[#1976d2]" aria-hidden="true">{icon}</span>
              <span className="text-[#1976d2]">{label}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
        >
          <a
            href="/contact"
            className="bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white font-semibold px-7 py-3 rounded-full shadow-xl hover:from-[#1565c0] hover:to-[#1976d2] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2] text-base"
          >
            Book a Service
          </a>
          <a
            href="/services"
            className="border-2 border-[#1976d2] text-[#1976d2] font-semibold px-7 py-3 rounded-full shadow hover:bg-[#e3f2fd] hover:text-[#0d1b4d] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2] text-base"
          >
            View Services
          </a>
        </motion.div>
      </motion.div>
      {/* Right: Logo Image (no card, fills right half) */}
      <motion.div
        className="flex-1 flex items-center justify-center w-full h-full md:h-[520px]"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src="/logo.png"
          alt="Sri Krishna Auto-Motive Logo"
          className="w-full h-64 md:h-[420px] lg:h-[520px] object-contain object-center drop-shadow-2xl"
          draggable="false"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;