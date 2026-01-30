import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { 
  Github, Linkedin, Mail, ExternalLink, ArrowUpRight, 
  Terminal, Cpu, Globe, Code2, Database, Zap, 
  Award, Layers, ChevronDown, Sparkles, Command, Hash 
} from 'lucide-react';

// --- PREMIUM TEXTURE COMPONENTS ---

// 1. The "Micro-Grid" Background
const GridBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
    <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-cyan-400 opacity-20 blur-[100px]"></div>
  </div>
);

// 2. Holographic Card Effect
const HolographicCard = ({ children, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-white/10 bg-black/50 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
};

// --- SECTIONS ---

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none"
  >
    <div className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl">
      <div className="px-4 py-2 bg-white rounded-full text-black mr-2">
        <span className="font-bold tracking-tight">Amit Shah.</span>
      </div>
      {['Work', 'Projects', 'Stack'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`}
          className="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
        >
          {item}
        </a>
      ))}
      <a 
        href="#contact" 
        className="ml-2 px-5 py-2 text-sm font-bold text-white bg-white/10 rounded-full hover:bg-white/20 border border-white/5 transition-all"
      >
        Hire Me
      </a>
    </div>
  </motion.nav>
);

// SECTION 1: HERO (The Hacker Terminal)
const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "> INITIALIZING SYSTEM... \n> LOAD MODULE: AI_ARCHITECT \n> LOAD MODULE: WEB3_BUILDER \n> STATUS: ONLINE";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      
      {/* 1. Terminal Intro */}
      <div className="absolute top-32 left-6 md:left-20 font-mono text-xs md:text-sm text-green-500/50 pointer-events-none whitespace-pre-line">
        {text}
        <span className="animate-pulse">_</span>
      </div>

      {/* 2. Main Headline */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
           <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-400 backdrop-blur-md">
            AMIT KUMAR SHAH • FULL STACK ENGINEER
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-8 leading-[0.9] mix-blend-difference">
          BUILDING THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">UNSEEN.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
          I engineer <span className="text-white">intelligent systems</span>. From AI agents to decentralized finance, I turn complex code into seamless human experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#projects" className="group px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2">
            View Projects <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 text-white font-medium hover:text-gray-300 transition-colors flex items-center gap-2">
            <Terminal size={18} /> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

// SECTION 2: TECH STACK (Grid Layout)
const TechStack = () => {
  const stack = [
    { cat: "Core", items: ["React", "Next.js", "TypeScript", "Node.js"] },
    { cat: "AI Engineering", items: ["Python", "TensorFlow", "FAISS", "LangChain", "RAG"] },
    { cat: "Web3", items: ["Solidity", "Stellar SDK", "Hardhat", "IPFS"] },
    { cat: "Infrastructure", items: ["Docker", "AWS", "PostgreSQL", "Git"] }
  ];

  return (
    <section id="stack" className="py-24 px-6 border-y border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-mono text-gray-500 mb-8 uppercase tracking-widest">// Technical Architecture</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((s, i) => (
            <div key={i}>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Hash size={16} className="text-gray-600" /> {s.cat}
              </h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-gray-400 text-sm border-l border-white/10 pl-3 hover:text-white hover:border-white transition-colors cursor-default">
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
};

// SECTION 3: FEATURED ROLE (BandhuBot)
const FeaturedRole = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Current Mission</h2>
          <span className="text-gray-500 font-mono hidden md:block">01 / EXPERIENCE</span>
        </div>
        
        <HolographicCard className="rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
          {/* Decorative Blur */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                LIVE PRODUCTION
              </div>
              <h3 className="text-5xl font-bold text-white mb-2">BandhuBot.in</h3>
              <p className="text-xl text-gray-400 mb-6">Software Developer Intern</p>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Leading the frontend engineering for an AI-powered chatbot platform. My code handles the user interface, real-time payment processing, and iframe embedding logic used by external clients.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                 <div>
                   <h4 className="text-3xl font-bold text-white">40%</h4>
                   <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Faster Load (SSR)</p>
                 </div>
                 <div>
                   <h4 className="text-3xl font-bold text-white">100%</h4>
                   <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Uptime</p>
                 </div>
              </div>
            </div>

            <div className="space-y-4 flex flex-col justify-center">
              {[
                { title: "Server Side Rendering", desc: "Implemented Next.js SSR for SEO & Performance." },
                { title: "Payment Systems", desc: "Built responsive gateways using Express & React." },
                { title: "Iframe Injection", desc: "Created embeddable chat widgets for client websites." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </HolographicCard>
      </div>
    </section>
  );
};

// SECTION 4: PROJECTS (Restored Content)
const Projects = () => {
  const projects = [
    {
      title: "QuantX",
      role: "Team Lead & Lead Developer",
      desc: "A decentralized finance platform for the Stellar network. Features include a custom React SDK for blockchain transactions, Express.js backend for data indexing, and a Telegram bot for real-time asset alerts.",
      tech: ["Stellar SDK", "React", "Node.js", "Telegram API"],
      link: "#",
      featured: true
    },
    {
      title: "SkillTrade",
      role: "Full Stack Web3 Engineer",
      desc: "A P2P skill-exchange marketplace. Replaces currency with time-credits using smart contracts. Features AI-based user matching and WebRTC video calls for remote lessons.",
      tech: ["Solidity", "Hardhat", "IPFS", "WebRTC"],
      link: "#",
      featured: false
    },
    {
      title: "AgriFuel Nexus",
      role: "Technical Lead",
      desc: "Comprehensive farming advisory platform. Uses TensorFlow for plant disease detection (92% accuracy) and a LangChain chatbot to answer farmer queries in local languages.",
      tech: ["MERN Stack", "TensorFlow", "LangChain", "FAISS"],
      link: "#",
      featured: false
    },
    {
      title: "Smart Tourist Safety",
      role: "SIH Finalist",
      desc: "Risk classification system for tourists. Analyzes real-time data to generate safety scores for specific locations. Built with a microservices architecture for high availability.",
      tech: ["Java Spring Boot", "PostgreSQL", "Docker", "ML"],
      link: "#",
      featured: false
    },
    {
      title: "NerdAI",
      role: "Full Stack Developer",
      desc: "A developer productivity suite. 'NerdAI' uses RAG to answer questions about your local codebase. 'DevSync' automates documentation updates using Git hooks.",
      tech: ["Python", "OpenAI API", "Vector DB", "React"],
      link: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Built Systems</h2>
          <span className="text-gray-500 font-mono hidden md:block">02 / PROJECTS</span>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="sticky top-24 pt-8 bg-[#000000] border-t border-white/10"
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-16">
                
                {/* Left: Content */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-black text-white/10">0{index + 1}</span>
                    <div className="h-px bg-white/10 flex-grow" />
                  </div>
                  
                  <h3 className="text-4xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-cyan-400 font-mono text-sm mb-6">{project.role}</p>
                  
                  <p className="text-gray-400 leading-relaxed mb-8">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 border border-white/10 rounded-md text-xs text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.link} className="text-white font-bold border-b border-white hover:border-cyan-400 hover:text-cyan-400 transition-colors pb-1 flex items-center gap-2">
                      Live Demo <ArrowUpRight size={16} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>

                {/* Right: Visual */}
                <div className="md:col-span-7">
                  <HolographicCard className="aspect-video rounded-2xl bg-white/5 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <ExternalLink className="text-white" />
                        </div>
                        <span className="text-sm font-mono text-gray-500">VIEW PROJECT ARTIFACT</span>
                      </div>
                    </div>m
                  </HolographicCard>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// SECTION 5: FOOTER
const Footer = () => (
  <footer id="contact" className="py-32 px-6 border-t border-white/10 relative">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter mix-blend-difference">
        READY TO <br /> DEPLOY?
      </h2>
      
      <p className="text-gray-400 mb-12">
        I am currently open for full-time roles and high-impact freelance projects.
      </p>

      <div className="flex justify-center gap-4 md:gap-8 mb-24">
        <a href="mailto:as3131257@gmail.com" className="group px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 hover:scale-105 transition-all flex items-center gap-2">
          <Mail size={20} />
        </a>
        <a href="https://linkedin.com" className="p-4 bg-white/5 text-white rounded-full hover:bg-white/20 border border-white/10 transition-all">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com/Amitshah18" className="p-4 bg-white/5 text-white rounded-full hover:bg-white/20 border border-white/10 transition-all">
          <Github size={24} />
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between text-xs text-gray-600 font-mono uppercase tracking-widest">
        <p>Kolkata, India</p>
        <p>System Status: Online</p>
        <p>© 2026 Amit Kumar Shah</p>
      </div>
    </div>
  </footer>
);

export default function Portfolio() {
  return (
    <div className="bg-[#000000] min-h-screen text-white selection:bg-white selection:text-black font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
        body { font-family: 'Manrope', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>
      
      <GridBackground />
      <Navbar />
      <Hero />
      <TechStack />
      <FeaturedRole />
      <Projects />
      <Footer />
    </div>
  );
}