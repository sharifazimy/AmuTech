import Navbar from '../components/Navbar';

export default function Services() {
  const services = [
    { title: "Web Development", desc: "Modern web platforms using Next.js, React & TypeScript" },
    { title: "Mobile Development", desc: "Native and cross-platform mobile applications" },
    { title: "Cloud Solutions", desc: "AWS, Azure & scalable cloud architecture" },
    { title: "AI Integration", desc: "Intelligent features and automation" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-6xl font-bold text-center mb-6">Our Services</h1>
          <p className="text-center text-2xl text-slate-600 mb-16">Delivering excellence across the technology spectrum</p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="border border-slate-200 rounded-3xl p-12 hover:border-blue-600 transition">
                <h3 className="text-4xl font-semibold mb-6">{service.title}</h3>
                <p className="text-xl text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}