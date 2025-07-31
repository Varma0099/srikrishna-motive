import { motion } from 'framer-motion';
import { useState } from 'react';

function ContactCard() {
  const [loaded, setLoaded] = useState(true); // No image, always loaded
  const [showDetails, setShowDetails] = useState(false);
  return (
    <motion.div
      className="contact-card max-w-2xl mx-auto w-full text-center p-10 border border-[#1976d2] bg-white rounded-2xl shadow-md hover:scale-[1.04] hover:shadow-lg transition-all duration-300 cursor-pointer relative group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      onClick={() => setShowDetails(v => !v)}
      tabIndex={0}
      aria-label="Show contact details"
      onKeyDown={e => { if (e.key === 'Enter') setShowDetails(v => !v); }}
    >
      {/* Skeleton loader (always loaded) */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#e3f2fd] animate-pulse rounded-2xl z-10">
          <div className="w-12 h-12 border-4 border-[#1976d2] border-dashed rounded-full animate-spin" />
        </div>
      )}
      <h2 className="text-4xl font-extrabold font-montserrat text-[#1a237e] mb-6 tracking-wide drop-shadow-lg">Contact Us</h2>
      <p className="text-lg text-[#1976d2] mb-8 leading-relaxed font-inter">
        Have questions or need to book a service? Reach out to our team for fast, friendly support.
      </p>
      <a href="/contact" className="font-semibold text-lg px-8 py-3 rounded-full bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white shadow-lg hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2]">Contact Us</a>
      {/* Interactive details overlay */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-[#1976d2]/95 bg-blur-lg rounded-2xl text-white px-6 py-4 transition-all duration-400 z-20 ${showDetails ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <span className="text-xl font-bold mb-2">Contact Us</span>
        <span className="text-base font-inter mb-2">Have questions or need to book a service? Reach out to our team for fast, friendly support.</span>
        <a href="/contact" className="mt-2 px-5 py-2 rounded-full font-semibold text-base shadow bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2]">Contact Us</a>
        <button
          className="mt-2 px-5 py-2 rounded-full font-semibold text-base shadow bg-white text-[#1976d2] border border-[#1976d2] hover:bg-[#1976d2] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
          onClick={e => { e.stopPropagation(); setShowDetails(false); }}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}

const ContactPreviewSection = () => (
  <section className="py-20 px-4 w-full bg-white">
    <ContactCard />
  </section>
);

export default ContactPreviewSection;
