import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe,
  Send,
  Loader2,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

// --- DATA: REALISTIC PERSONA ---
const PERSONAL_INFO = {
  name: "sanjeevi kumar",
  role: "Full Stack Engineer",
  tagline: "Crafting distinct web experiences with modern tech.",
  about: "I build accessible, high-performance web applications with React and TypeScript. I enjoy turning complex problems into simple, elegant products and shipping long-lasting solutions.",
  socials: [
    { name: "GitHub", url: "https://github.com/sanju-077", icon: <Github size={20} /> },
    { name: "LinkedIn", url: "https://linkedin.com", icon: <Linkedin size={20} /> },
    { name: "Twitter", url: "https://twitter.com", icon: <Twitter size={20} /> },
  ]
};

const PROJECTS = [
  {
    title: "Personal Portfolio",
    description: "This portfolio and blog where I share projects, case studies and experiments. Built with React and focused on speed and accessibility.",
    tags: ["React", "Vite", "CSS"],
    link: "#projects",
    github: "#"
  },
  {
    title: "Taskly — Smart Task Manager",
    description: "A productivity app that intelligently schedules tasks and syncs with calendars. Includes offline-first sync and a lightweight mobile view.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    title: "Streamlytics",
    description: "Real-time event dashboards and visualizations for streaming analytics, designed to handle high-throughput data with low latency.",
    tags: ["D3", "WebSockets", "Node.js"],
    link: "#",
    github: "#"
  }
];

const SKILLS = [
  { name: "Frontend", icon: <Globe size={18} />, items: ["HTML/CSS", "Flutter (Frontend)"] },
  { name: "Backend & Data", icon: <Terminal size={18} />, items: ["Python", "Django (learning)", "SQL", "Firebase basics"] },
  { name: "Tools", icon: <Cpu size={18} />, items: ["Git", "VS Code"] },
];

// --- COMPONENTS ---

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          SK.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-300 hover:text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center pt-20 px-6">
    <div className="max-w-4xl w-full space-y-8">
      <div className="space-y-4">
        <p className="text-emerald-400 font-medium tracking-wide animate-fade-in-up">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight leading-tight">
          {PERSONAL_INFO.name}.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 tracking-tight leading-tight">
          I build things for the web.
        </h2>
      </div>
      
      <p className="max-w-xl text-lg text-slate-400 leading-relaxed">
        {PERSONAL_INFO.about}
      </p>

      <div className="flex flex-wrap gap-4 pt-4">
        <a 
          href="#contact" 
          className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-semibold rounded-lg transition-all transform hover:-translate-y-1"
        >
          Get In Touch
        </a>
        <a 
          href="https://github.com/sanju-077" target="_blank" rel="noreferrer" 
          className="px-8 py-3 border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 font-semibold rounded-lg transition-all"
        >
          View Work
        </a>
        <a
          href="https://github.com/sanju-077" target="_blank" rel="noreferrer"
          className="px-4 py-3 border border-slate-700 text-slate-300 hover:text-emerald-400 rounded-lg flex items-center gap-2"
        >
          <Github size={18} /> View GitHub
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6 bg-slate-800/50">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            Hey — I’m Sanjeevi, a developer who loves building things that feel smooth, simple, and genuinely useful. I’m currently studying at DTU, and somewhere between late-night debugging and college chaos, I discovered that I enjoy solving problems that actually help people.
          </p>

          <p>
            I’ve worked on a few cool things — like the backend for an emotional-analysis prototype for SIH, and a Flutter app where I handled the entire frontend. I’m also growing fast in Python, SQL, and currently diving deep into Django.
          </p>

          <p>
            I’m not someone who pretends to know everything. I just learn quickly, ship fast, and figure things out as I go. If there’s a challenge, I’ll take it apart, understand it, and build something better from it.
          </p>

          <p>
            I like clean code, meaningful products, and working with people who think the same. If you want to build something interesting — let’s talk.
          </p>
        </div>
        
        <div className="relative group mx-auto md:mx-0">
          <div className="absolute -inset-4 bg-emerald-500/20 rounded-xl blur-lg group-hover:bg-emerald-500/30 transition-all duration-500"></div>
          <div className="relative w-64 h-64 bg-slate-700 rounded-xl overflow-hidden border-2 border-slate-600 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-300">
             {/* Placeholder for Profile Image */}
             <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-slate-500">
               <span className="text-6xl">SK</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-slate-100">Technical Skills</h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS.map((category) => (
          <div key={category.name} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-6 text-emerald-400">
              {category.icon}
              <h3 className="font-bold text-lg">{category.name}</h3>
            </div>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 px-6 bg-slate-800/30">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.title} className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/20">
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="text-emerald-400">
                  <Code2 size={40} strokeWidth={1.5} />
                </div>
                <div className="flex gap-4 text-slate-400">
                  <a href={project.github} className="hover:text-emerald-400 transition-colors"><Github size={20} /></a>
                  <a href={project.link} className="hover:text-emerald-400 transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-slate-500 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a href="https://github.com/sanju-077?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:underline underline-offset-4">
          View Full Project Archive on GitHub <ExternalLink size={16} />
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 mb-20">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-emerald-400 font-mono mb-4">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-12">
          Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <form onSubmit={handleSubmit} className="text-left bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-xl">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
              <textarea 
                id="message" 
                required
                rows={4}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                placeholder="Hello! I'd like to discuss..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading' || status === 'success'}
              className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                status === 'success' 
                  ? 'bg-emerald-500 text-slate-900' 
                  : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-900'
              }`}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle size={20} /> Message Sent!
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
            
            {status === 'success' && (
              <p className="text-center text-emerald-400 text-sm mt-4">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 text-center text-slate-500 text-sm bg-slate-900">
    <div className="flex justify-center gap-6 mb-4">
      {PERSONAL_INFO.socials.map((social) => (
        <a 
          key={social.name} 
          href={social.url} 
          className="hover:text-emerald-400 transition-colors"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
    <p>Designed & Built by {PERSONAL_INFO.name}</p>
    <p className="mt-2 text-xs opacity-60">Built with React & Tailwind</p>
  </footer>
);

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
