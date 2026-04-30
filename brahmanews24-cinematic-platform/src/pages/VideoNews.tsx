import React from 'react';
import { PageHeader } from '../components/SharedUI';
import { FadeIn } from '../components/BrahmaUI';
import { Play, Instagram, Youtube } from 'lucide-react';

export default function VideoNews() {
  const videos = [
    { title: "Exclusive Interview: Chief Minister on New Policies", type: "Prime", icon: Youtube, img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop" },
    { title: "Ground Report: The State of Heritage Sites", type: "Reel", icon: Instagram, img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop" },
    { title: "Markets Today: Experts Analyze the Dip", type: "Prime", icon: Youtube, img: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=800&auto=format&fit=crop" },
    { title: "Special Feature: 24 Hours with the Police Force", type: "Documentary", icon: Youtube, img: "https://images.unsplash.com/photo-1550517804-bd2f54a86de3?q=80&w=800&auto=format&fit=crop" },
    { title: "Election Rally Turnout Breaks Records", type: "Shorts", icon: Youtube, img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop" },
    { title: "Cultural Festival Highlights - Day 1", type: "Reel", icon: Instagram, img: "https://images.unsplash.com/photo-1506461883276-594a12b11dc3?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="w-full relative min-h-screen">
      <PageHeader title="Video News" subtitle="Watch The Story Unfold" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid, i) => {
            const Icon = vid.icon;
            return (
              <FadeIn delay={i * 0.1} key={i}>
                <div className="group cursor-pointer">
                  <div className={`relative bg-black rounded-3xl overflow-hidden mb-5 border border-white/[0.05] ${vid.type === 'Reel' || vid.type === 'Shorts' ? 'aspect-[9/16] w-full max-w-[300px] mx-auto' : 'aspect-video'}`}>
                    <img src={vid.img} className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" alt={vid.title} />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <Play className="w-6 h-6 text-white ml-1 fill-white" />
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 rounded px-2.5 py-1.5 flex items-center gap-1.5">
                      <Icon className={`w-3 h-3 ${Icon === Youtube ? 'text-red-500' : 'text-pink-500'}`} />
                      <span className="text-[9px] uppercase tracking-widest font-sans font-bold text-white/90">{vid.type}</span>
                    </div>
                  </div>
                  <div className={`mt-4 ${vid.type === 'Reel' || vid.type === 'Shorts' ? 'max-w-[300px] mx-auto text-center' : ''}`}>
                    <h3 className="font-serif text-2xl md:text-3xl text-white/90 group-hover:text-white transition-colors tracking-tight leading-snug">
                      {vid.title}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </div>
  );
}
