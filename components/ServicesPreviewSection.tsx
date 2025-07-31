import { motion } from 'framer-motion';

const services = [
  {
    title: 'Repair',
    description: 'General and specialist repairs for any generation of diesel systems and turbochargers.',
    icon: '🛠️',
    cta: 'Book Now',
    href: '/services#repair',
  },
  {
    title: 'Rebuild',
    description: 'Eco-friendly, warranty-backed REBUILD® products for diesel injection and turbochargers.',
    icon: '♻️',
    cta: 'Book Now',
    href: '/services#rebuild',
  },
  {
    title: 'Sales',
    description: 'New units for diesel injection systems and turbochargers. All makes, all models.',
    icon: '🛒',
    cta: 'Shop Now',
    href: '/services#sales',
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { bounce: 0.2, duration: 0.8, type: 'spring' as const } },
};

function ServiceCard({ item }) {
  return (
    <motion.div
      className="service-card flex flex-col items-center text-center p-8 border border-[#1976d2] bg-white rounded-2xl shadow-md hover:scale-[1.04] hover:shadow-lg transition-all duration-300 cursor-pointer"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      tabIndex={0}
      aria-label={`Show details for ${item.title}`}
    >
      <div className="text-5xl mb-4 text-[#1976d2] drop-shadow-lg">{item.icon}</div>
      <h3 className="text-2xl font-bold text-[#1a237e] mb-2 tracking-wide drop-shadow">{item.title}</h3>
      <p className="text-[#1a237e] mb-4 text-lg leading-relaxed">{item.description}</p>
      <a href={item.href} className="mt-2 px-6 py-2 rounded-full font-semibold text-base shadow bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2]">
        {item.cta}
      </a>
    </motion.div>
  );
}

const ServicesPreviewSection = () => (
  <section className="py-20 px-4 w-full bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-[#1a237e] text-center mb-12 tracking-wide drop-shadow-lg">Our Core Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 w-full">
        {services.map((item) => (
          <ServiceCard key={item.title} item={item} />
        ))}
      </div>
      <div className="text-center">
        <a href="/services" className="font-semibold text-lg px-8 py-3 rounded-full bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white shadow-lg hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2]">View All Services</a>
      </div>
    </div>
  </section>
);

export default ServicesPreviewSection;
