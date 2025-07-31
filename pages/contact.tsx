import Layout from '../components/Layout';
import ContactPreviewSection from '../components/ContactPreviewSection';
import { useState } from 'react';
import { motion } from 'framer-motion';

const CONTACT_PHONE = '+91 12345 67890';
const CONTACT_EMAIL = 'info@srikrishnaautomotive.com';

const showrooms = [
  {
    company: 'Sri Krishna Automotive',
    address: [
      'Auto Nagar (old), Ward-2, Opp Sai Hotel, 100 Feet Road,',
      'Door No : 54-9-6, Beside Andhra Bank,',
      'Krishna District, Vijayawada (INDIA) - 520010',
    ],
    phone: '9000508588',
    gstin: '37AJEPG9399P1Z6',
    msme: 'UDYAM-AP-06-0025169',
    map: 'https://www.google.com/maps/place/16%C2%B029%2759.4%22N+80%C2%B040%2720.8%22E/@16.4998402,80.6698751,17z/data=!3m1!4b1!4m4!3m3!8m2!3d16.4998402!4d80.67245?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D',
    email: null,
    label: 'Vijayawada Showroom',
  },
  {
    company: 'SRI KRISHNA DIESEAL SERVICE',
    address: [
      'DNo. : 8/3/8, GROUND FLOOR, KURNOOL ROAD',
      'HARIHARA KSHTHRAM, MAIN ROAD.',
      'CHIMAKURTHI, PRAKASAM (Dt) INDIA',
      'Pin code - 523226',
    ],
    phone: '+91 9000508588',
    email: 'srikrishnadiesels@gmail.com',
    gstin: '37BAVPG0668L1Z1',
    iec: 'BAVPG0668L',
    map: 'https://www.google.com/maps/place/Sri+Krishna+Diesel+Service/@15.5818036,79.8765935,20z/data=!4m6!3m5!1s0x3a4ae3eff8137ded:0x93398e24162e925c!8m2!3d15.5816324!4d79.8767999!16s%2Fg%2F11vt6183kr?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D',
    label: 'Chimakurthi Showroom',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [msg, setMsg] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setMsg('Thank you for reaching out! We will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Layout title="Contact | Sri Krishna AutoMotive">
      <ContactPreviewSection />
      {/* Showroom Locations */}
      <section className="w-full bg-white py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {showrooms.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-start p-8 rounded-2xl shadow-md border border-[#1976d2] bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: 'easeOut' }}
            >
              <h3 className="text-xl font-bold text-[#1a237e] mb-2">{s.company}</h3>
              <div className="mb-2 whitespace-pre-line">
                {s.address.map((line, idx) => (
                  <div key={idx} className="text-[#1976d2]">{line}</div>
                ))}
              </div>
              <div className="mb-1 font-medium text-[#1976d2]">Phone: <a href={`tel:${s.phone.replace(/\s+/g, '')}`} className="hover:underline text-[#1976d2]">{s.phone}</a></div>
              {s.email && <div className="mb-1 font-medium text-[#1976d2]">Email: <a href={`mailto:${s.email}`} className="hover:underline text-[#1976d2]">{s.email}</a></div>}
              <div className="mb-1 font-medium text-[#1976d2]">GSTIN: {s.gstin}</div>
              {s.msme && <div className="mb-1 font-medium text-[#1976d2]">MSME Number: {s.msme}</div>}
              {s.iec && <div className="mb-1 font-medium text-[#1976d2]">IEC Number: {s.iec}</div>}
              <a
                href={s.map}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white font-semibold px-6 py-2 rounded-full shadow hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
              >
                View on Map
              </a>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Contact Details */}
      <section className="py-12 w-full bg-white">
        <motion.div
          className="max-w-2xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Contact Details</h2>
          <div className="mb-4 flex flex-col gap-4 items-center">
            {showrooms.map((s, idx) => (
              <div key={s.label} className="text-left w-full max-w-md mx-auto p-4 rounded-xl border border-[#e3f2fd] bg-[#f5f8fc]">
                <div className="font-bold text-[#1a237e] mb-1">{s.company}</div>
                <div className="text-[#1976d2] mb-1">Phone: <a href={`tel:${s.phone.replace(/\s+/g, '')}`} className="hover:underline text-[#1976d2]">{s.phone}</a></div>
                {s.email && <div className="text-[#1976d2] mb-1">Email: <a href={`mailto:${s.email}`} className="hover:underline text-[#1976d2]">{s.email}</a></div>}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Optional Map Section (already updated) */}
      <section className="py-12 w-full bg-white">
        <motion.div
          className="max-w-5xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-bold text-[#1a237e] mb-8">Find Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vijayawada Showroom Map */}
            <div className="flex flex-col items-center">
              <span className="font-semibold text-[#1976d2] mb-2">Vijayawada Showroom</span>
              <div className="w-full h-64 rounded-xl overflow-hidden border border-[#1976d2]">
                <iframe
                  title="Vijayawada Showroom Map"
                  src="https://www.google.com/maps?q=16.4998402,80.67245&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            {/* Chimakurthi Showroom Map */}
            <div className="flex flex-col items-center">
              <span className="font-semibold text-[#1976d2] mb-2">Chimakurthi Showroom</span>
              <div className="w-full h-64 rounded-xl overflow-hidden border border-[#1976d2]">
                <iframe
                  title="Chimakurthi Showroom Map"
                  src="https://www.google.com/maps?q=15.5816324,79.8767999&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Contact Form (moved to bottom) */}
      <section className="py-12 w-full bg-white">
        <motion.div
          className="max-w-xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-bold text-[#1a237e] mb-6 text-center">Send Us a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" required placeholder="Your Name" className="w-full px-4 py-3 rounded border border-[#1976d2] bg-white text-[#1a237e] placeholder-[#1976d2]/60 focus:ring-2 focus:ring-[#1976d2]" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input type="email" required placeholder="Email Address" className="w-full px-4 py-3 rounded border border-[#1976d2] bg-white text-[#1a237e] placeholder-[#1976d2]/60 focus:ring-2 focus:ring-[#1976d2]" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <textarea required placeholder="Your Message" className="w-full px-4 py-3 rounded border border-[#1976d2] bg-white text-[#1a237e] placeholder-[#1976d2]/60 focus:ring-2 focus:ring-[#1976d2]" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            <button type="submit" className="w-full bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white py-3 rounded-full font-semibold shadow-lg hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2] text-lg">Send Message</button>
            {msg && <div className="text-green-600 text-center mt-2">{msg}</div>}
          </form>
        </motion.div>
      </section>
    </Layout>
  );
} 