'use client';

import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ComicSeparator from './components/ComicSeparator';

export default function Home() {

  useEffect(() => {
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

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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