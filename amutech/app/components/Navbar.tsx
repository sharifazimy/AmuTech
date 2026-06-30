'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="AmuTech" 
            className="h-25 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-9 text-lg font-medium text-slate-800">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          <Link href="/team" className="hover:text-blue-600 transition">Team</Link>
        </div>

        <Link 
          href="/contact"
          className="bg-black text-white px-8 py-3.5 rounded-2xl font-semibold hover:bg-slate-800 transition"
        >
          Get in Touch
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}