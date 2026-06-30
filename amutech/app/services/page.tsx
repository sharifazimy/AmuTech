import Navbar from '../components/Navbar';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: "🌐",
      description: "Modern, high-performance websites and web applications built with Next.js, React, and TypeScript.",
      features: [
        "Custom Web Applications",
        "E-commerce Platforms",
        "Landing Pages & SaaS Products",
        "Progressive Web Apps (PWA)",
        "Performance Optimization"
      ]
    },
    {
      title: "Data Pipelines & Backend",
      icon: "📊",
      description: "Robust data infrastructure and backend systems that handle large volumes of data efficiently.",
      features: [
        "ETL Data Pipelines",
        "Database Architecture",
        "API Development",
        "Real-time Data Processing",
        "Cloud Integration (AWS, Azure)"
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      description: "Intelligent solutions that leverage artificial intelligence to automate and optimize business processes.",
      features: [
        "Custom AI Models",
        "Chatbots & Virtual Assistants",
        "Predictive Analytics",
        "Computer Vision",
        "Recommendation Systems"
      ]
    },
    {
      title: "Mobile App Development",
      icon: "📱",
      description: "Native and cross-platform mobile applications for iOS and Android with excellent user experience.",
      features: [
        "React Native & Flutter",
        "iOS & Android Apps",
        "App Store Deployment",
        "Push Notifications",
        "Offline Functionality"
      ]
    },
    {
      title: "Cloud Solutions",
      icon: "☁️",
      description: "Scalable and secure cloud infrastructure to support your growing business needs.",
      features: [
        "Cloud Migration",
        "Serverless Architecture",
        "DevOps & CI/CD",
        "Infrastructure as Code",
        "Monitoring & Security"
      ]
    },
    {
      title: "Digital Transformation",
      icon: "🚀",
      description: "End-to-end consulting and implementation to help businesses modernize their technology stack.",
      features: [
        "Technology Strategy",
        "System Integration",
        "Process Automation",
        "Team Training",
        "Legacy System Modernization"
      ]
    }
  ];

  return (
    <>
      <Navbar />

      <div className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-950 to-zinc-950 text-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to help your business thrive in the digital world.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 hover:border-blue-600 transition-all group">
                  <div className="text-5xl md:text-6xl mb-6 transition-transform group-hover:scale-110 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-5">{service.title}</h3>
                  <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-500 mb-4 uppercase tracking-widest text-sm">What We Deliver</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 text-base">
                          <span className="text-green-500 mt-1.5">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg md:text-2xl text-slate-400 mb-10">
              Let's discuss how we can help you achieve your technology goals.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-black px-10 md:px-12 py-5 rounded-2xl font-semibold text-lg md:text-xl hover:bg-slate-100 transition"
            >
              Start Your Project →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}