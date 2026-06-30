import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 pt-20">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-6xl font-bold mb-10">About AmuTech</h1>
          <p className="text-2xl text-slate-600 leading-relaxed mb-12">
            We are a team of passionate engineers, designers, and strategists dedicated to building technology that matters.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
              <p className="text-lg text-slate-600">To empower businesses with innovative, reliable, and scalable digital solutions.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Values</h3>
              <ul className="space-y-4 text-lg text-slate-600">
                <li>✦ Obsessed with quality</li>
                <li>✦ Transparent communication</li>
                <li>✦ Long-term thinking</li>
                <li>✦ Continuous innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}