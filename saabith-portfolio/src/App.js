import React, { useState, useEffect } from "react";
import "./App.css";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Cpu,
  Terminal,
  Cloud,
  Rocket,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const bounds = element.getBoundingClientRect();
          return bounds.top <= 100 && bounds.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Student Management System",
      desc: "AI-powered student management platform integrating Google's Gemini API for PDF Q&A and schedule management.",
      tech: ["Python", "Flask", "Streamlit", "Gemini API"],
      link: "https://github.com/Saabithq/studentManagment",
      image: "https://via.placeholder.com/600x400?text=Student+Management+System"
    },
    {
      title: "Library Management System",
      desc: "Full-stack library management system with role-based access, reports, and responsive UI.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      link: "https://github.com/Saabithq/libraryManagment",
      image: "https://via.placeholder.com/600x400?text=Library+Management+System"
    },
    {
      title: "Hospital Management System",
      desc: "Comprehensive hospital system with appointment scheduling and analytics dashboard.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      link: "https://github.com/Saabithq/hospitalManagement",
      image: "https://via.placeholder.com/600x400?text=Hospital+Management+System"
    },
  ];

  const skills = {
    languages: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 80 },
      { name: "SQL", level: 85 },
    ],
    frameworks: [
      { name: "React", level: 85 },
      { name: "Flask", level: 90 },
      { name: "Laravel", level: 80 },
      { name: "Bootstrap", level: 90 },
    ],
    tools: [
      { icon: <Terminal size={24} />, name: "Linux/Shell" },
      { icon: <Cloud size={24} />, name: "AWS" },
      { icon: <Cpu size={24} />, name: "Docker" },
      { icon: <Code size={24} />, name: "Git" },
      { icon: <Rocket size={24} />, name: "CI/CD" },
      { icon: <Cloud size={24} />, name: "Kubernetes" },
    ]
  };

  // Flatten skills into a single array for rendering
  const skillList = [
    ...skills.languages.map((l) => ({ type: 'skill', label: l.name, level: l.level })),
    ...skills.frameworks.map((f) => ({ type: 'skill', label: f.name, level: f.level })),
    ...skills.tools.map((t) => ({ type: 'tool', label: t.name, icon: t.icon })),
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-300 font-sans selection:bg-teal-500/30">
      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-teal-500 text-white shadow-lg hover:bg-teal-600 transition-colors"
        >
          <ChevronDown className="w-6 h-6 transform rotate-180" />
        </motion.button>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a192f]/90 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              className="text-2xl font-bold text-teal-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              SK
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className={`font-medium ${
                    activeSection === item
                      ? 'text-teal-500'
                      : 'text-slate-300 hover:text-teal-500'
                  } transition-colors`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
              <motion.a
                href="https://linkedin.com/in/saabithk"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-teal-500 text-teal-300 rounded hover:bg-teal-500/10 transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                title="View Resume / Profile"
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300 hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="py-4 px-6 space-y-4 bg-[#0a192f] border-t border-slate-800">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-medium ${
                  activeSection === item 
                    ? 'text-teal-500' 
                    : 'text-slate-300 hover:text-teal-500'
                } transition-colors`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a
              href="https://linkedin.com/in/saabithk"
              target="_blank"
              rel="noreferrer"
              className="block px-4 py-2 border border-teal-500 text-teal-300 text-center rounded hover:bg-teal-500/10 transition-colors"
              title="View Resume / Profile"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section - Refined Layout */}
  <header id="home" className="pt-20 pb-32 relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob bg-sky-500/10 animate-blob"></div>
          <div className="blob-2 bg-pink-500/10 animate-blob animation-delay-2000"></div>
          <div className="blob-3 bg-amber-300/10 animate-blob animation-delay-4000"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-sky-400 animate-gradient-x">
                  Software Developer <br className="hidden sm:block" />
                  & DevOps Engineer
                </span>
              </h1>
            </motion.div>

            <motion.p 
              className="mt-8 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I craft elegant web experiences and build reliable infrastructure. 
              Let's create something extraordinary together.
            </motion.p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 text-slate-900 font-semibold shadow-lg hover:shadow-sky-400/20 hover:scale-105 transition-all duration-200"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all duration-200"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8">
              <motion.a 
                href="https://github.com/Saabithq" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/saabithk" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="mailto:saabithrr@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section - Glass Card Design */}
      <section id="about" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-3xl blur-2xl opacity-10"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent mb-6">About Me</h2>
                <p className="text-slate-200 leading-relaxed mb-6">
                  I build production-ready applications and reliable cloud infrastructure. I enjoy turning complex problems into simple, elegant solutions and delivering polished user experiences.
                </p>
                <ul className="space-y-4">
                  {[
                    "Building scalable full-stack systems",
                    "Designing CI/CD pipelines & automation",
                    "Optimizing performance and reliability"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-center gap-3 text-slate-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-10"></div>
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 transform hover:scale-[1.01] transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section - Timeline */}
      <section id="experience" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent mb-12 text-center">Experience</h2>
            <ol className="relative border-l border-white/10">
              {[
                { role: 'Software Developer', company: 'Freelance', period: '2023 — Present', points: ['Built AI-assisted tools with Python/Flask', 'Delivered responsive React UIs with motion'] },
                { role: 'DevOps Intern', company: 'Tech Labs', period: '2022 — 2023', points: ['Set up CI/CD with GitHub Actions', 'Containerized apps with Docker & optimized images'] },
              ].map((e, i) => (
                <li key={i} className="ml-6 mb-10">
                  <span className="absolute -left-1.5 mt-2 h-3 w-3 rounded-full bg-sky-400"></span>
                  <h3 className="text-lg font-semibold text-white">{e.role} · <span className="text-sky-300">{e.company}</span></h3>
                  <p className="text-sm text-slate-400 mb-3">{e.period}</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    {e.points.map((p, j) => (<li key={j}>{p}</li>))}
                  </ul>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Enhanced Cards */}
      <section id="projects" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent mb-12 text-center">Featured Projects</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p, idx) => (
                <motion.article 
                  key={idx}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-full bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors overflow-hidden">
                    <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 mb-4">
                      <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tech.map((t, i2) => (
                        <span 
                          key={i2} 
                          className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <a 
                        href={p.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200 transition-colors"
                      >
                        <span>View Project</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Grid Layout */}
      <section id="skills" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent mb-12 text-center">Skills & Tools</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {skillList.map((s, i) => (
                <motion.div
                  key={i}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-cyan-400/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="p-3 rounded-lg bg-white/[0.03] text-sky-300">
                        {s.icon ? s.icon : <span className="text-lg font-semibold text-slate-200">{s.label.charAt(0)}</span>}
                      </div>
                      <span className="font-medium text-slate-200">{s.label}</span>
                      {s.type === 'skill' && (
                        <div className="w-full mt-2">
                          <div className="w-full h-2 bg-white/5 rounded-full">
                            <div className="h-2 bg-teal-500 rounded-full" style={{ width: `${s.level}%` }} />
                          </div>
                          <div className="text-xs text-slate-400 mt-1">{s.level}%</div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent mb-12 text-center">What People Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: 'Delivers clean, production-ready code on time.', name: 'Product Manager' },
                { quote: 'Great at simplifying complex systems.', name: 'Tech Lead' },
                { quote: 'Excellent UI polish and DevOps mindset.', name: 'Founder' },
              ].map((t, i) => (
                <motion.blockquote key={i} className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-xl" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}>
                  <p className="text-slate-200">“{t.quote}”</p>
                  <div className="mt-4 text-sm text-slate-400">— {t.name}</div>
                </motion.blockquote>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Clean Design */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-cyan-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-3xl p-12 border border-white/10 text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent mb-6">Let's Create Together</h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                Have a project or role in mind? I'm open to freelance & full-time opportunities. 
                Let's discuss how we can work together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:saabithrr@gmail.com"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 text-slate-900 font-semibold shadow-lg hover:shadow-sky-400/20 hover:scale-105 transition-all duration-200"
                >
                  Send an Email
                </a>
                <a 
                  href="https://linkedin.com/in/saabithk"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-xl border-2 border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all duration-200"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Minimal & Clean */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-6">
              <motion.a 
                href="https://github.com/Saabithq" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/saabithk" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="mailto:saabithrr@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Saabith K · Built with React + Tailwind + Framer Motion
            </p>
          </div>
        </div>
      </footer>

      
    </div>
  );
}
