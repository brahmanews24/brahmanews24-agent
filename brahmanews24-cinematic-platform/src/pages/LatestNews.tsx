import React from 'react';
import { PageHeader, ArticleCard } from '../components/SharedUI';
import { FadeIn, Ticker } from '../components/BrahmaUI';

export default function LatestNews() {
  const latestArticles = [
    {
      id: "101",
      title: "Global Summit Agrees on New Carbon Emission Targets",
      category: "World",
      time: "20 MINS AGO",
      img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1000&auto=format&fit=crop",
      description: "Leaders from major industrial nations have signed a landmark agreement to reduce reliance on non-renewable energy sources."
    },
    {
      id: "102",
      title: "Tech Giants Announce Unified AI Safety Protocols",
      category: "Technology",
      time: "45 MINS AGO",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      description: "In a rare joint press conference, leading technology CEOs outlined their commitment to transparent AI development."
    },
    {
      id: "103",
      title: "Stock Markets Reach All-Time High Amidst Inflation Reports",
      category: "Markets",
      time: "1 HOUR AGO",
      img: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1000&auto=format&fit=crop",
      description: "Despite concerns about rising consumer prices, market optimism pushed major indices to unprecedented levels."
    },
    {
      id: "104",
      title: "New Breakthrough in Quantum Computing Stability",
      category: "Science",
      time: "2 HOURS AGO",
      img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
      description: "Researchers at the national laboratory have demonstrated a method to maintain qubit coherence for record durations."
    },
    {
      id: "105",
      title: "Major Infrastructure Bill Passes Legislative Assembly",
      category: "Politics",
      time: "3 HOURS AGO",
      img: "https://images.unsplash.com/photo-1550517804-bd2f54a86de3?q=80&w=1000&auto=format&fit=crop",
      description: "The contentious trillion-dollar spending package aimed at rebuilding national highways and ports has cleared its final hurdle."
    },
    {
      id: "106",
      title: "Rare Celestial Event Visible Across Northern Hemisphere",
      category: "Astronomy",
      time: "5 HOURS AGO",
      img: "https://images.unsplash.com/photo-1506461883276-594a12b11dc3?q=80&w=1000&auto=format&fit=crop",
      description: "Stargazers are in for a treat tonight as a once-in-a-lifetime planetary alignment becomes visible to the naked eye."
    }
  ];

  return (
    <div className="w-full relative min-h-screen">
      <PageHeader title="Latest News" subtitle="Breaking Updates As They Happen" />
      
      <Ticker />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Featured Latest */}
        <FadeIn>
           <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-8 h-[1px] bg-red-500"></div>
                 <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-sans">Top Priority</span>
              </div>
              <div className="group cursor-pointer relative overflow-hidden min-h-[500px] backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-2 flex flex-col justify-end transition-colors duration-500 hover:bg-white/[0.04]">
                  <div className="absolute inset-0 bg-black overflow-hidden rounded-2xl m-2">
                      <img src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000 ease-out" alt="Featured News" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                  </div>
                  <div className="relative z-10 w-full max-w-4xl p-8 md:p-12">
                      <div className="flex items-center gap-3 mb-6">
                          <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_red] animate-pulse"></span>
                          <span className="text-[9px] uppercase tracking-widest text-red-500 font-bold font-sans">Just In</span>
                      </div>
                      <h3 className="font-serif text-4xl md:text-6xl font-medium leading-[1.05] mb-6 group-hover:text-white transition-colors duration-500 text-white/90 tracking-tight">
                          Emergency Protocols Activated Amidst Global Security Threat
                      </h3>
                      <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl font-light">
                          International agencies are coordinating a massive response to an unprecedented cyber-attack targeting critical infrastructure across multiple continents.
                      </p>
                      <p className="text-[9px] mt-8 opacity-40 uppercase tracking-[0.3em] font-sans">5 MINS AGO</p>
                  </div>
              </div>
           </div>
        </FadeIn>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {latestArticles.map((article, i) => (
            <FadeIn delay={i * 0.1} key={article.id}>
              <ArticleCard {...article} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
