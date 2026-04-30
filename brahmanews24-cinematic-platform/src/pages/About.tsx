import React from 'react';
import { PageHeader } from '../components/SharedUI';
import { AboutUs } from '../components/NewsSections';

export default function About() {
  return (
    <div className="w-full relative min-h-screen">
      <PageHeader title="About Us" subtitle="The Story Behind The Signal" />
      <div className="pb-24">
        <AboutUs />
      </div>
    </div>
  );
}
