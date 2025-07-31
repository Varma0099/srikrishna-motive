import { motion } from 'framer-motion';
import { useState } from 'react';

const features = [
  {
    title: 'Years of Experience',
    description: 'Decades of expertise in diesel injection systems.',
    icon: '⏳',
  },
  {
    title: 'Certified Technicians',
    description: 'Trained and certified professionals for every job.',
    icon: '🎓',
  },
  {
    title: 'OEM-Grade Tools',
    description: 'State-of-the-art equipment for precision work.',
    icon: '🛠️',
  },
  {
    title: 'Eco-Conscious Remanufacturing',
    description: 'Sustainable processes for a greener future.',
    icon: '🌱',
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { bounce: 0.2, duration: 0.8, type: 'spring' as const } },
};

function FeatureCard({ item }) {
  const [loaded, setLoaded] = useState(true); // Icon, so always loaded
  const [showDetails, setShowDetails] = useState(false);
  return (
    <motion.div
      className="feature-card flex items-start gap-6 p-8 border border-[#1976d2] bg-white rounded-2xl shadow-md hover:scale-[1.04] hover:shadow-lg transition-all duration-300 cursor-pointer relative group"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      onClick={() => setShowDetails(v => !v)}
      tabIndex={0}
      aria-label={`Show details for ${item.title}`}
      onKeyDown={e => { if (e.key === 'Enter') setShowDetails(v => !v); }}
    >
      {/* Skeleton loader for icon (always loaded) */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#e3f2fd] animate-pulse rounded-2xl z-10">
          <div className="w-12 h-12 border-4 border-[#1976d2] border-dashed rounded-full animate-spin" />
        </div>
      )}
      <div className="text-5xl md:text-6xl mb-2 font-montserrat text-[#1976d2] drop-shadow-lg">{item.icon}</div>
      <div>
        <h3 className="text-2xl font-bold font-montserrat text-[#1a237e] mb-2 tracking-wide drop-shadow">{item.title}</h3>
        <p className="text-[#1976d2] text-lg leading-relaxed font-inter">{item.description}</p>
      </div>
      {/* Interactive details overlay */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-[#1976d2]/95 bg-blur-lg rounded-2xl text-white px-6 py-4 transition-all duration-400 z-20 ${showDetails ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <span className="text-xl font-bold mb-2">{item.title}</span>
        <span className="text-base font-inter mb-2">{item.description}</span>
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

const WhyChooseUsSection = () => (
  <section className="py-20 px-4 w-full bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-extrabold font-montserrat text-[#1a237e] text-center mb-12 tracking-wide drop-shadow-lg">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {features.map((item, i) => (
          <FeatureCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;