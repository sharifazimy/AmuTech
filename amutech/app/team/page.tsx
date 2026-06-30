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
      description: "Oversees project planning, timelines, and cross-functional coordination.",
      gender: "female"
    },
    {
      name: "Suhaila Sahak",
      role: "Global Administration Manager",
      location: "Global",
      description: "Handles internal operations, team coordination, documentation, and administrative processes.",
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

      {/* Tight spacing like Home Page */}
      <div className="pt-0 bg-white">
        {/* Hero Section - Same style as Home */}
        <section className="bg-gradient-to-br from-slate-950 to-zinc-950 text-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto">
              A passionate global team delivering excellence across continents.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {teamMembers.map((member, index) => (
                <div key={index} className="group text-center bg-white rounded-3xl p-8 border border-slate-100 hover:border-blue-200 transition-all">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mb-6 flex items-center justify-center border border-slate-200 group-hover:border-blue-200 transition-all">
                    <span className="text-5xl opacity-40">
                      {member.gender === "female" ? "👩🏻‍💼" : "👨🏻‍💻"}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-1 text-slate-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-slate-500 mb-6">{member.location}</p>
                  
                  <p className="text-slate-600 leading-relaxed text-[15px] md:text-base">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}