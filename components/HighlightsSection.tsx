import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Repair Services',
    description: 'Expert diesel injector & pump repair for all major brands.',
    icon: '🛠️',
  },
  {
    title: 'Certified Technicians',
    description: 'Trained and certified professionals for every job.',
    icon: '🎓',
  },
  {
    title: 'Decades of Experience',
    description: 'Over 30 years of expertise in diesel injection systems.',
    icon: '⏳',
  },
  {
    title: 'Genuine Spares',
    description: 'New & rebuilt parts, filters, tools, and kits—guaranteed.',
    icon: '🔩',
  },
  {
    title: 'Eco-Conscious Remanufacturing',
    description: 'Sustainable processes for a greener future.',
    icon: '♻️',
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { bounce: 0.2, duration: 0.8, type: 'spring' as const } },
};

function HighlightCard({ item }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-8 border border-[#1976d2] bg-white rounded-2xl shadow-md hover:scale-[1.04] hover:shadow-xl transition-all duration-300 cursor-pointer"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      tabIndex={0}
      aria-label={item.title}
    >
      <div className="text-5xl md:text-6xl mb-4 font-montserrat text-[#1976d2] drop-shadow-lg">{item.icon}</div>
      <h3 className="text-xl font-bold font-montserrat text-[#1a237e] mb-2 tracking-wide drop-shadow">{item.title}</h3>
      <p className="text-[#1976d2] text-base leading-relaxed font-inter">{item.description}</p>
    </motion.div>
  );
}

const HighlightsSection = () => (
  <section className="py-20 px-4 w-full bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full">
        {highlights.map((item) => (
          <HighlightCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
