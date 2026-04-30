import React from 'react';
import { PageHeader } from '../components/SharedUI';
import { LiveUpdates, SocialVideoSection } from '../components/NewsSections';
import { FadeIn, Ticker } from '../components/BrahmaUI';

export default function LiveUpdatesPage() {
  return (
    <div className="w-full relative min-h-screen">
      <PageHeader title="Live Desk" subtitle="Continuous Transmission" />
      <Ticker />
      <div className="pb-24 pt-8">
        <LiveUpdates />
        <SocialVideoSection />
      </div>
    </div>
  );
}
