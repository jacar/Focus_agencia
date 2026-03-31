import React from 'react';
import { Hero } from '../components/Hero';
import { VideoSection } from '../components/VideoSection';
import { About } from '../components/About';
import { KPIs } from '../components/KPIs';
import { ServiceBar } from '../components/ServiceBar';
import { FocusTicker } from '../components/FocusTicker';


export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <VideoSection />
      
      <div id="nosotros-section" className="bg-white">
        <About />
      </div>

      <div className="bg-[#7C3AED]">
        <ServiceBar />
      </div>

      <div className="bg-white">
        <KPIs />
      </div>
      
      <FocusTicker />
    </main>
  );
};
