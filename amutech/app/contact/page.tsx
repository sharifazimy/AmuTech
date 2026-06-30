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

        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Contact Form */}
            <div className="md:col-span-7">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
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
                    className="w-full bg-black hover:bg-slate-800 text-white py-5 rounded-2xl font-semibold text-lg transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Side Info */}
            <div className="md:col-span-5">
              <div className="sticky top-28">
                <div className="bg-slate-50 rounded-3xl p-10">
                  <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <p className="text-slate-500 mb-1">Email</p>
                      <a href="mailto:mohammadsharifazimy@gmail.com" className="text-blue-600 hover:underline text-lg font-medium">
                        mohammadsharifazimy@gmail.com
                      </a>
                    </div>

                    <div>
                      <p className="text-slate-500 mb-1">Global Team</p>
                      <p className="text-lg">Asia • America • Europe</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 bg-white border border-slate-200 rounded-3xl p-10">
                  <h4 className="font-semibold mb-6">Why Work With Us?</h4>
                  <ul className="space-y-4 text-slate-600">
                    <li>✓ Fast & professional response</li>
                    <li>✓ Clear communication</li>
                    <li>✓ Dedicated project manager</li>
                    <li>✓ Quality focused delivery</li>
                    <li>✓ Post-launch support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}