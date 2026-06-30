import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />

      <div className="pt-0 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-950 to-zinc-950 text-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6">
              About AmuTech
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto">
              A global team of passionate technologists building the future.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg text-slate-600 max-w-none space-y-8 text-[17px] md:text-xl leading-relaxed">
              <p>
                Founded with a bold vision to deliver world-class technology solutions, 
                AmuTech brings together exceptional talent from across the globe.
              </p>
              <p>
                Our team consists of highly skilled engineers, designers, and strategists 
                based in <strong>Asia, America, and Europe</strong>. This global presence allows us to 
                combine diverse perspectives, cutting-edge knowledge, and 24/7 excellence.
              </p>
              <p>
                What unites us is our deep passion for technology and problem-solving. 
                We don’t just write code — we craft digital experiences that drive real 
                business growth. Every team member is deeply committed to quality, 
                innovation, and delivering solutions that exceed client expectations.
              </p>
              <p>
                From building high-performance websites and complex data pipelines to 
                implementing intelligent AI systems, our multicultural team works with 
                dedication and precision to turn ambitious ideas into powerful realities.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">Our Core Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  title: "Innovation First",
                  desc: "We embrace the latest technologies to deliver forward-thinking solutions."
                },
                {
                  title: "Global Excellence",
                  desc: "Our diverse team across three continents brings world-class expertise."
                },
                {
                  title: "Passion & Precision",
                  desc: "We are deeply passionate about our craft and obsessed with quality."
                }
              ].map((value, i) => (
                <div key={i} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm">
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl md:text-3xl leading-tight text-slate-200">
              To empower businesses worldwide with reliable, modern, and intelligent technology 
              solutions that drive sustainable growth in the digital age.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}