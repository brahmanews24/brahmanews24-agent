import React from 'react';
import { FadeIn } from './BrahmaUI';
import { Play, ArrowUpRight, Instagram, Youtube, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export const AboutUs = () => (
  <section className="py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/[0.02] relative overflow-hidden">
    {/* Luxurious Background Elements */}
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000000,rgba(10,17,40,0.5),#000000)] pointer-events-none" />
    <div className="absolute left-[-20%] top-0 w-[70%] h-[100%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.03)_0%,transparent_60%)] pointer-events-none blur-[100px]" />
    <div className="absolute right-[-10%] bottom-0 w-[50%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.02)_0%,transparent_70%)] pointer-events-none blur-[100px]" />

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center relative z-10">
      <div className="lg:col-span-5 relative order-2 lg:order-1">
        <FadeIn>
           {/* Editorial Identity Visual */}
           <div className="relative aspect-[4/5] md:aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 p-1 rounded-[2rem] bg-gradient-to-b from-white/[0.08] to-transparent shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
             <div className="absolute inset-0 bg-black/40 rounded-[2rem] backdrop-blur-sm"></div>
             <div className="relative h-full w-full rounded-[1.8rem] overflow-hidden bg-[#020617] flex items-center justify-center">
                
                {/* Background image overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
                    <img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Newsroom" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent"></div>

                {/* Tech Rings (More subtle) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/[0.03] rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-white/[0.02] rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                
                {/* Center Core */}
                <div className="relative z-10 w-40 h-40 bg-gradient-to-b from-white/[0.05] to-transparent rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                    <div className="w-36 h-36 rounded-full bg-gradient-to-b from-[#111] to-[#000] flex items-center justify-center shadow-inner border border-white/[0.02]">
                      <span className="text-white/90 font-serif text-4xl font-light tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">BN24</span>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center">
                   <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent mb-4"></div>
                   <div className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(220,38,38,0.8)] animate-pulse" />
                     <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/50">Broadcasting Live</span>
                   </div>
                </div>
             </div>
           </div>
        </FadeIn>
      </div>

      <div className="lg:col-span-7 order-1 lg:order-2">
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-4 mb-10">
             <div className="w-8 h-[1px] bg-white/20"></div>
             <span className="text-[9px] uppercase tracking-[0.5em] text-white/40 font-sans">About Us</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-[80px] mb-10 text-white leading-[1.05] tracking-tight">
            The Fearless Pulse of <br/> <strong className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Chhattisgarh</strong>.
          </h2>
          <div className="font-sans text-sm md:text-lg text-white/50 leading-relaxed font-light space-y-8 max-w-2xl mb-16">
            <p className="text-white/70">
              BrahmaNews24 was founded with a singular, uncompromising mission: to deliver truth directly from the ground to your screens. We are not just another news portal; we are a digital-first, cinematic news experience.
            </p>
            <p>
              Deeply rooted in Raipur, our focus remains on Chhattisgarh and its profound connection to the national narrative. We cut through the noise, bypass the clutter, and bring you immersive journalism, political insight, and real-time live updates.
            </p>
          </div>

          {/* Enhanced Contact & Social Showcase */}
          <div className="border-t border-white/[0.05] pt-16 relative">
             {/* Decorative Corner */}
             <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20"></div>

             <div className="flex flex-col gap-10">
                {/* Brand Badge */}
                <div className="group relative backdrop-blur-2xl bg-[#0a0f1d]/80 border border-[#1e293b] rounded-[2rem] p-8 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-700 hover:-translate-y-1 hover:border-white/20 w-fit">
                   <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-cyan-500/20"></div>
                   <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-red-600/10 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-red-500/20"></div>
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"></div>

                   <div className="relative z-10 flex flex-col items-start text-left">
                      <div className="inline-flex items-stretch h-14 md:h-16 bg-[#020617] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.15)] border border-[#334155] overflow-hidden mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(239,68,68,0.2)]">
                         <div className="flex items-center justify-center px-4 md:px-6 border-r border-[#1e293b] bg-gradient-to-b from-[#0f172a] to-[#020617]">
                            <span className="text-white font-serif font-medium text-lg md:text-xl tracking-[0.2em] uppercase drop-shadow-lg">
                              Brahma News
                            </span>
                         </div>
                         <div className="flex items-center justify-center px-4 md:px-6 bg-gradient-to-br from-red-500 via-red-600 to-red-800 border-l border-red-400/30 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3)_0%,transparent_60%)] pointer-events-none"></div>
                            <span className="text-white font-sans font-black text-xl md:text-2xl tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] relative z-10">
                              24
                            </span>
                         </div>
                      </div>
                      <h3 className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-400 font-bold mb-2">Secure Global Network</h3>
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse"></div>
                         <span className="font-serif text-white/70 italic">Verified Transmissions</span>
                      </div>
                   </div>
                   <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>

                {/* Info Modules Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                   {/* Email Card */}
                   <a href="mailto:brahmanews24@gmail.com" className="group relative backdrop-blur-xl bg-[#0f172a]/60 border border-white/5 rounded-2xl p-5 hover:bg-[#1e293b]/80 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      <div className="flex items-center gap-4 relative z-10">
                         <div className="w-12 h-12 rounded-[12px] bg-black/50 border border-white/5 flex items-center justify-center group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all flex-shrink-0">
                            <Mail className="w-5 h-5 text-white/50 group-hover:text-cyan-400 transition-colors" />
                         </div>
                         <div className="flex flex-col min-w-0">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1 font-bold group-hover:text-cyan-400/80 transition-colors">Email</span>
                            <span className="font-serif text-white/90 group-hover:text-white transition-colors text-sm md:text-base truncate block w-full">brahmanews24@gmail.com</span>
                         </div>
                      </div>
                   </a>

                   {/* Phone Card */}
                   <a href="tel:+919669933223" className="group relative backdrop-blur-xl bg-[#0f172a]/60 border border-white/5 rounded-2xl p-5 hover:bg-[#1e293b]/80 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      <div className="flex items-center gap-4 relative z-10">
                         <div className="w-12 h-12 rounded-[12px] bg-black/50 border border-white/5 flex items-center justify-center group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all flex-shrink-0">
                            <Phone className="w-5 h-5 text-white/50 group-hover:text-cyan-400 transition-colors" />
                         </div>
                         <div className="flex flex-col min-w-0">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1 font-bold group-hover:text-cyan-400/80 transition-colors">Phone</span>
                            <span className="font-serif text-white/90 group-hover:text-white transition-colors text-sm md:text-base block truncate">+91 9669933223</span>
                         </div>
                      </div>
                   </a>

                   {/* Address Card */}
                   <div className="group relative backdrop-blur-xl bg-[#0f172a]/60 border border-white/5 rounded-2xl p-5 hover:bg-[#1e293b]/80 hover:border-red-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(239,68,68,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      <div className="flex items-center gap-4 relative z-10">
                         <div className="w-12 h-12 rounded-[12px] bg-black/50 border border-white/5 flex items-center justify-center group-hover:border-red-500/40 group-hover:bg-red-500/10 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all flex-shrink-0">
                            <MapPin className="w-5 h-5 text-white/50 group-hover:text-red-400 transition-colors" />
                         </div>
                         <div className="flex flex-col min-w-0">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1 font-bold group-hover:text-red-400/80 transition-colors">Headquarters</span>
                            <span className="font-serif text-white/90 group-hover:text-white transition-colors text-sm md:text-base block truncate">Raipur (C.G)</span>
                         </div>
                      </div>
                   </div>

                   {/* Instagram Card */}
                   <a href="https://instagram.com/brahmanews24" target="_blank" rel="noopener noreferrer" aria-label="Instagram Link" className="group relative backdrop-blur-xl bg-[#0f172a]/60 border border-white/5 rounded-2xl p-5 hover:bg-[#1e293b]/80 hover:border-pink-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(236,72,153,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      <div className="flex items-center gap-4 relative z-10">
                         <div className="w-12 h-12 rounded-[12px] bg-black/50 border border-white/5 flex items-center justify-center group-hover:border-pink-500/40 group-hover:bg-pink-500/10 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] transition-all flex-shrink-0">
                            <Instagram className="w-5 h-5 text-white/50 group-hover:text-pink-400 transition-colors" />
                         </div>
                         <div className="flex flex-col min-w-0">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1 font-bold group-hover:text-pink-400/80 transition-colors">Instagram</span>
                            <span className="font-serif text-white/90 group-hover:text-white transition-colors text-sm md:text-base block truncate">brahmanews24</span>
                         </div>
                      </div>
                   </a>

                   {/* YouTube Card */}
                   <a href="https://youtube.com/@brahmanews24" target="_blank" rel="noopener noreferrer" aria-label="YouTube Link" className="group relative backdrop-blur-xl bg-[#0f172a]/60 border border-white/5 rounded-2xl p-5 hover:bg-[#1e293b]/80 hover:border-red-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(239,68,68,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      <div className="flex items-center gap-4 relative z-10">
                         <div className="w-12 h-12 rounded-[12px] bg-black/50 border border-white/5 flex items-center justify-center group-hover:border-red-500/40 group-hover:bg-red-500/10 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all flex-shrink-0">
                            <Youtube className="w-5 h-5 text-white/50 group-hover:text-red-400 transition-colors" />
                         </div>
                         <div className="flex flex-col min-w-0">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1 font-bold group-hover:text-red-400/80 transition-colors">YouTube</span>
                            <span className="font-serif text-white/90 group-hover:text-white transition-colors text-sm md:text-base block truncate">BrahmaNews24</span>
                         </div>
                      </div>
                   </a>

                   {/* Facebook Card */}
                   <a href="https://facebook.com/brahmanews24" target="_blank" rel="noopener noreferrer" aria-label="Facebook Link" className="group relative backdrop-blur-xl bg-[#0f172a]/60 border border-white/5 rounded-2xl p-5 hover:bg-[#1e293b]/80 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      <div className="flex items-center gap-4 relative z-10">
                         <div className="w-12 h-12 rounded-[12px] bg-black/50 border border-white/5 flex items-center justify-center group-hover:border-blue-500/40 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all flex-shrink-0">
                            <Facebook className="w-5 h-5 text-white/50 group-hover:text-blue-400 transition-colors" />
                         </div>
                         <div className="flex flex-col min-w-0">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1 font-bold group-hover:text-blue-400/80 transition-colors">Facebook</span>
                            <span className="font-serif text-white/90 group-hover:text-white transition-colors text-sm md:text-base block truncate">BrahmaNews24</span>
                         </div>
                      </div>
                   </a>
                </div>
             </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* 
  ===========================================
  UPDATE LATEST NEWS HERE
  ===========================================
  The first item in the array is the large featured story.
  The rest are the smaller stories on the side.
*/
const newsData = [
  {
    id: 1,
    title: "The Shift in Power: A New Era for Indian Legislature Operations",
    category: "Exclusive Coverage",
    excerpt: "In an unprecedented assembly, regional delegates have united to push forward the new developmental agenda, changing the political landscape of the nation permanently.",
    time: "8 MIN READ",
    location: "Raipur",
    // Featured Political Image
    image: "/regenerated_image_1777534619697.png",
    url: "#"
  },
  {
    id: 2,
    title: "Global Markets Stabilize After Week of Historic Tech Volatility",
    category: "Markets",
    excerpt: null,
    time: "2 Hrs Ago",
    location: null,
    // Market News Image
    image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1000&auto=format&fit=crop",
    url: "#"
  },
  {
    id: 3,
    title: "Raipur's Urban Expansion: The Cost of Commercial Advancement",
    category: "Local",
    excerpt: "Local activists raise concerns over the rapid industrial zoning pushing into heritage agricultural lands across the capital region.",
    time: "5 Hrs Ago",
    location: "Raipur",
    image: null,
    url: "#"
  }
];

export const TopStories = () => (
  <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
    <FadeIn>
      <div className="flex items-center gap-6 mb-16">
        <div className="h-[1px] flex-1 bg-white/10"></div>
        <h2 className="font-sans text-[10px] tracking-[0.3em] text-gray-500 uppercase">Top Stories</h2>
        <div className="h-[1px] flex-1 bg-white/10"></div>
      </div>
    </FadeIn>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
      {/* Featured Large Story */}
      <div className="lg:col-span-8 group cursor-pointer relative overflow-hidden min-h-[500px] lg:min-h-[600px] backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-2 flex flex-col justify-end transition-colors duration-500 hover:bg-white/[0.04]">
        <FadeIn className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black overflow-hidden rounded-2xl m-2">
                <img src={newsData[0].image || ""} className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000 ease-out" alt={newsData[0].title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>
        </FadeIn>
        <a href={newsData[0].url} className="relative z-10 w-full max-w-4xl p-8 md:p-12 pt-40 block">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-[9px] uppercase tracking-widest text-red-500 font-bold font-sans">{newsData[0].category}</span>
                <div className="h-[1px] w-16 bg-red-500/20"></div>
            </div>
            <h3 className="font-serif text-3xl md:text-5xl lg:text-7xl font-medium leading-[1.05] mb-6 group-hover:text-gray-300 transition-colors duration-500 text-white tracking-tight">
                {newsData[0].title}
            </h3>
            {newsData[0].excerpt && (
              <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed hidden sm:block max-w-2xl font-light">
                  {newsData[0].excerpt}
              </p>
            )}
            <p className="text-[9px] mt-8 opacity-40 uppercase tracking-[0.3em] font-sans">
              {newsData[0].time}{newsData[0].location ? ` • ${newsData[0].location}` : ''}
            </p>
        </a>
      </div>
      
      {/* Side Smaller Stories */}
      <div className="lg:col-span-4 flex flex-col gap-8">
        {newsData.slice(1).map((item, index) => (
          <FadeIn key={item.id} delay={0.2 + (index * 0.2)} className={index === 0 ? "h-full" : ""}>
              <a href={item.url} className={`backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] p-6 rounded-3xl group cursor-pointer flex flex-col hover:bg-white/[0.04] transition-colors duration-500 ${index === 0 ? "h-full" : ""}`}>
                 <div className="flex items-center gap-3 mb-5">
                   <span className="text-[9px] uppercase tracking-widest text-red-500 font-bold font-sans">{item.category}</span>
                   <div className="h-[1px] flex-1 bg-red-500/20"></div>
                 </div>
                 
                 {item.image && (
                   <div className="overflow-hidden mb-6 h-48 bg-black rounded-xl">
                        <img src={item.image} className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-all duration-700 ease-out" alt={item.title} />
                   </div>
                 )}
                 
                 <h4 className="font-serif text-2xl md:text-3xl font-medium leading-[1.2] group-hover:text-gray-300 transition-colors text-white tracking-tight">
                   {item.title}
                 </h4>
                 
                 {item.excerpt && (
                   <p className="font-sans text-sm text-white/40 leading-relaxed mt-4 line-clamp-2 font-light">
                       {item.excerpt}
                   </p>
                 )}
                 
                 <p className={`text-[9px] opacity-40 uppercase tracking-[0.3em] font-sans ${item.image && !item.excerpt ? 'mt-auto pt-6' : 'mt-6'}`}>
                   {item.time}{item.location ? ` • ${item.location}` : ''}
                 </p>
              </a>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* 
  ===========================================
  UPDATE REELS AND SHORTS HERE
  ===========================================
  Change the platform ("Instagram" or "YouTube"), title, thumbnail, and url.
*/
const reelsData = [
  {
    id: 1,
    platform: "YouTube",
    title: "Election Rally Ground Report...",
    // YouTube Rally Thumbnail
    thumbnail: "https://images.unsplash.com/photo-1555008872-f03b347ffb53?q=80&w=600&auto=format&fit=crop",
    url: "https://youtube.com/@brahmanews24"
  },
  {
    id: 2,
    platform: "Instagram",
    title: "Exclusive Field Report from the Capital City...",
    thumbnail: "https://images.unsplash.com/photo-15520517804-bd2f54a86de3?q=80&w=600&auto=format&fit=crop",
    url: "https://instagram.com/brahmanews24"
  },
  {
    id: 3,
    platform: "YouTube",
    title: "Voter Turnout Updates LIVE...",
    thumbnail: "https://images.unsplash.com/photo-15530517804-bd2f54a86de3?q=80&w=600&auto=format&fit=crop",
    url: "https://youtube.com/@brahmanews24"
  },
  {
    id: 4,
    platform: "Instagram",
    title: "Political Debate Highlights...",
    thumbnail: "https://images.unsplash.com/photo-15540517804-bd2f54a86de3?q=80&w=600&auto=format&fit=crop",
    url: "https://instagram.com/brahmanews24"
  }
];

export const SocialVideoSection = () => (
  <section className="py-32 relative border-y border-white/[0.02] bg-[radial-gradient(ellipse_at_center,rgba(26,54,93,0.1)_0%,rgba(0,0,0,1)_70%)]">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
      <FadeIn>
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div>
              <h2 className="font-serif text-5xl md:text-6xl mb-4 text-white tracking-tight">
                 Digital Frontlines
              </h2>
              <p className="font-sans text-white/40 text-[9px] tracking-[0.4em] uppercase">INSTAGRAM REELS & YOUTUBE SHORTS</p>
           </div>
         </div>
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {reelsData.map((item, index) => (
          <FadeIn delay={(index + 1) * 0.1} key={item.id}>
            <a 
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-md bg-white/[0.02] border border-white/[0.05] p-2 rounded-[24px] group cursor-pointer hover:bg-white/[0.04] transition-colors duration-500 block relative"
            >
              <div className="aspect-[9/16] bg-black rounded-[16px] overflow-hidden relative">
                {/* Placeholder Thumbnail */}
                <img src={item.thumbnail} className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 transition-all duration-700" alt={item.title} />
                
                {/* Thumbnail Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center">
                    <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                  <div className="flex items-center gap-2 mb-3">
                    {item.platform === 'YouTube' ? <Youtube className="w-4 h-4 text-red-500" /> : <Instagram className="w-4 h-4 text-pink-500" />}
                    <span className="text-[8px] font-sans uppercase tracking-[0.2em] text-white/80">{item.platform === 'YouTube' ? 'Shorts' : 'Reel'}</span>
                  </div>
                  <h4 className="font-serif text-base md:text-lg text-white/90 leading-snug group-hover:text-white transition-colors line-clamp-2">{item.title}</h4>
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export const LiveUpdates = () => {
   const updates = [
     { time: "14:02 IST", text: "Chief Minister arrives at the capital complex for the emergency session." },
     { time: "13:45 IST", text: "Opposition leaders issue joint statement condemning the proposed bill." },
     { time: "12:30 IST", text: "State security raised to level high in major districts. Police deployment increased." },
     { time: "11:15 IST", text: "Protests reported outside the main administrative building in Bilaspur." },
   ];
   return (
    <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        <div className="lg:col-span-4">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white flex items-center gap-4 tracking-tight">
              Live Timeline
            </h2>
            <p className="font-sans text-white/40 text-sm leading-relaxed mb-16 font-light">
               Real-time coverage of the unfolding events across the state. Auto-updating directly from our field correspondents.
            </p>
            <div className="relative border-l border-white/[0.05] ml-1.5 md:ml-3">
              {updates.map((update, i) => (
                <div key={i} className="mb-12 relative pl-10 last:mb-0 group cursor-default">
                  <div className="absolute top-1 -left-[5px] w-2.5 h-2.5 rounded-full bg-black border border-white/20 group-hover:border-red-500 group-hover:bg-red-500 transition-colors shadow-[0_0_10px_rgba(220,38,38,0)] group-hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
                  <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-white/40 mb-3">{update.time}</div>
                  <p className="font-serif text-lg text-white/70 leading-relaxed group-hover:text-white transition-colors">{update.text}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        
        <div className="lg:col-span-8">
            <FadeIn delay={0.2}>
               <div className="flex items-center gap-3 mb-12">
                 <span className="font-sans text-[9px] tracking-[0.4em] text-white/40 uppercase font-bold">Chhattisgarh Focus</span>
                 <div className="h-[1px] flex-1 bg-white/[0.05]"></div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   {[
                     { title: "Bastar's Evolving Economy: Beyond the Forests", img: "https://images.unsplash.com/photo-1506461883276-594a12b11dc3?q=80&w=800&auto=format&fit=crop" },
                     { title: "Tech Hub in Naya Raipur Attracts Foreign Investment", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
                     { title: "Agricultural Innovation Pushes Record Yields in Durg", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop" },
                     { title: "Highway Infrastructure Delays Frustrate Commuters", img: "https://images.unsplash.com/photo-1550517804-bd2f54a86de3?q=80&w=800&auto=format&fit=crop" }
                   ].map((item, i) => (
                     <div key={i} className="backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] p-5 rounded-3xl group cursor-pointer flex flex-col hover:bg-white/[0.04] transition-colors duration-500">
                        <div className="aspect-[4/3] bg-black mb-6 overflow-hidden relative rounded-[14px]">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 transition-transform duration-1000 ease-out" />
                        </div>
                        <h4 className="font-serif text-2xl md:text-3xl font-medium text-white/80 group-hover:text-white transition-colors leading-[1.2] tracking-tight">{item.title}</h4>
                     </div>
                   ))}
               </div>
            </FadeIn>
        </div>
      </div>
    </section>
   );
};

export const LocalCoverage = () => (
    <section className="py-40 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/[0.05]">
      <FadeIn>
         <div className="flex flex-col items-center justify-center mb-24 text-center">
            <h2 className="font-serif text-5xl md:text-7xl mb-6 text-white tracking-tight">Regional Focus</h2>
            <p className="font-sans text-white/40 text-[9px] tracking-[0.4em] uppercase">RAIPUR • CHHATTISGARH • NATIONAL</p>
         </div>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {/* Categories */}
         {[
           { title: "Raipur", count: "12 Stories", img: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=800&auto=format&fit=crop" },
           { title: "Chhattisgarh", count: "24 Stories", img: "https://images.unsplash.com/photo-1506461883276-594a12b11dc3?q=80&w=800&auto=format&fit=crop" },
           { title: "Crime & Politics", count: "8 Stories", img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop" }
         ].map((cat, i) => (
            <FadeIn delay={i * 0.15} key={i}>
              <div className="group cursor-pointer relative overflow-hidden rounded-[32px] aspect-square backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] p-2 flex flex-col justify-end transition-colors duration-500 hover:bg-white/[0.04]">
                 <div className="absolute inset-0 bg-black overflow-hidden rounded-[24px] m-2 z-0">
                    <img src={cat.img} className="w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000 ease-out" alt={cat.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                 </div>
                 <div className="relative z-10 p-8 md:p-10">
                    <h3 className="font-serif text-4xl text-white mb-4 tracking-tight">{cat.title}</h3>
                    <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/50">{cat.count}</p>
                    </div>
                 </div>
              </div>
            </FadeIn>
         ))}
      </div>
    </section>
);

export const CtaSection = () => (
  <section className="py-40 relative overflow-hidden border-t border-white/[0.05]">
     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08)_0%,transparent_50%)] pointer-events-none" />
     <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeIn>
           <div className="flex items-stretch justify-center mx-auto mb-10 w-max rounded-xl overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.3)] border border-blue-400/20 bg-gradient-to-b from-[#0a1128]/80 to-[#020617]/90 backdrop-blur-xl">
              <div className="px-5 py-3 flex items-center justify-center">
                  <span className="font-sans font-black text-2xl tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">BRAHMA NEWS</span>
              </div>
              <div className="bg-gradient-to-b from-red-600 to-red-900 px-5 py-3 flex items-center justify-center border-l border-red-400/40">
                  <span className="text-white font-sans font-black text-2xl drop-shadow-md">24</span>
              </div>
           </div>
           <h2 className="font-serif text-5xl md:text-7xl mb-8 text-white leading-[1.1] tracking-tight">Stay Connected<br/>to the Truth.</h2>
           <p className="font-sans text-sm md:text-base text-white/40 max-w-xl mx-auto mb-12 leading-relaxed font-light">
             Download the BrahmaNews24 app or follow our live streams across social platforms to never miss a critical update from Chhattisgarh and beyond.
           </p>
           <button className="px-10 py-5 bg-white text-black font-sans text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-red-600 hover:text-white transition-all duration-500 rounded-full hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]">
             Watch Live Now
           </button>
        </FadeIn>
     </div>
  </section>
);
