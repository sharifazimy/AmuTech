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

        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            
            {/* Contact Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:border-blue-600 text-base"
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
                      className="w-full px-6 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:border-blue-600 text-base"
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
                    className="w-full px-6 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:border-blue-600 text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Interested Service</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:border-blue-600 text-base"
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
                  <label className="block text-sm font-medium text-slate-600 mb-2">Project Details / Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    required
                    className="w-full px-6 py-4 border border-slate-300 rounded-3xl focus:outline-none focus:border-blue-600 text-base"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black text-white py-5 rounded-2xl font-semibold text-lg hover:bg-slate-800 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-10 pt-4 md:pt-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-6 text-base md:text-lg">
                  <p>
                    <strong>Email:</strong><br />
                    <a href="mailto:mohammadsharifazimy@gmail.com" className="text-blue-600 hover:underline">
                      mohammadsharifazimy@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Global Team</strong><br />
                    Asia • America • Europe
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl">
                <h4 className="font-semibold mb-4">Why Choose Us?</h4>
                <ul className="space-y-4 text-slate-600">
                  <li>✓ Fast response time</li>
                  <li>✓ Transparent communication</li>
                  <li>✓ Dedicated project manager</li>
                  <li>✓ Quality focused delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}