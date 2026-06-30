import Navbar from './components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Full Screen Hero - No scroll initially */}
      <section className="h-screen bg-gradient-to-br from-slate-950 to-zinc-950 text-white flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
              Modern Technology Solutions<br />
              That Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">Real Results</span>
            </h1>

            <p className="text-2xl text-slate-400 mb-12 max-w-3xl">
              We design and develop high-performance websites, robust data pipelines, 
              intelligent AI solutions, and custom software that accelerate business growth.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link 
                href="/services" 
                className="bg-white text-black px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-slate-100 transition flex items-center gap-3"
              >
                Explore Our Services →
              </Link>
              <Link 
                href="/contact" 
                className="border border-white/50 hover:bg-white/10 px-10 py-5 rounded-2xl font-semibold text-lg transition"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}