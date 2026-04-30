import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/', color: 'text-gray-400', indicator: '', glow: '' },
    { label: 'Latest', path: '/latest', color: 'text-cyan-400', indicator: 'bg-cyan-500', glow: 'via-cyan-500/40' },
    { label: 'Live', path: '/live', color: 'text-red-400', indicator: 'bg-red-500', glow: 'via-red-500/40' },
    { label: 'Videos', path: '/videos', color: 'text-gray-400', indicator: '', glow: '' },
    { label: 'Chhattisgarh', path: '/chhattisgarh', color: 'text-gray-400', indicator: '', glow: '' },
    { label: 'Contact', path: '/contact', color: 'text-gray-400', indicator: '', glow: '' }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-3xl bg-[#020617]/90 border-b border-white/[0.08] transition-all duration-500 supports-[backdrop-filter]:bg-[#020617]/70 font-sans shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        {/* Architectural Top Edge */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        
        <div className="max-w-[1800px] mx-auto flex items-stretch h-20 md:h-24">
          
          {/* Left: Engineered Brand Badge */}
          <Link to="/" className="flex items-center px-6 md:px-10 border-r border-white/[0.08] relative group cursor-pointer z-20 bg-gradient-to-r from-white/[0.02] to-transparent">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
            
            {/* 3D Metallic Container */}
            <div className="relative flex items-stretch h-10 md:h-12 bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] border border-[#334155] overflow-hidden transform group-hover:translate-y-[-1px] transition-transform duration-300">
              
              {/* Glass Specular Highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              
              {/* BRAHMA NEWS Box */}
              <div className="flex items-center justify-center px-4 md:px-6 relative z-10 border-r border-[#020617] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_50%)]">
                 <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 font-serif font-medium text-xs md:text-sm tracking-[0.25em] drop-shadow-[0_2px_4px_rgba(0,0,0,1)] uppercase">
                   Brahma News
                 </span>
              </div>

              {/* 24 Tech Box */}
              <div className="flex items-center justify-center px-4 md:px-5 relative z-10 bg-gradient-to-br from-red-500 via-red-700 to-red-900 border-l border-red-500/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_6px_rgba(0,0,0,0.6)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25)_0%,transparent_60%)] pointer-events-none"></div>
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]"></div>
                <span className="text-white font-sans font-black text-[13px] md:text-[15px] tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] select-none">
                  24
                </span>
                {/* Inner glow line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-300/80 to-transparent"></div>
              </div>
            </div>
          </Link>

          {/* Center: Systematic Navigation Layout */}
          <div className="hidden lg:flex flex-1 items-stretch justify-center relative">
            <div className="flex items-stretch mx-auto bg-gradient-to-b from-white/[0.01] to-transparent border-x border-white/[0.03]">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                return (
                  <Link key={item.label} to={item.path} className="relative group flex items-center px-8 xl:px-10 border-r border-white/[0.03] last:border-0 cursor-pointer overflow-hidden">
                    {/* Hover sweep */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="flex items-center gap-2.5 relative z-10">
                      {isActive && item.indicator && (
                        <span className={`w-1.5 h-1.5 rounded-full ${item.indicator} shadow-[0_0_8px_currentColor] animate-pulse`}></span>
                      )}
                      <span className={`text-[9px] xl:text-[10px] tracking-[0.25em] uppercase font-bold transition-colors duration-300 ${isActive && item.color !== 'text-gray-400' ? item.color : (isActive ? 'text-white' : 'text-gray-400 group-hover:text-white')}`}>
                        {item.label}
                      </span>
                    </div>

                    {/* Bottom active/hover line */}
                    <div className={`absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent ${isActive && item.glow ? item.glow : 'via-white/30'} to-transparent translate-y-full ${isActive ? 'translate-y-0' : 'group-hover:translate-y-0'} transition-transform duration-300`}></div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Telemetry & Actions */}
          <div className="flex items-stretch border-l border-white/[0.08] ml-auto">
            <div className="hidden md:flex items-center px-6 xl:px-8 border-r border-white/[0.05] bg-white/[0.01]">
              <div className="flex flex-col relative py-1">
                 <div className="flex items-center gap-2 mb-1">
                    <div className="w-[3px] h-[3px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></div>
                    <span className="text-[7px] uppercase tracking-[0.4em] text-cyan-400/80 font-bold">Station 01</span>
                 </div>
                 <span className="text-[10px] tracking-[0.2em] font-sans text-gray-300 uppercase font-medium">रायपुर | 24°C</span>
              </div>
            </div>
            
            <div className="flex items-center px-5 md:px-8 gap-3 bg-gradient-to-l from-white/[0.02] to-transparent">
              <button className="w-11 h-11 rounded-sm border border-white/[0.08] bg-[#020617] flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:bg-white/[0.02] transition-all duration-300 group relative overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Search className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              </button>
              
              <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden w-11 h-11 rounded-sm border border-white/[0.08] bg-[#020617] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </nav>

      {/* Fullscreen Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#020617]/95 backdrop-blur-3xl overflow-y-auto"
          >
            <div className="flex justify-end p-6 md:p-10">
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="px-8 pb-20">
              <div className="text-[10px] font-sans text-cyan-500 tracking-[0.3em] uppercase mb-8 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-cyan-500"></div> System Navigation
              </div>
              
              <div className="flex flex-col gap-6">
                {navLinks.map((item, idx) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  >
                    <Link 
                      to={item.path} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-3xl md:text-5xl font-serif text-white/80 hover:text-white transition-colors uppercase tracking-wider relative group w-max"
                    >
                      {item.label}
                      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-transparent group-hover:w-full transition-all duration-500"></span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * navLinks.length, duration: 0.5 }}
                  >
                    <Link 
                      to="/national" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-3xl md:text-5xl font-serif text-white/80 hover:text-white transition-colors uppercase tracking-wider relative group w-max"
                    >
                      National
                      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-transparent group-hover:w-full transition-all duration-500"></span>
                    </Link>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (navLinks.length + 1), duration: 0.5 }}
                  >
                    <Link 
                      to="/crime" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-3xl md:text-5xl font-serif text-white/80 hover:text-white transition-colors uppercase tracking-wider relative group w-max"
                    >
                      Crime
                      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-transparent group-hover:w-full transition-all duration-500"></span>
                    </Link>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (navLinks.length + 2), duration: 0.5 }}
                  >
                    <Link 
                      to="/politics" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-3xl md:text-5xl font-serif text-white/80 hover:text-white transition-colors uppercase tracking-wider relative group w-max"
                    >
                      Politics
                      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-transparent group-hover:w-full transition-all duration-500"></span>
                    </Link>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (navLinks.length + 3), duration: 0.5 }}
                  >
                    <Link 
                      to="/sports" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-3xl md:text-5xl font-serif text-white/80 hover:text-white transition-colors uppercase tracking-wider relative group w-max"
                    >
                      Sports
                      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-transparent group-hover:w-full transition-all duration-500"></span>
                    </Link>
                </motion.div>

              </div>
              
              <div className="mt-16 pt-10 border-t border-white/10">
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-4">Social Network</div>
                      <div className="flex flex-col gap-3 font-sans text-sm text-gray-300">
                        <a href="https://instagram.com/brahmanews24" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-pink-500"></span> Instagram</a>
                        <a href="https://youtube.com/@brahmanews24" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-red-500"></span> YouTube</a>
                        <a href="https://facebook.com/brahmanews24" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-500"></span> Facebook</a>
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-4">Connect</div>
                      <div className="flex flex-col gap-3 font-sans text-sm text-gray-300">
                        <a href="mailto:brahmanews24@gmail.com" className="hover:text-white block truncate">brahmanews24@gmail.com</a>
                        <a href="tel:+919669933223" className="hover:text-white block">+91 9669933223</a>
                        <span className="block text-gray-500">Raipur (C.G)</span>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const EnergyCore = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] -z-10 pointer-events-none flex items-center justify-center">
    <motion.div 
      animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-red-900/10 rounded-full blur-[100px] opacity-80"
    />
    <motion.div 
      animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.1, 0.4, 0.1] }} 
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-40 h-40 md:w-96 md:h-96 rounded-full bg-red-600/10 blur-[80px]"
    />
    <div className="absolute inset-0 flex items-center justify-center">
       <div className="w-[1px] h-full max-h-[600px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
       <div className="w-full max-w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent absolute"></div>
    </div>
    {/* Shattered glass / data pulse elements */}
    <motion.div 
      animate={{ rotate: -360 }} 
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      className="absolute w-64 h-64 md:w-[600px] md:h-[600px] border border-white/[0.03] rounded-full"
    />
    <motion.div 
      animate={{ rotate: 360 }} 
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="absolute w-80 h-80 md:w-[700px] md:h-[700px] border border-blue-500/[0.05] rounded-full border-dashed"
    />
  </div>
);

export const Ticker = () => {
  const items = [
    "CHHATTISGARH ELECTIONS: NEW POLLS INDICATE SHIFT IN VOTER SENTIMENT",
    "GLOBAL MARKETS RALLY AS TECH STOCKS SURGE TO RECORD HIGHS",
    "NATIONAL: HEAVY RAINFALL ALERT ISSUED FOR NORTHERN STATES",
    "SPORTS: LOCAL HERO CLINCHES GOLD IN ASIAN CHAMPIONSHIPS",
    "BREAKING: MAJOR INFRASTRUCTURE PROJECT ANNOUNCED FOR RAIPUR"
  ];
  return (
    <div className="w-full bg-gradient-to-r from-red-950/40 via-black to-blue-950/40 border-y border-white/5 overflow-hidden py-3 relative z-20 flex touch-none">
      <div className="absolute left-0 top-0 bottom-0 px-4 bg-red-600 z-30 flex items-center justify-center hidden sm:flex">
        <span className="text-[8px] font-black uppercase tracking-widest text-white whitespace-nowrap">Breaking News</span>
      </div>
      <div className="absolute left-0 sm:left-24 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-4 top-0 bottom-0 z-30 hidden sm:flex items-center bg-transparent backdrop-blur-sm px-2">
        <span className="text-[9px] opacity-40 font-mono text-white">22:45:12 IST</span>
      </div>
      <motion.div
        className="flex whitespace-nowrap pl-4 sm:pl-32"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3 animate-pulse"></span>
            <span className="text-[10px] tracking-wide whitespace-nowrap opacity-80 uppercase text-white">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-15%" }}
    transition={{ duration: 1.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Footer = () => (
  <footer className="w-full px-8 py-32 mt-32 border-t border-white/5 backdrop-blur-md bg-white/5 relative z-20">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
      <div className="max-w-md">
        <div className="flex items-stretch rounded-lg overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.2)] border border-white/10 bg-gradient-to-b from-blue-900/80 to-[#020617]/90 w-max mb-8">
          <div className="px-5 py-2.5 flex items-center justify-center border-r border-[#020617]">
              <span className="text-white font-sans font-black text-xl tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">BRAHMA NEWS</span>
          </div>
          <div className="bg-gradient-to-b from-red-600 to-red-900 px-5 py-2.5 flex items-center justify-center border-l border-red-400/30">
              <span className="text-white font-sans font-black text-xl drop-shadow-md">24</span>
          </div>
        </div>
        <p className="font-sans text-sm text-gray-400 leading-loose tracking-wide">
          Built for Truth. Live for Chhattisgarh. Delivering impartial, bold, and high-fidelity journalism to the heart of India and beyond.
        </p>
      </div>
      <div className="flex flex-wrap gap-16 md:gap-24 font-sans text-xs tracking-[0.15em] uppercase">
        <div className="flex flex-col gap-6">
          <span className="text-gray-600 font-semibold mb-2">Connect</span>
          <a href="https://instagram.com/brahmanews24" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors normal-case tracking-normal">Instagram: @brahmanews24</a>
          <a href="https://youtube.com/@brahmanews24" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors normal-case tracking-normal">YouTube: BrahmaNews24</a>
          <a href="https://facebook.com/brahmanews24" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors normal-case tracking-normal">Facebook: BrahmaNews24</a>
        </div>
         <div className="flex flex-col gap-6">
          <span className="text-gray-600 font-semibold mb-2">Contact</span>
          <a href="mailto:brahmanews24@gmail.com" className="text-gray-400 hover:text-white transition-colors lowercase tracking-normal">brahmanews24@gmail.com</a>
          <a href="tel:+919669933223" className="text-gray-400 hover:text-white transition-colors">+91 9669933223</a>
          <span className="text-gray-500">Raipur (C.G)</span>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-600 tracking-[0.2em] uppercase">
      <span>&copy; {new Date().getFullYear()} Brahma News 24. All rights reserved.</span>
      <span className="mt-4 md:mt-0 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
        TRANSMISSION ENCRYPTED.
      </span>
    </div>
  </footer>
);
