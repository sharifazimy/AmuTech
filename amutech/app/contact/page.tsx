'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We've received your message and will get back to you within 24 hours.");
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />

      <div className="pt-0 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-950 to-zinc-950 text-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Let's Build Something Great Together
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Have a project in mind? We're ready to discuss how we can help your business grow.
            </p>
          </div>
        </section>

        {/* Simple Contact Section */}
        <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-slate-600">We'll get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Company Name</label>
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-6 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Interested Service</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-6 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:border-blue-600"
              >
                <option value="">Select a Service</option>
                <option value="web">Web Development</option>
                <option value="data">Data Pipelines & Backend</option>
                <option value="ai">AI & Machine Learning</option>
                <option value="mobile">Mobile App Development</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="consulting">Digital Transformation</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Project Details</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={8}
                required
                className="w-full px-6 py-4 border border-slate-300 rounded-3xl focus:outline-none focus:border-blue-600"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-black hover:bg-slate-800 text-white py-5 rounded-2xl font-semibold text-lg transition mt-4"
            >
              Send Message
            </button>
          </form>

          {/* Simple Contact Info */}
          <div className="mt-16 text-center">
            <p className="text-slate-500 mb-3">Or email us directly at</p>
            <a 
              href="mailto:mohammadsharifazimy@gmail.com" 
              className="text-blue-600 text-lg font-medium hover:underline"
            >
              mohammadsharifazimy@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}