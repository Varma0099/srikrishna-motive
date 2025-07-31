import Image from 'next/image';

const Footer = () => (
  <footer className="w-full bg-[#0d1b4d] text-white py-8 px-4 mt-12">
    <Image src="/logo.png" alt="Sri Krishna AutoMotive Logo" width={40} height={40} className="mb-2" />
    <div>&copy; {new Date().getFullYear()} Sri Krishna AutoMotive. All rights reserved.</div>
  </footer>
);

export default Footer; 