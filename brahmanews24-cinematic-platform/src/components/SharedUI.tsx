import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from './BrahmaUI';

interface ArticleCardProps {
  title: string;
  category: string;
  time: string;
  img: string;
  description?: string;
  id: string;
}

export const ArticleCard = ({ title, category, time, img, description, id }: ArticleCardProps) => (
  <Link to={`/article/${id}`} className="backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] p-5 md:p-6 rounded-3xl group flex flex-col h-full hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden">
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[9px] uppercase tracking-widest text-red-500 font-bold font-sans">{category}</span>
      <div className="h-[1px] flex-1 bg-red-500/20"></div>
    </div>
    <div className="overflow-hidden mb-6 aspect-video bg-black rounded-[14px] md:rounded-[20px]">
      <img src={img} className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-out" alt={title} />
    </div>
    <h4 className="font-serif text-2xl md:text-3xl font-medium leading-[1.2] group-hover:text-white transition-colors text-white/80 tracking-tight">
      {title}
    </h4>
    {description && (
      <p className="font-sans text-sm text-white/40 leading-relaxed mt-4 line-clamp-2 font-light">
          {description}
      </p>
    )}
    <p className="text-[9px] mt-auto pt-6 opacity-40 uppercase tracking-[0.3em] font-sans">{time}</p>
  </Link>
);

export const PageHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
    <div className="pt-32 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto text-center border-b border-white/[0.05]">
        <FadeIn>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-6">{title}</h1>
            {subtitle && (
                <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-red-500/80">{subtitle}</p>
            )}
        </FadeIn>
    </div>
);
