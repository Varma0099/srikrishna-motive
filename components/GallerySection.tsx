import { motion } from 'framer-motion';

const placeholder = 'https://via.placeholder.com/300x200?text=No+Image';

const GallerySection = ({ cases }) => (
  <section className="py-20 px-4 w-full bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-[#1a237e] text-center mb-12 tracking-wide drop-shadow-lg">Before & After Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 w-full">
        {cases.map((item, i) => (
          <motion.div
            key={i}
            className="card flex flex-col items-center text-center p-8 border border-[#1976d2] bg-white rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-4">
              <div className="flex-1">
                <span className="block text-xs text-[#1976d2] mb-1">Before</span>
                <img src={item.before || placeholder} alt="Before" className="rounded-xl w-full h-40 object-cover border border-[#1976d2] shadow" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[#1976d2] mb-1">After</span>
                <img src={item.after || placeholder} alt="After" className="rounded-xl w-full h-40 object-cover border border-[#1976d2] shadow" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#1a237e] mb-2 tracking-wide drop-shadow">Case {i + 1}</h3>
            <p className="text-[#1976d2] text-lg leading-relaxed mb-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection; 