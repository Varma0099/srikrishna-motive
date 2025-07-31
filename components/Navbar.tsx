import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Workshop', href: '/workshop' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'Careers', href: '/careers' },
];

const socialLinks = [
  { Icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { Icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  { Icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="navbar sticky top-0 z-50 px-6 py-3 flex items-center shadow-xl transition-all duration-300 border-b border-blue-100 font-montserrat bg-transparent"
      style={{ WebkitBackdropFilter: 'blur(16px)' }}
    >
      {/* Brand text left-aligned */}
      <span className="font-bold text-xl tracking-wide text-white font-montserrat transition-colors duration-200 hover:text-[#e3f2fd] focus:text-[#e3f2fd]">Sri Krishna Auto-Motive</span>
      <div className="flex-1" />
      {/* Desktop nav links */}
      <div className="hidden md:flex items-center space-x-2">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-link px-3 py-2 rounded transition-colors duration-200 hover:text-[#1976d2] focus:outline-none focus:ring-2 focus:ring-[#1976d2] font-semibold text-white"
          >
            {link.label}
          </Link>
        ))}
        {/* Log In Button */}
        <Link
          href="/login"
          className="ml-4 px-5 py-2 rounded-full font-semibold text-base shadow-lg bg-gradient-to-r from-[var(--brand-blue)] via-[var(--accent-cyan)] to-[var(--brand-blue)] text-white hover:from-[var(--accent-cyan)] hover:to-[var(--brand-blue)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)]"
        >
          Log In
        </Link>
        {/* Social Icons removed as per new design */}
      </div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)] transition-all duration-200"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-7 h-7 text-[var(--accent-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-[rgba(26,26,26,0.92)] backdrop-blur-xl z-40 flex flex-col items-center justify-start pt-24 space-y-2 transition-all duration-500 md:hidden ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
        style={{ WebkitBackdropFilter: 'blur(24px)' }}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link, idx) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-link block w-full text-center py-4 text-lg font-semibold transition-colors duration-200 hover:text-[#1976d2] focus:outline-none focus:ring-2 focus:ring-[#1976d2] text-white"
            onClick={() => setMenuOpen(false)}
            style={{ borderBottom: idx !== navLinks.length - 1 ? '1px solid #e0e7ef' : 'none' }}
          >
            {link.label}
          </Link>
        ))}
        {/* Log In Button */}
        <Link
          href="/login"
          className="mt-4 px-5 py-2 rounded-full font-semibold text-base shadow-lg bg-gradient-to-r from-[var(--brand-blue)] via-[var(--accent-cyan)] to-[var(--brand-blue)] text-white hover:from-[var(--accent-cyan)] hover:to-[var(--brand-blue)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)]"
          onClick={() => setMenuOpen(false)}
        >
          Log In
        </Link>
        {/* Social Icons removed as per new design */}
      </div>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-40 transition-opacity duration-300 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar; 