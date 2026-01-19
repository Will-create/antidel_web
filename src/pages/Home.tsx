import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ReleaseNotes from '../components/ReleaseNotes';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';


const Home: React.FC = () => {
  return (
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ReleaseNotes />
        <Testimonials />
        <FAQ />
      </main>
  );
};

export default Home;