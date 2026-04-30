import { EnergyCore, Ticker } from '../components/BrahmaUI';
import { TopStories, SocialVideoSection, LiveUpdates, LocalCoverage, CtaSection, AboutUs } from '../components/NewsSections';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Instagram, Youtube } from 'lucide-react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-20 z-10 pt-10 md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,54,93,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

        <motion.div style={{ y: yTransform, opacity: opacityTransform }} className="flex flex-col items-center justify-center relative z-10 w-full max-w-7xl mx-auto px-4 h-full">
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 2, ease: "easeOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
          >
              <EnergyCore />
          </motion.div>

          {/* Floating Social Elements inside Hero */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 flex items-center justify-center">

             {/* === ANCHOR PORTRAITS === */}
             {/* Anchor 1 (Left) */}
             <motion.div 
               animate={{ y: [0, -10, 0], x: [0, 5, 0], rotate: [0, -1, 0] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
               className="absolute -ml-[40vw] -mt-[35vh] sm:-ml-[45vw] sm:-mt-[40vh] md:-ml-[45vw] md:-mt-[35vh] lg:-ml-[600px] lg:-mt-[300px] w-24 sm:w-28 md:w-32 backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-full p-1.5 hidden sm:block shadow-[0_15px_40px_rgba(0,0,0,0.6)] z-10 hover:border-white/20 transition-colors"
             >
                <div className="aspect-[3/4] bg-black/80 rounded-full overflow-hidden relative border border-white/5 group pointer-events-auto cursor-pointer shadow-inner">
                   <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-700" alt="Anchor" />
                   <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-transparent opacity-80" />
                   <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center">
                      <span className="text-[10px] font-serif font-medium text-white/90 drop-shadow-md">Shruti</span>
                      <span className="text-[6px] uppercase tracking-[0.2em] text-red-300/80 font-sans mt-0.5">Live Desk</span>
                   </div>
                </div>
             </motion.div>

             {/* Anchor 2 (Top Right) */}
             <motion.div 
               animate={{ y: [0, 15, 0], x: [0, -5, 0], rotate: [0, 2, 0] }}
               transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
               className="absolute ml-[35vw] -mt-[35vh] sm:ml-[40vw] sm:-mt-[40vh] md:ml-[40vw] md:-mt-[35vh] lg:ml-[550px] lg:-mt-[350px] w-28 sm:w-32 md:w-36 backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-full p-1.5 hidden sm:block shadow-[0_15px_40px_rgba(0,0,0,0.6)] z-10 hover:border-white/20 transition-colors"
             >
                <div className="aspect-[3/4] bg-black/80 rounded-full overflow-hidden relative border border-white/5 group pointer-events-auto cursor-pointer shadow-inner">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-700" alt="Anchor" />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-80" />
                   <div className="absolute bottom-5 left-0 right-0 flex flex-col items-center">
                      <span className="text-[11px] font-serif font-medium text-white/90 drop-shadow-md">Rahul</span>
                      <span className="text-[6px] uppercase tracking-[0.2em] text-cyan-300/80 font-sans mt-0.5">Editor</span>
                   </div>
                </div>
             </motion.div>

             {/* Anchor 3 (Bottom Center) */}
             <motion.div 
               animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
               className="absolute mt-[40vh] md:mt-[45vh] lg:mt-[350px] w-32 sm:w-36 md:w-40 backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-full p-1.5 hidden md:block shadow-[0_15px_40px_rgba(0,0,0,0.6)] z-10 hover:border-white/20 transition-colors"
             >
                <div className="aspect-[3/4] bg-black/80 rounded-full overflow-hidden relative border border-white/5 group pointer-events-auto cursor-pointer shadow-inner">
                   <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-700" alt="Anchor" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                   <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center">
                      <span className="text-[12px] font-serif font-medium text-white/90 drop-shadow-md">Priya</span>
                      <span className="text-[6.5px] uppercase tracking-[0.2em] text-white/50 font-sans mt-0.5">Top Bulletin</span>
                   </div>
                </div>
             </motion.div>

             {/* === EXISTING SOCIAL/VIDEO ELEMENTS === */}
             {/* Instagram Floating Card */}
             <motion.a 
               href="https://instagram.com/brahmanews24"
               target="_blank"
               rel="noopener noreferrer"
               title="Follow us on Instagram"
               animate={{ y: [0, -25, 0], x: [0, 15, 0], rotate: [0, 4, 0] }} 
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -ml-[35vw] -mt-[30vh] sm:-ml-[30vw] sm:-mt-[15vh] md:-ml-[40vw] md:-mt-[25vh] lg:-ml-[500px] lg:-mt-[200px] w-24 sm:w-32 md:w-48 backdrop-blur-2xl bg-black/40 border border-white/10 rounded-[14px] sm:rounded-[20px] p-1 sm:p-1.5 shadow-2xl hover:scale-105 transition-transform pointer-events-auto block z-20"
             >
                <div className="aspect-[9/16] bg-black/80 rounded-[10px] sm:rounded-2xl overflow-hidden relative border border-white/5">
                   <img src="/regenerated_image_1777534620500.png" className="w-full h-full object-cover opacity-70" alt="Instagram Reel" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                   <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 flex items-center gap-1 sm:gap-1.5 bg-black/60 px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded text-[6px] sm:text-[8px] uppercase tracking-widest border border-white/10 backdrop-blur-md"><Instagram size={10} className="text-pink-500 w-2 h-2 sm:w-2.5 sm:h-2.5" /> <span className="font-sans">Reel</span></div>
                </div>
             </motion.a>

             {/* YouTube Floating Card */}
             <motion.a 
               href="https://youtube.com/@brahmanews24"
               target="_blank"
               rel="noopener noreferrer"
               title="Subscribe on YouTube"
               animate={{ y: [0, 35, 0], x: [0, -15, 0], rotate: [0, -3, 0] }} 
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute ml-[15vw] mt-[25vh] sm:ml-[25vw] sm:mt-[25vh] md:ml-[35vw] md:mt-[30vh] lg:ml-[450px] lg:mt-[250px] w-36 sm:w-48 md:w-72 backdrop-blur-2xl bg-black/40 border border-white/10 rounded-[14px] sm:rounded-[20px] p-1 sm:p-1.5 shadow-2xl hover:scale-105 transition-transform pointer-events-auto block z-20"
             >
                <div className="aspect-video bg-black/80 rounded-[10px] sm:rounded-2xl overflow-hidden relative border border-white/5">
                   <img src="https://images.unsplash.com/photo-15540517804-bd2f54a86de3?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-70" alt="YouTube Bulletin" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                   <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 flex items-center gap-1 sm:gap-1.5 bg-black/60 px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded text-[6px] sm:text-[8px] uppercase tracking-widest border border-white/10 backdrop-blur-md"><Youtube size={10} className="text-red-500 w-2 h-2 sm:w-2.5 sm:h-2.5" /> <span className="font-sans">Prime</span></div>
                </div>
             </motion.a>
             
             {/* Facebook Floating Card */}
             <motion.a 
               href="https://facebook.com/brahmanews24"
               target="_blank"
               rel="noopener noreferrer"
               title="Like us on Facebook"
               animate={{ y: [0, -15, 0], x: [0, 10, 0], rotate: [0, -2, 0] }} 
               transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
               className="absolute ml-[25vw] -mt-[30vh] sm:ml-[25vw] sm:-mt-[25vh] md:ml-[30vw] md:-mt-[35vh] lg:ml-[400px] lg:-mt-[150px] w-28 sm:w-36 md:w-44 backdrop-blur-2xl bg-[#1877f2]/10 border border-[#1877f2]/20 rounded-[14px] sm:rounded-[20px] p-1 sm:p-1.5 shadow-2xl hover:scale-105 transition-transform pointer-events-auto hidden md:block z-20"
             >
                <div className="aspect-[4/3] bg-black/80 rounded-[10px] sm:rounded-2xl overflow-hidden relative border border-white/5">
                   <img src="https://images.unsplash.com/photo-1555008872-f03b347ffb53?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" alt="Facebook Feed" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1877f2]/60 via-transparent to-transparent opacity-80" />
                   <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 flex items-center gap-1 sm:gap-1.5 bg-black/60 px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded text-[6px] sm:text-[8px] uppercase tracking-widest border border-white/10 backdrop-blur-md">
                     <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> 
                     <span className="font-sans">Page</span>
                   </div>
                </div>
             </motion.a>
             
             {/* Ground Report Card */}
             <motion.div 
               animate={{ y: [0, -20, 0], x: [0, -10, 0], rotate: [0, 1, 0] }} 
               transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
               className="absolute -ml-[25vw] mt-[20vh] sm:-ml-[20vw] sm:mt-[25vh] md:-ml-[35vw] md:mt-[15vh] lg:-ml-[400px] lg:mt-[100px] w-24 sm:w-32 md:w-56 backdrop-blur-2xl bg-black/40 border border-white/10 rounded-[14px] sm:rounded-[20px] p-1.5 sm:p-2 shadow-2xl block z-20"
             >
                <div className="aspect-[4/3] bg-black/80 rounded-[8px] sm:rounded-xl overflow-hidden relative mb-2 sm:mb-3 border border-white/5">
                   <img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" alt="Ground Report" />
                </div>
                <div className="text-[6px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-white/50 text-center pb-1 sm:pb-2 font-sans">Ground Report</div>
             </motion.div>

             {/* === MOBILE-ONLY FLOATING MIN-CARDS (Luxurious) === */}
             <motion.div 
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
               className="absolute top-[20%] right-[3%] w-[42vw] max-w-[170px] backdrop-blur-2xl bg-[#0a1128]/80 border border-white/10 rounded-2xl p-4 sm:hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 pointer-events-auto"
             >
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                <div className="flex items-center gap-2 mb-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></div>
                   <div className="text-[7px] text-red-300 font-sans uppercase tracking-[0.2em]">Breaking</div>
                </div>
                <div className="text-[12px] text-white/90 font-serif leading-[1.3] drop-shadow-md">
                   Emergency Session Called in State Assembly
                </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, -12, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
               className="absolute top-[65%] left-[3%] w-[42vw] max-w-[170px] backdrop-blur-2xl bg-[#0a1128]/80 border border-white/10 rounded-2xl p-4 sm:hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 pointer-events-auto"
             >
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                <div className="flex items-center gap-2 mb-3">
                   <div className="w-1 h-3 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                   <div className="text-[7px] text-cyan-300 font-sans uppercase tracking-[0.2em]">Update</div>
                </div>
                <div className="text-[12px] text-white/90 font-serif leading-[1.3] drop-shadow-md">
                   Markets React Strongly to New Coalition
                </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, -8, 0] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
               className="absolute top-[80%] right-[5%] w-[40vw] max-w-[150px] backdrop-blur-2xl bg-black/60 border border-white/10 rounded-2xl p-3 sm:hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 pointer-events-auto"
             >
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></div>
                   <div className="text-[6.5px] text-blue-300 font-sans uppercase tracking-[0.2em]">Live Desk</div>
                </div>
                <div className="text-[10px] text-white/80 font-serif leading-[1.3]">
                   Chief Minister's Exclusive Interview at 8 PM.
                </div>
             </motion.div>

          </div>

          <div className="mb-6 md:mb-12 pointer-events-none select-none relative z-20 mt-32 md:mt-0">
             <motion.span 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.5, delay: 0.2 }}
               className="text-[9px] md:text-[11px] uppercase tracking-[0.5em] text-red-500 font-medium font-sans"
             >
               Born of Live Signal
             </motion.span>
          </div>

          <div className="flex justify-center pointer-events-none select-none mb-8 md:mb-12 z-20 w-full px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative group w-full max-w-4xl"
              >
                {/* Futuristic Outer Aura */}
                <div className="absolute inset-[-40px] bg-gradient-to-r from-blue-700 via-cyan-500 to-red-600 rounded-[4rem] blur-[80px] opacity-30 animate-pulse"></div>
                <div className="absolute inset-0 border-[2px] border-blue-500/30 rounded-[3rem] scale-[1.02] mix-blend-overlay"></div>

                {/* Main Logo Backplate */}
                <div className="relative flex flex-col items-center justify-center py-10 px-6 md:py-16 md:px-20 bg-gradient-to-b from-[#0a1128]/90 to-[#020617]/95 backdrop-blur-3xl border border-blue-400/30 rounded-[2rem] md:rounded-[3rem] shadow-[inset_0_0_60px_rgba(37,99,235,0.3),0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group">
                  
                  {/* Hexagon Grid Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTA0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDUybDMwLTE3LjMyIDMwIDE3LjMyTTE1IDI2TDQ1IDI2TTE1IDc4TDQ1IDc4IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] pointer-events-none mix-blend-screen"></div>

                  {/* Scanning Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] bg-[length:100%_4px] opacity-20 pointer-events-none"></div>

                  {/* Glass Highlights & Neon Edges */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent"></div>
                  
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.1)_0%,transparent_60%)] pointer-events-none"></div>

                  {/* Animated Light Sweep / Laser */}
                  <motion.div 
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute inset-0 w-[200px] bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent skew-x-[-45deg] pointer-events-none shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                  />

                  {/* Futuristic Tech Accents */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50"></div>
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-red-500/50"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-500/50"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-red-500/50"></div>

                  {/* Text Construction */}
                  <div className="flex flex-col items-center relative z-10 font-sans font-black tracking-[-0.04em] perspective-[1000px]">
                    {/* BRAHMA */}
                    <span 
                      className="text-[14vw] md:text-[120px] lg:text-[150px] leading-[0.8] uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff] via-[#e2e8f0] to-[#64748b] drop-shadow-[0_20px_20px_rgba(0,0,0,0.9)] relative"
                      style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}
                    >
                      BRAHMA
                      {/* Holographic glow */}
                      <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-t from-cyan-400/20 to-transparent blur-sm pointer-events-none">BRAHMA</span>
                    </span>
                    
                    {/* NEWS 24 Container */}
                    <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-6 w-full justify-center relative">
                      {/* Glowing Line Separator */}
                      <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

                      <span 
                        className="text-[10vw] md:text-[85px] lg:text-[110px] leading-[0.8] uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff] via-[#e2e8f0] to-[#64748b] drop-shadow-[0_20px_20px_rgba(0,0,0,0.9)] relative"
                        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
                      >
                        NEWS
                        <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-t from-cyan-400/10 to-transparent blur-sm pointer-events-none">NEWS</span>
                      </span>
                      
                      {/* 24 Red Tech Box */}
                      <div className="relative flex items-center justify-center bg-gradient-to-br from-[#ef4444] via-[#dc2626] to-[#7f1d1d] px-5 md:px-8 py-2 md:py-3 rounded-[12px] md:rounded-[16px] shadow-[0_0_50px_rgba(220,38,38,0.6),inset_0_2px_15px_rgba(255,255,255,0.4)] border border-red-300/40 transform hover:scale-105 transition-transform duration-500">
                         {/* Tech grid inside box */}
                         <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4px_4px] rounded-[12px] md:rounded-[16px]"></div>
                         <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent mix-blend-overlay rounded-[12px] md:rounded-[16px]"></div>
                         
                         {/* Flashing Dot */}
                         <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-red-400 rounded-full shadow-[0_0_10px_#ef4444] animate-pulse"></div>

                         <span className="text-[10vw] md:text-[85px] lg:text-[110px] leading-[0.75] uppercase text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] relative z-10 font-bold" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
                           24
                         </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="text-center z-20 pointer-events-none mt-12 md:mt-16"
          >
            <p className="text-sm md:text-xl font-serif italic text-white/70 max-w-lg mx-auto leading-relaxed">
              The Latest Truth.
              <span className="block text-[10px] md:text-[11px] font-sans not-italic uppercase tracking-[0.3em] mt-4 opacity-40">छत्तीसगढ़ की आवाज़, दुनिया के साथ</span>
            </p>
          </motion.div>

        </motion.div>
      </section>

      <div className="relative z-20">
        <Ticker />
      </div>
      
      <main className="relative z-20">
         <TopStories />
         <AboutUs />
         <SocialVideoSection />
         <LiveUpdates />
         <LocalCoverage />
         <CtaSection />
      </main>
    </>
  );
}
