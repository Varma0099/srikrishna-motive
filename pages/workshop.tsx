import Layout from '../components/Layout';
import WorkshopPreviewSection from '../components/WorkshopPreviewSection';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Workshop() {
  // Booking form state
  const [booking, setBooking] = useState({ name: '', phone: '', service: '' });
  const [bookingMsg, setBookingMsg] = useState('');
  // Resume/inquiry form state
  const [resume, setResume] = useState({ name: '', email: '', message: '', file: null });
  const [resumeMsg, setResumeMsg] = useState('');

  // Handlers (placeholder, no backend)
  const handleBooking = e => {
    e.preventDefault();
    setBookingMsg('Thank you! We will contact you soon.');
    setBooking({ name: '', phone: '', service: '' });
  };
  const handleResume = e => {
    e.preventDefault();
    setResumeMsg('Thank you for your inquiry/resume!');
    setResume({ name: '', email: '', message: '', file: null });
  };

  return (
    <Layout title="Workshop & Infrastructure | Sri Krishna AutoMotive">
      <WorkshopPreviewSection />
      {/* Booking Form */}
      <section className="py-16 w-full bg-white">
        <motion.div
          className="max-w-xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-[#1a237e] mb-6 text-center">Book a Workshop Service</h2>
          <form className="space-y-4" onSubmit={handleBooking}>
            <input type="text" required placeholder="Your Name" className="w-full px-4 py-3 rounded border border-[#1976d2] bg-white text-[#1a237e] placeholder-[#1976d2]/60 focus:ring-2 focus:ring-[#1976d2]" value={booking.name} onChange={e => setBooking({ ...booking, name: e.target.value })} />
            <input type="tel" required placeholder="Phone Number" className="w-full px-4 py-3 rounded border border-[#1976d2] bg-white text-[#1a237e] placeholder-[#1976d2]/60 focus:ring-2 focus:ring-[#1976d2]" value={booking.phone} onChange={e => setBooking({ ...booking, phone: e.target.value })} />
            <input type="text" required placeholder="Service Required" className="w-full px-4 py-3 rounded border border-[#1976d2] bg-white text-[#1a237e] placeholder-[#1976d2]/60 focus:ring-2 focus:ring-[#1976d2]" value={booking.service} onChange={e => setBooking({ ...booking, service: e.target.value })} />
            <button type="submit" className="w-full bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white py-3 rounded-full font-semibold shadow-lg hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2] text-lg">Book Now</button>
            {bookingMsg && <div className="text-green-600 text-center mt-2">{bookingMsg}</div>}
          </form>
        </motion.div>
      </section>
      {/* Inquiry/Resume Submission Form */}
      <section className="py-16 w-full bg-white">
        <motion.div
          className="max-w-xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-[#1a237e] mb-6 text-center">Online Inquiry / Resume Submission</h2>
          <form className="space-y-4" onSubmit={handleResume}>
            <input type="text" required placeholder="Your Name" className="w-full px-4 py-3 rounded border border-[#1976d2] bg-white text-[#1a237e] placeholder-[#1976d2]/60 focus:ring-2 focus:ring-[#1976d2]" value={resume.name} onChange={e => setResume({ ...resume, name: e.target.value })} />
            <input type="email" required placeholder="Email Address" className="w-full px-4 py-3 rounded border border-[#1976d2] bg-white text-[#1a237e] placeholder-[#1976d2]/60 focus:ring-2 focus:ring-[#1976d2]" value={resume.email} onChange={e => setResume({ ...resume, email: e.target.value })} />
            <textarea required placeholder="Message / Cover Letter" className="w-full px-4 py-3 rounded border border-[#1976d2] bg-white text-[#1a237e] placeholder-[#1976d2]/60 focus:ring-2 focus:ring-[#1976d2]" value={resume.message} onChange={e => setResume({ ...resume, message: e.target.value })} />
            <input type="file" accept=".pdf,.doc,.docx" className="w-full" onChange={e => setResume({ ...resume, file: e.target.files[0] })} />
            <button type="submit" className="w-full bg-gradient-to-r from-[#1976d2] via-[#2196f3] to-[#1976d2] text-white py-3 rounded-full font-semibold shadow-lg hover:from-[#1565c0] hover:to-[#1976d2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1976d2] text-lg">Submit</button>
            {resumeMsg && <div className="text-green-600 text-center mt-2">{resumeMsg}</div>}
          </form>
        </motion.div>
      </section>
    </Layout>
  );
} 