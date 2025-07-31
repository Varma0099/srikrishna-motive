import { motion } from 'framer-motion';
import { useState } from 'react';

const GalleryGridSection = ({ images }) => (
  <section className="py-20 px-4 w-full bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold font-montserrat text-[#1a237e] text-center mb-12 tracking-wide drop-shadow-lg">
        Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12 w-full">
        {images.map((img, i) => (
          <GalleryCard key={i} img={img} index={i} />
        ))}
      </div>
    </div>
  </section>
);

function GalleryCard({ img, index }) {
  const [loaded, setLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <motion.div
      className="gallery-card p-4 flex items-center justify-center border-t-4 border-[#1976d2] bg-white rounded-2xl shadow-md hover:scale-[1.04] hover:shadow-lg transition-all duration-300 cursor-pointer relative group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      onClick={() => setShowDetails(v => !v)}
      tabIndex={0}
      aria-label={`Show details for gallery image ${index + 1}`}
      onKeyDown={e => { if (e.key === 'Enter') setShowDetails(v => !v); }}
    >
      {/* Skeleton loader */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#e3f2fd] animate-pulse rounded-2xl z-10">
          <div className="w-16 h-16 border-4 border-[#1976d2] border-dashed rounded-full animate-spin" />
        </div>
      )}
      <img
        src={img}
        alt={`Gallery image ${index + 1}`}
        className={`rounded-xl w-full h-56 object-cover border border-[#1976d2] shadow transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
      {/* Interactive details overlay */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-[#1976d2]/95 rounded-2xl text-white px-6 py-4 transition-all duration-400 z-20 ${showDetails ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <span className="text-2xl font-bold mb-2 text-white">Workshop Equipment</span>
        <span className="text-base font-inter mb-2 text-white/90">High-precision tools and certified infrastructure for every repair.</span>
        <button
          className="mt-2 px-5 py-2 rounded-full font-semibold text-base shadow bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
          onClick={e => { e.stopPropagation(); setShowDetails(false); }}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}

export default GalleryGridSection; 