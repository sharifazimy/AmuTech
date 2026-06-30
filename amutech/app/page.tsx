import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <section className="min-h-screen bg-gradient-to-br from-slate-950 to-blue-950 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              Technology that<br />moves businesses forward
            </h1>
            <p className="text-2xl text-slate-400 mb-12">
              We design and build exceptional digital products and enterprise solutions.
            </p>
            <div className="flex gap-5">
              <a href="/services" className="bg-white text-black px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-slate-100 transition">
                Our Services
              </a>
              <a href="/contact" className="border border-white/60 hover:bg-white/10 px-10 py-5 rounded-2xl font-semibold text-lg transition">
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}