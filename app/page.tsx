'use client';

import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ComicSeparator from './components/ComicSeparator';
import LoadingScreen from './components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 3.5 seconds
    const timer = setTimeout(() => setIsLoading(false), 3500);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    // Only observe after loading is done, or check if elements exist
    if (!isLoading) {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }

    return () => {
      clearTimeout(timer);
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />

      {/* Cloud Separator - Hero (Red) -> Projects (Red) */}
      <div className="relative z-20">
        <ComicSeparator fill="#ffffff" /> {/* White cloud strip */}
      </div>

      <div className="reveal">
        <ProjectsSection />
      </div>

      {/* Separator - Projects (Red) -> About (Red) */}
      <div className="relative z-20">
        <ComicSeparator fill="#ffffff" flip />
      </div>

      <div className="reveal">
        <AboutSection />
      </div>

      {/* Separator - About (Red) -> Contact (Red) */}
      <div className="relative z-20">
        <ComicSeparator fill="#ffffff" />
      </div>

      <div className="reveal">
        <ContactSection />
      </div>

      {/* Footer Separator? - Footer usually is black or dark. Check footer */}
      <Footer />
    </main>
  );
}