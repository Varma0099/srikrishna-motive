import Layout from '../components/Layout';
import ServicesPreviewSection from '../components/ServicesPreviewSection';
import { motion } from 'framer-motion';

const spareParts = [
  { name: 'Common Rail Injector', warranty: '6 months', desc: 'OEM & remanufactured, fits BOSCH/DENSO/Delphi.' },
  { name: 'Diesel Pump', warranty: '1 year', desc: 'Fully rebuilt, calibrated, and tested.' },
  { name: 'Nozzle Kit', warranty: '6 months', desc: 'Precision nozzles for all major brands.' },
  { name: 'Filter Set', warranty: '3 months', desc: 'High-efficiency fuel and oil filters.' },
  { name: 'Repair Tools', warranty: '1 year', desc: 'Professional-grade tools for workshops.' },
];

export default function Services() {
  return (
    <Layout title="Services | Sri Krishna AutoMotive">
      <ServicesPreviewSection />
      {/* Detailed Diesel Injector & Pump Repair Section */}
      <section className="section w-full bg-white py-12">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="mb-6 text-3xl font-bold text-[#1a237e]">Diesel Injector & Pump Repair</h2>
          <p className="mb-6 text-[#1976d2] text-lg">
            We specialize in the repair, calibration, and testing of diesel injectors and pumps for all major brands (BOSCH, DENSO, Delphi, and more). Our certified technicians use OEM-grade tools and test benches to ensure every component meets or exceeds factory standards. Fast turnaround, transparent pricing, and a warranty on all repairs.
          </p>
          <a href="/contact" className="bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2] text-lg inline-block">Book a Repair</a>
        </motion.div>
      </section>
      {/* Spare Parts Listing Section */}
      <section className="section w-full bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center mb-8 text-3xl font-bold text-[#1a237e]">Spare Parts & Components</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            {spareParts.map((part, i) => (
              <motion.div
                key={part.name}
                className="flex flex-col items-center text-center p-8 rounded-2xl shadow-md border border-[#1976d2] bg-white hover:scale-105 hover:shadow-lg transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: 'easeOut' }}
              >
                <h3 className="text-xl font-bold text-[#1a237e] mb-2 tracking-wide drop-shadow">{part.name}</h3>
                <p className="text-[#1976d2] text-base mb-2">{part.desc}</p>
                <span className="inline-block bg-[#e3f2fd] text-[#1976d2] text-xs font-semibold px-4 py-1 rounded-full mb-4 border border-[#1976d2]">Warranty: {part.warranty}</span>
                <a href="/contact" className="bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white font-semibold text-sm px-6 py-2 rounded-full shadow hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2] mt-auto">Enquire Now</a>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <a href="/contact" className="bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2] text-lg inline-block">Request a Quote</a>
          </div>
        </div>
      </section>
    </Layout>
  );
} 