import { motion } from 'framer-motion';
import { useState } from 'react';

function AboutCard({ title, text, delay }) {
  const [loaded, setLoaded] = useState(true); // No image, always loaded
  const [showDetails, setShowDetails] = useState(false);
  return (
    <motion.div
      className="about-card flex-1 p-8 border border-[#1976d2] bg-white rounded-2xl shadow-md hover:scale-[1.04] hover:shadow-lg transition-all duration-300 cursor-pointer relative group text-left md:text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      onClick={() => setShowDetails(v => !v)}
      tabIndex={0}
      aria-label={`Show details for ${title}`}
      onKeyDown={e => { if (e.key === 'Enter') setShowDetails(v => !v); }}
    >
      {/* Skeleton loader (always loaded) */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#e3f2fd] animate-pulse rounded-2xl z-10">
          <div className="w-12 h-12 border-4 border-[#1976d2] border-dashed rounded-full animate-spin" />
        </div>
      )}
      <h3 className="text-2xl font-bold font-montserrat text-[#1a237e] mb-3 tracking-wide drop-shadow">{title}</h3>
      <p className="text-[#1976d2] text-lg leading-relaxed font-inter">{text}</p>
      {/* Interactive details overlay */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-[#1976d2]/95 bg-blur-lg rounded-2xl text-white px-6 py-4 transition-all duration-400 z-20 ${showDetails ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <span className="text-xl font-bold mb-2">{title}</span>
        <span className="text-base font-inter mb-2">{text}</span>
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

const AboutUsPreviewSection = () => (
  <section className="py-20 px-4 w-full bg-white">
    <motion.div
      className="max-w-4xl mx-auto w-full text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-4xl font-extrabold font-montserrat text-[#1a237e] mb-8 tracking-wide drop-shadow-lg">About Srikrishna Motive</h2>
      <p className="text-lg text-[#1976d2] mb-10 leading-relaxed font-inter">
        At Srikrishna Motive, we specialize in precision diesel injection repairs, component rebuilds, and quality spares. With certified experts, state-of-the-art tools, and OEM-grade standards, we bring your engine components back to life—better, faster, greener.
      </p>
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <AboutCard title="Our Mission" text="Delivering reliable, eco-conscious diesel solutions for every client." delay={0.2} />
        <AboutCard title="Our Values" text="Quality, integrity, innovation, and sustainability in all we do." delay={0.4} />
      </div>
      <a href="/about" className="font-semibold text-lg px-8 py-3 rounded-full bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white shadow-lg hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2]">Learn More About Us</a>
    </motion.div>
  </section>
);

export default AboutUsPreviewSection;