import Layout from "../components/Layout";
import AboutUsPreviewSection from "../components/AboutUsPreviewSection";
import { motion } from 'framer-motion';

const leadership = [
  { name: 'Mr. R. Kumar', role: 'Founder & CEO', desc: 'Over 30 years in diesel engineering and workshop management.' },
  { name: 'Ms. S. Priya', role: 'Technical Director', desc: 'Certified diesel systems specialist, leading innovation and training.' },
  { name: 'Mr. A. Singh', role: 'Operations Head', desc: 'Expert in process optimization and customer service.' },
];
const affiliations = [
  'ISO 9001:2015 Certified',
  'BOSCH Diesel Service Partner',
  'Member, Diesel Technicians Association',
  'Authorized DENSO Parts Distributor',
];

const AboutPage = () => (
  <Layout title="About | Sri Krishna AutoMotive">
    <AboutUsPreviewSection />
    {/* Company History */}
    <section className="section w-full bg-white py-12">
      <motion.div
        className="max-w-3xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="mb-6 text-3xl font-bold text-[#1a237e]">Our History</h2>
        <p className="mb-6 text-[#1976d2] text-lg">
          Founded in 1992, Sri Krishna AutoMotive has grown from a small workshop to a leading diesel injection and pump repair center in the region. Our commitment to quality, innovation, and customer satisfaction has earned us industry recognition and long-standing client relationships.
        </p>
      </motion.div>
    </section>
    {/* Leadership Team */}
    <section className="section w-full bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center mb-10 text-3xl font-bold text-[#1a237e]">Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {leadership.map((leader, i) => (
            <motion.div
              key={leader.name}
              className="flex flex-col items-center text-center p-8 rounded-2xl shadow-md border border-[#1976d2] bg-white hover:scale-105 hover:shadow-lg transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: 'easeOut' }}
            >
              <div className="text-5xl mb-4">👤</div>
              <h3 className="text-lg font-bold text-[#1a237e] mb-1 tracking-wide drop-shadow">{leader.name}</h3>
              <span className="inline-block bg-[#e3f2fd] text-[#1976d2] text-xs font-semibold px-4 py-1 rounded-full mb-3 border border-[#1976d2]">{leader.role}</span>
              <p className="text-[#1976d2] text-base">{leader.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* Affiliations & Certifications */}
    <section className="section w-full bg-white py-12">
      <motion.div
        className="max-w-3xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="mb-6 text-3xl font-bold text-[#1a237e]">Affiliations & Certifications</h2>
        <ul className="list-disc list-inside text-lg mx-auto inline-block text-left text-[#1976d2]">
          {affiliations.map((item, i) => (
            <li key={i} className="mb-2 text-[#1976d2]">{item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  </Layout>
);

export default AboutPage;
