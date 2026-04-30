import React from 'react';
import { PageHeader } from '../components/SharedUI';
import { FadeIn } from '../components/BrahmaUI';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, Radio, Cpu, Network, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full relative min-h-screen">
      <PageHeader title="Contact" subtitle="Connect With Our Desks" />
      
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn>
             <div className="flex flex-col gap-8 relative">
      
                {/* 
                  ========================================================
                  HERO BADGE (LOGO CENTERPIECE)
                  ========================================================
                */}
                <div className="group relative backdrop-blur-2xl bg-[#0a0f1d]/80 border border-[#1e293b] rounded-[2rem] p-8 md:p-10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-700 hover:-translate-y-1 hover:border-white/20">
                   {/* Atmospheric Lighting */}
                   <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none transition-all duration-700 group-hover:bg-cyan-500/20"></div>
                   <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none transition-all duration-700 group-hover:bg-red-500/20"></div>
                   
                   {/* Tech Pattern Grid */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"></div>

                   <div className="relative z-10 flex flex-col items-center text-center">
                      {/* The Premium Badge */}
                      <div className="inline-flex items-stretch h-16 md:h-20 bg-[#020617] rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.15)] border border-[#334155] overflow-hidden mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(239,68,68,0.2)]">
                         <div className="flex items-center justify-center px-6 md:px-10 border-r border-[#1e293b] bg-gradient-to-b from-[#0f172a] to-[#020617]">
                            <span className="text-white font-serif font-medium text-xl md:text-3xl tracking-[0.2em] uppercase drop-shadow-lg">
                              Brahma News
                            </span>
                         </div>
                         <div className="flex items-center justify-center px-6 md:px-8 bg-gradient-to-br from-red-500 via-red-600 to-red-800 border-l border-red-400/30 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3)_0%,transparent_60%)] pointer-events-none"></div>
                            <span className="text-white font-sans font-black text-2xl md:text-4xl tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] relative z-10">
                              24
                            </span>
                         </div>
                      </div>

                      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white tracking-tight mb-4">Official Transmissions</h2>
                      <div className="flex items-center justify-center gap-3">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-pulse"></div>
                         <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-red-400 font-bold">Secure Global Network</span>
                      </div>
                   </div>
                   <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>

                {/* 
                  ========================================================
                  CONTACT & SOCIAL MODULES GRID
                  ========================================================
                */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">

                   {/* Email Card */}
                   <a href="mailto:brahmanews24@gmail.com" className="group relative backdrop-blur-xl bg-[#0f172a]/60 border border-white/5 rounded-[1.5rem] p-5 hover:bg-[#1e293b]/80 hover:border-cyan-500/30 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                      <div className="flex items-center gap-4 relative z-10">
                         <div className="w-14 h-14 rounded-[14px] bg-black/50 border border-white/5 flex items-center justify-center group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all flex-shrink-0">
                            <Mail className="w-6 h-6 text-white/50 group-hover:text-cyan-400 transition-colors" />
                         </div>
                         <div className="flex flex-col min-w-0">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1 font-bold group-hover:text-cyan-400/80 transition-colors">Email</span>
                            <span className="font-serif text-white/80 group-hover:text-white transition-colors text-sm md:text-base truncate w-full">brahmanews24@gmail.com</span>
                         </div>
                      </div>
                   </a>

                   {/* Phone Card */}
                   <a href="tel:+919669933223" className="group relative backdrop-blur-xl bg-[#0f172a]/60 border border-white/5 rounded-[1.5rem] p-5 hover:bg-[#1e293b]/80 hover:border-cyan-500/30 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                      <div className="flex items-center gap-4 relative z-10">
                         <div className="w-14 h-14 rounded-[14px] bg-black/50 border border-white/5 flex items-center justify-center group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all flex-shrink-0">
                            <Phone className="w-6 h-6 text-white/50 group-hover:text-cyan-400 transition-colors" />
                         </div>
                         <div className="flex flex-col min-w-0">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1 font-bold group-hover:text-cyan-400/80 transition-colors">Phone</span>
                            <span className="font-serif text-white/80 group-hover:text-white transition-colors text-base md:text-lg truncate">+91 9669933223</span>
                         </div>
                      </div>
                   </a>

                   {/* Address Card (Spans full width for emphasis) */}
                   <div className="sm:col-span-2 group relative backdrop-blur-xl bg-[#0f172a]/60 border border-white/5 rounded-[1.5rem] p-5 hover:bg-[#1e293b]/80 hover:border-red-500/30 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(239,68,68,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                      <div className="flex items-center gap-4 relative z-10">
                         <div className="w-14 h-14 rounded-[14px] bg-black/50 border border-white/5 flex items-center justify-center group-hover:border-red-500/40 group-hover:bg-red-500/10 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all flex-shrink-0">
                            <MapPin className="w-6 h-6 text-white/50 group-hover:text-red-400 transition-colors" />
                         </div>
                         <div className="flex flex-col min-w-0">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1 font-bold group-hover:text-red-400/80 transition-colors">Address / Headquarters</span>
                            <span className="font-serif text-white/80 group-hover:text-white transition-colors text-base md:text-lg truncate">Raipur (C.G)</span>
                         </div>
                      </div>
                   </div>

                   {/* Instagram Card */}
                   <a href="https://instagram.com/brahmanews24" target="_blank" rel="noopener noreferrer" aria-label="Instagram Link" className="group relative backdrop-blur-xl bg-[#0f172a]/60 border border-white/5 rounded-[1.5rem] p-5 hover:bg-[#1e293b]/80 hover:border-pink-500/30 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(236,72,153,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                      <div className="flex items-center gap-4 relative z-10">
                         <div className="w-14 h-14 rounded-[14px] bg-black/50 border border-white/5 flex items-center justify-center group-hover:border-pink-500/40 group-hover:bg-pink-500/10 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] transition-all flex-shrink-0">
                            <Instagram className="w-6 h-6 text-white/50 group-hover:text-pink-400 transition-colors" />
                         </div>
                         <div className="flex flex-col min-w-0">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1 font-bold group-hover:text-pink-400/80 transition-colors">Instagram</span>
                            <span className="font-serif text-white/80 group-hover:text-white transition-colors text-base truncate">brahmanews24</span>
                         </div>
                      </div>
                   </a>

                   {/* YouTube Card */}
                   <a href="https://youtube.com/@brahmanews24" target="_blank" rel="noopener noreferrer" aria-label="YouTube Link" className="group relative backdrop-blur-xl bg-[#0f172a]/60 border border-white/5 rounded-[1.5rem] p-5 hover:bg-[#1e293b]/80 hover:border-red-500/30 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(239,68,68,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                      <div className="flex items-center gap-4 relative z-10">
                         <div className="w-14 h-14 rounded-[14px] bg-black/50 border border-white/5 flex items-center justify-center group-hover:border-red-500/40 group-hover:bg-red-500/10 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all flex-shrink-0">
                            <Youtube className="w-6 h-6 text-white/50 group-hover:text-red-400 transition-colors" />
                         </div>
                         <div className="flex flex-col min-w-0">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1 font-bold group-hover:text-red-400/80 transition-colors">YouTube</span>
                            <span className="font-serif text-white/80 group-hover:text-white transition-colors text-base truncate">BrahmaNews24</span>
                         </div>
                      </div>
                   </a>

                   {/* Facebook Card */}
                   <a href="https://facebook.com/brahmanews24" target="_blank" rel="noopener noreferrer" aria-label="Facebook Link" className="group relative backdrop-blur-xl bg-[#0f172a]/60 border border-white/5 rounded-[1.5rem] p-5 hover:bg-[#1e293b]/80 hover:border-blue-500/30 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                      <div className="flex items-center gap-4 relative z-10">
                         <div className="w-14 h-14 rounded-[14px] bg-black/50 border border-white/5 flex items-center justify-center group-hover:border-blue-500/40 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all flex-shrink-0">
                            <Facebook className="w-6 h-6 text-white/50 group-hover:text-blue-400 transition-colors" />
                         </div>
                         <div className="flex flex-col min-w-0">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1 font-bold group-hover:text-blue-400/80 transition-colors">Facebook</span>
                            <span className="font-serif text-white/80 group-hover:text-white transition-colors text-base truncate">BrahmaNews24</span>
                         </div>
                      </div>
                   </a>

                </div>
             </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
             <div className="backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] p-8 md:p-10 rounded-[2rem]">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">Secure Transmission</h3>
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Full Name</label>
                     <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors" placeholder="Enter your name" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Email Address</label>
                     <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors" placeholder="Enter your email" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Message</label>
                     <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none" placeholder="Enter your transmission..."></textarea>
                   </div>
                   <button className="mt-4 px-8 py-4 bg-white text-black font-sans text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                     Send Message
                   </button>
                </form>
             </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
