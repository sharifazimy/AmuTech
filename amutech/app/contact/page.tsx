'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 pt-20">
        <div className="max-w-2xl mx-auto px-6 py-20">
          <h1 className="text-6xl font-bold text-center mb-12">Let's Build Something Great</h1>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="space-y-8">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input type="text" className="w-full border border-slate-300 rounded-2xl px-6 py-4" required />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input type="email" className="w-full border border-slate-300 rounded-2xl px-6 py-4" required />
              </div>
              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea rows={8} className="w-full border border-slate-300 rounded-3xl px-6 py-4" required></textarea>
              </div>
            </div>
            <button type="submit" className="mt-10 w-full bg-blue-600 text-white py-5 rounded-2xl text-lg font-semibold hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}