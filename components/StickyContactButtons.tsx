const StickyContactButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="tel:+911234567890"
      className="flex items-center gap-2 bg-[#1976d2] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#1565c0] transition"
      title="Call Now"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.586 6.586l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.163 23 1 16.837 1 9V8a2 2 0 012-2z" /></svg>
      Call
    </a>
    <a
      href="https://wa.me/911234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
      title="WhatsApp Chat"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A12 12 0 003.48 20.52l-1.3 4.77a1 1 0 001.22 1.22l4.77-1.3A12 12 0 0020.52 3.48zm-8.52 17a10 10 0 1110-10 10 10 0 01-10 10zm4.29-7.71l-1.42-1.42a1 1 0 00-1.42 0l-1.42 1.42a1 1 0 000 1.42l1.42 1.42a1 1 0 001.42 0l1.42-1.42a1 1 0 000-1.42z" /></svg>
      WhatsApp
    </a>
  </div>
);

export default StickyContactButtons; 