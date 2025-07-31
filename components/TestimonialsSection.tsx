import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Ravi S.',
    text: '“My truck runs like new! Professional, honest, and quick turnaround.”',
  },
  {
    name: 'Priya D.',
    text: '“They diagnosed and fixed what others missed. Highly recommended!”',
  },
  {
    name: 'Amit K.',
    text: '“Genuine parts, fair pricing, and great customer service.”',
  },
];

function TestimonialCard({ t, i }) {
  const [loaded, setLoaded] = useState(true); // No image, always loaded
  const [showDetails, setShowDetails] = useState(false);
  return (
    <motion.div
      className="testimonial-card text-center p-8 border border-[#1976d2] bg-white rounded-2xl shadow-md hover:scale-[1.04] hover:shadow-lg transition-all duration-300 cursor-pointer relative group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: i * 0.1, duration: 0.7, ease: 'easeOut' }}
      onClick={() => setShowDetails(v => !v)}
      tabIndex={0}
      aria-label={`Show details for testimonial by ${t.name}`}
      onKeyDown={e => { if (e.key === 'Enter') setShowDetails(v => !v); }}
    >
      {/* Skeleton loader (always loaded) */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#e3f2fd] animate-pulse rounded-2xl z-10">
          <div className="w-12 h-12 border-4 border-[#1976d2] border-dashed rounded-full animate-spin" />
        </div>
      )}
      <p className="italic text-xl text-[#1976d2] mb-4 leading-relaxed font-inter">{t.text}</p>
      <span className="font-bold text-lg text-[#1a237e] font-montserrat">{t.name}</span>
      {/* Interactive details overlay */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-[#1976d2]/95 bg-blur-lg rounded-2xl text-white px-6 py-4 transition-all duration-400 z-20 ${showDetails ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <span className="text-xl font-bold mb-2">{t.name}</span>
        <span className="text-base font-inter mb-2">{t.text}</span>
        <button
          className="mt-2 px-5 py-2 rounded-full font-semibold text-base shadow bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
          onClick={e => { e.stopPropagation(); setShowDetails(false); }}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}

const TestimonialsSection = () => (
  <section className="py-20 px-4 w-full bg-white">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-extrabold font-montserrat text-[#1a237e] text-center mb-12 tracking-wide drop-shadow-lg">Customer Testimonials</h2>
      <div className="space-y-8 w-full">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
