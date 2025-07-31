import Layout from '../components/Layout';
import { useState } from 'react';
import { motion } from 'framer-motion';

const openRoles = [
  { title: 'Diesel Mechanic', location: 'Chennai', desc: 'Experience with diesel injectors and pumps preferred.' },
  { title: 'Workshop Supervisor', location: 'Chennai', desc: 'Leadership experience in automotive workshops required.' },
  { title: 'Customer Service Executive', location: 'Remote/Chennai', desc: 'Strong communication and client management skills.' },
];

export default function Careers() {
  const [form, setForm] = useState({ name: '', email: '', role: '', file: null });
  const [msg, setMsg] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setMsg('Thank you for your application! We will review and contact you if shortlisted.');
    setForm({ name: '', email: '', role: '', file: null });
  };

  return (
    <Layout title="Careers | Sri Krishna AutoMotive">
      {/* Open Roles */}
      <section className="section w-full bg-white py-12">
        <motion.div
          className="max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-center mb-8 text-3xl font-bold text-[#1a237e]">Open Positions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            {openRoles.map((role, i) => (
              <motion.div
                key={role.title}
                className="flex flex-col items-center text-center p-8 rounded-2xl shadow-md border border-[#1976d2] bg-white hover:scale-105 hover:shadow-lg transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: 'easeOut' }}
              >
                <h3 className="text-xl font-bold text-[#1a237e] mb-2 tracking-wide drop-shadow">{role.title}</h3>
                <span className="inline-block bg-[#e3f2fd] text-[#1976d2] text-xs font-semibold px-4 py-1 rounded-full mb-4 border border-[#1976d2]">{role.location}</span>
                <p className="text-[#1976d2] text-base mb-4">{role.desc}</p>
                <a href="#apply" className="bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white font-semibold text-sm px-6 py-2 rounded-full shadow hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2] mt-auto">Apply Now</a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Resume Submission Form */}
      <section className="section w-full bg-white py-12" id="apply">
        <motion.div
          className="max-w-xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-center mb-6 text-3xl font-bold text-[#1a237e]">Submit Your Resume</h2>
          <form className="form space-y-4" onSubmit={handleSubmit}>
            <input type="text" required placeholder="Your Name" className="w-full px-4 py-3 rounded border border-[#1976d2] bg-white text-[#1a237e] placeholder-[#1976d2]/60 focus:ring-2 focus:ring-[#1976d2]" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input type="email" required placeholder="Email Address" className="w-full px-4 py-3 rounded border border-[#1976d2] bg-white text-[#1a237e] placeholder-[#1976d2]/60 focus:ring-2 focus:ring-[#1976d2]" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <select required className="w-full px-4 py-3 rounded border border-[#1976d2] bg-white text-[#1a237e] focus:ring-2 focus:ring-[#1976d2]" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}>
              <option value="">Select Role</option>
              {openRoles.map(role => (
                <option key={role.title} value={role.title}>{role.title}</option>
              ))}
            </select>
            <input type="file" accept=".pdf,.doc,.docx" className="w-full" onChange={e => setForm({ ...form, file: e.target.files[0] })} />
            <button type="submit" className="w-full bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white py-3 rounded-full font-semibold shadow-lg hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2] text-lg">Submit Application</button>
            {msg && <div className="text-center mt-2" style={{ color: '#6EE7B7' }}>{msg}</div>}
          </form>
        </motion.div>
      </section>
    </Layout>
  );
} 