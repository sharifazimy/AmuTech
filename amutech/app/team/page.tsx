import Navbar from '../components/Navbar';

export default function Team() {
  const teamMembers = [
    {
      name: "Mohammad Sharif Azimy",
      role: "Founder & Full Stack Developer",
      location: "Global",
      description: "Leads overall strategy, architecture, and full-stack development.",
      gender: "male"
    },
    {
      name: "Zahra Azimy",
      role: "DevOps & Cloud Engineer",
      location: "Europe / Germany",
      description: "Manages cloud infrastructure, automation, and deployment pipelines.",
      gender: "female"
    },
    {
      name: "Sahar Sahehi",
      role: "Program & Project Manager",
      location: "Global",
      description: "Oversees project financial planning, implementation, timelines, and cross-functional coordination.",
      gender: "female"
    },
    {
      name: "Suhaila Sahak",
      role: "Administration Manager",
      location: "Global",
      description: "Internal process management.",
      gender: "female"
    },
    {
      name: "Zohra Veedy",
      role: "Software Engineer",
      location: "America",
      description: "Focuses on frontend development and building exceptional user interfaces.",
      gender: "female"
    },
    {
      name: "Monir Hakimi",
      role: "Backend Developer",
      location: "Asia",
      description: "Specializes in backend systems, databases, APIs, and server architecture.",
      gender: "male"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-950 to-zinc-950 text-white py-28">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
              Meet Our Team
            </h1>
            <p className="text-2xl text-slate-400 max-w-3xl mx-auto">
              A passionate global team delivering excellence across continents.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div key={index} className="group text-center">
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mb-6 flex items-center justify-center border border-slate-200 group-hover:border-blue-200 transition-all">
                    <span className="text-5xl opacity-40">
                      {member.gender === "female" ? "👩🏻‍💼" : "👨🏻‍💻"}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-slate-500 mb-6">{member.location}</p>
                  
                  <p className="text-slate-600 leading-relaxed px-4">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Operations */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Global Team. Seamless Execution.</h2>
            <p className="text-xl text-slate-600">
              From development to operations and client relations, our distributed team works efficiently across time zones to deliver consistent, high-quality results.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}