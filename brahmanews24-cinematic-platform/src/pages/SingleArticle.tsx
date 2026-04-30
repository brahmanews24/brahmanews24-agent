import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FadeIn } from '../components/BrahmaUI';
import { ArticleCard } from '../components/SharedUI';
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function SingleArticle() {
  const { id } = useParams();

  // Mock data for article
  const article = {
    title: "Global Markets Stabilize After Week of Historic Tech Volatility",
    category: "Markets",
    date: "April 30, 2026",
    time: "10:45 AM IST",
    author: "Rahul Verma",
    authorRole: "Senior Financial Correspondent",
    img: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=2000&auto=format&fit=crop",
    content: `
      <p>The global financial landscape breathed a collective sigh of relief today as major technology indices showed signs of stabilization following a week of unprecedented volatility. The swift correction was prompted by a combination of regulatory announcements in the EU and shifting monetary policy signals from the US Federal Reserve.</p>
      
      <h3>The Catalyst for Stability</h3>
      <p>Market analysts point to the late-night press conference held by the consortium of central banks as the primary driver of today's calm. The clear guidelines established regarding digital asset taxation and tech-sector monopolies have provided much-needed clarity for institutional investors.</p>
      
      <p>"Uncertainty is the enemy of the market," stated Elena Rostova, Chief Economist at Global Insights Group. "What we saw last week was a panicked reaction to legislative ambiguity. Now that the parameters are set, the market can accurately price in these new realities."</p>

      <h3>Impact on Regional Growth</h3>
      <p>For regional hubs like Raipur, the stabilization ensures that ongoing tech-infrastructure investments from foreign entities remain secure. Several memorandums of understanding signed last quarter are now officially moving into the execution phase.</p>

      <p>Looking ahead, while the immediate crisis has averted, the fundamental structure of how tech giants operate across borders has been permanently altered. Investors are advised to maintain diverse portfolios as the long-term effects of the new regulatory framework unfold over the coming fiscal year.</p>
    `
  };

  const relatedNews = [
    {
      id: "201",
      title: "Tech Giants Announce Unified AI Safety Protocols",
      category: "Technology",
      time: "45 MINS AGO",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "202",
      title: "New Breakthrough in Quantum Computing Stability",
      category: "Science",
      time: "2 HOURS AGO",
      img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "203",
      title: "Stock Markets Reach All-Time High Amidst Inflation Reports",
      category: "Markets",
      time: "1 HOUR AGO",
      img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1000&auto=format&fit=crop",
    }
  ];

  return (
    <article className="w-full relative min-h-screen pt-20">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 pt-8 pb-32">
        <FadeIn>
            <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors mb-12 font-sans group">
               <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-8">
               <span className="text-[10px] uppercase tracking-widest text-red-500 font-bold font-sans">{article.category}</span>
               <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
               <span className="text-[10px] uppercase tracking-widest text-white/40 font-sans">{article.date}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-12">
               {article.title}
            </h1>

            <div className="flex items-center justify-between border-y border-white/10 py-6 mb-12 flex-wrap gap-6">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-white/20">
                     <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt={article.author} className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
                  </div>
                  <div>
                    <h4 className="font-serif text-white/90 text-lg">{article.author}</h4>
                    <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40">{article.authorRole}</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                 <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/30 hidden sm:inline-block">Share Article</span>
                 <div className="flex gap-2">
                   <button className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center hover:bg-white/10 transition-colors text-white/60 hover:text-white"><Facebook className="w-4 h-4" /></button>
                   <button className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center hover:bg-white/10 transition-colors text-white/60 hover:text-white"><Twitter className="w-4 h-4" /></button>
                   <button className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center hover:bg-white/10 transition-colors text-white/60 hover:text-white"><Linkedin className="w-4 h-4" /></button>
                 </div>
               </div>
            </div>
        </FadeIn>

        <FadeIn delay={0.2}>
            <div className="w-full aspect-video bg-black rounded-3xl mb-16 overflow-hidden border border-white/[0.05]">
               <img src={article.img} alt={article.title} className="w-full h-full object-cover opacity-70 mix-blend-luminosity" />
            </div>

            <div 
              className="prose prose-invert prose-lg max-w-[800px] mx-auto font-serif tracking-wide leading-relaxed prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-a:text-cyan-400"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-24 pt-16 border-t border-white/10">
             <div className="flex items-center gap-4 mb-12">
                 <div className="w-8 h-[1px] bg-red-500"></div>
                 <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-sans">Related News</span>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {relatedNews.map((news) => (
                 <ArticleCard key={news.id} {...news} />
               ))}
             </div>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
