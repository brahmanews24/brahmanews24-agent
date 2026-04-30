import React from 'react';
import { PageHeader, ArticleCard } from '../components/SharedUI';
import { FadeIn } from '../components/BrahmaUI';

interface CategoryPageProps {
  title: string;
}

export default function CategoryPage({ title }: CategoryPageProps) {
  // Mock data for the category
  const articles = [
    {
      id: "1",
      title: `${title} Assembly Discusses New Urban Development Plan`,
      category: title,
      time: "2 HOURS AGO",
      img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1000&auto=format&fit=crop",
      description: "Local delegates debated the newly proposed zoning regulations which aim to expand commercial real estate into historical districts."
    },
    {
      id: "2",
      title: `Weather Alert: Severe Storms Expected Across ${title}`,
      category: "Weather",
      time: "5 HOURS AGO",
      img: "https://images.unsplash.com/photo-1550517804-bd2f54a86de3?q=80&w=1000&auto=format&fit=crop",
      description: "Meteorological department issued a high alert for heavy rainfall and thunderstorms expected to hit the region late tonight."
    },
    {
      id: "3",
      title: `Economy: Investment Summit Yields High Returns for ${title}`,
      category: "Economy",
      time: "8 HOURS AGO",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      description: "Foreign investors pledged unprecedented amounts towards expanding the state's technical infrastructure and manufacturing sectors."
    },
    {
      id: "4",
      title: `Cultural Festival Opens to Record Crowds in ${title}`,
      category: "Culture",
      time: "1 DAY AGO",
      img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
      description: "The annual festival kicked off last night featuring traditional music, dance, and artisan crafts from all over the region."
    },
     {
      id: "5",
      title: `Healthcare Infrastructure Boost: New Hospitals Announced`,
      category: "Health",
      time: "1 DAY AGO",
      img: "https://images.unsplash.com/photo-1506461883276-594a12b11dc3?q=80&w=1000&auto=format&fit=crop",
      description: "The health ministry unveiled plans to build three specialized modern hospitals to cater to the growing rural population."
    },
    {
       id: "6",
       title: `Education Sector Sees Implementation of Digital Classrooms`,
       category: "Education",
       time: "2 DAYS AGO",
       img: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1000&auto=format&fit=crop",
       description: "Over 500 schools across the district have received funding to transition to smart classroom setups for the upcoming semester."
    }
  ];

  return (
    <div className="w-full relative min-h-screen">
      <PageHeader title={title} subtitle="Regional Coverage & Beyond" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <FadeIn delay={i * 0.1} key={article.id}>
              <ArticleCard {...article} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
