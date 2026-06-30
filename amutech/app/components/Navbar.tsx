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
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-9 text-lg font-medium text-slate-700">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/team" className="hover:text-blue-600 transition">Team</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link 
          href="/contact"
          className="hidden md:block bg-black text-white px-8 py-3.5 rounded-2xl font-semibold hover:bg-slate-800 transition"
        >
          Get in Touch
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-4xl text-slate-700 hover:text-black transition z-50"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu - FIXED */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-10 px-6 text-center text-xl font-medium text-slate-800 shadow-lg">
          <div className="flex flex-col space-y-8">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/team" onClick={() => setIsOpen(false)}>Team</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="mt-6 bg-black text-white py-4 rounded-2xl font-semibold"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}