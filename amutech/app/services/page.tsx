import Navbar from '../components/Navbar';

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-2xl text-slate-600">High-quality technology solutions tailored for your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Web Development", "Modern websites and web apps using Next.js & React"],
              ["Mobile Apps", "iOS and Android applications that users love"],
              ["Cloud Solutions", "Scalable infrastructure on AWS and Azure"],
              ["AI & Automation", "Smart solutions using latest AI technologies"],
              ["UI/UX Design", "Beautiful and intuitive user interfaces"],
              ["IT Consulting", "Strategic technology advice and planning"]
            ].map(([title, desc], i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-3xl font-semibold mb-4">{title}</h3>
                <p className="text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}