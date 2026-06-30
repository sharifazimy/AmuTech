import Navbar from '../components/Navbar';

export default function Team() {
  const teamMembers = [
    {
      name: "Mohammad Sharif Azimy",
      role: "Founder & Full Stack Developer",
      location: "Global",
      description: "Visionary leader and experienced full-stack developer driving AmuTech's technical direction and strategy.",
      gender: "male"
    },
    {
      name: "Zahra Azimy",
      role: "DevOps Engineer",
      location: "Europe / Germany",
      description: "Expert in cloud infrastructure, automation, and CI/CD pipelines ensuring reliable and scalable systems.",
      gender: "female"
    },
    {
      name: "Sahar Sahehi",
      role: "Program Manager",
      location: "America",
      description: "Skilled program manager overseeing project delivery and ensuring smooth collaboration across teams.",
      gender: "female"
    },
    {
      name: "Suhaila Sahak",
      role: "Customer Success Manager",
      location: "Global",
      description: "Dedicated to providing exceptional client experience and ensuring long-term customer satisfaction.",
      gender: "female"
    },
    {
      name: "Zohra Veedy",
      role: "Software Engineer",
      location: "America",
      description: "Passionate software engineer focused on building high-quality, maintainable applications.",
      gender: "female"
    },
    {
      name: "Monir Hakimi",
      role: "Backend Developer",
      location: "Asia",
      description: "Specialized in backend development, databases, and building robust server-side solutions.",
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
              A diverse and passionate global team working together to deliver exceptional technology solutions.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  {/* Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl mb-6 flex items-center justify-center overflow-hidden border border-slate-200 group-hover:border-blue-200 transition-all">
                    <div className="text-8xl opacity-30">
                      {member.gender === "female" ? "👩🏻‍💼" : "👨🏻‍💻"}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-slate-500 mb-4">{member.location}</p>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Message */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">One Team. Global Strength.</h2>
            <p className="text-xl text-slate-600">
              With team members across Asia, America, and Europe, we bring diverse expertise and work seamlessly across time zones to deliver outstanding results.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}