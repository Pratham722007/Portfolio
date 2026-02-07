'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const roles = [
    "DSA Enthusiast",
    "AI Engineer",
    "Full Stack Developer"
];

import ComicBackground from './ComicBackground';

// ... (existing imports)

import ScrollReveal from './ScrollReveal';

// ...

export default function HeroSection() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setRoleIndex((prev) => (prev + 1) % roles.length);
                setFade(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-16 md:pb-20 relative overflow-hidden">
            <ComicBackground />

            <div className="comic-container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-center w-full relative z-10 px-4 md:px-6">
                {/* Left: Text Content */}
                <div className="order-2 md:order-1 text-white flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <ScrollReveal width="100%">
                        <div className="space-y-6 md:space-y-8">
                            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-tight drop-shadow-[4px_4px_0px_#000]">
                                PRATHAM <br />
                                <span>PATADIYA</span>
                            </h1>

                            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-white text-black px-4 py-2 md:px-6 md:py-4 inline-block -rotate-1 comic-border border-black shadow-[4px_4px_0px_#000] self-start">
                                I am a <span className={`inline-block min-w-[150px] md:min-w-[200px] transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                                    {roles[roleIndex]}
                                </span>
                            </div>

                            <p className="text-lg sm:text-xl md:text-2xl text-white font-medium max-w-lg mt-4 font-body border-l-0 md:border-l-4 border-white pl-0 md:pl-6 drop-shadow-md leading-relaxed mx-auto md:mx-0">
                                “Building intelligent systems, scalable applications, and solving real-world problems with code.”
                            </p>

                            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start pt-4">
                                <a href="#projects" className="comic-button bg-white text-black hover:bg-gray-100 border-black transform transition-transform hover:-translate-y-1 text-sm md:text-xl">
                                    View Projects
                                </a>
                                <a href="#contact" className="comic-button bg-white text-black hover:-translate-y-1 text-sm md:text-xl">
                                    Contact Me
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start pt-4">
                                {[
                                    { name: 'GitHub', url: 'https://github.com/Pratham722007' },
                                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pratham-patadiya-4b1344300' },
                                    { name: 'LeetCode', url: 'https://leetcode.com/u/Pratham722007/' },
                                    { name: 'Email', url: 'mailto:patadiyapratham98@gmail.com' }
                                ].map((social, index) => (
                                    <ScrollReveal key={social.name} delay={index * 100}>
                                        <a
                                            href={social.url}
                                            target={social.name === 'Email' ? '_self' : '_blank'}
                                            rel="noopener noreferrer"
                                            className="px-3 py-1 md:px-4 md:py-2 border-2 border-white rounded-full font-bold text-xs md:text-sm text-white hover:bg-white hover:text-red-600 transition-colors cursor-pointer drop-shadow-md block"
                                        >
                                            {social.name}
                                        </a>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right: Profile Photo */}
                <div className="flex justify-center items-center order-1 md:order-2">
                    <ScrollReveal>
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px]">
                            {/* Blob Background */}
                            <div className="absolute inset-0 bg-black opacity-20 rounded-full blur-3xl animate-pulse"></div>

                            {/* Image Container */}
                            <div className="absolute inset-0 border-[6px] border-black rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] bg-white overflow-hidden shadow-[8px_8px_0px_#000] md:shadow-[12px_12px_0px_#000] hover:scale-105 transition-transform duration-300 z-10">
                                <Image
                                    src="/IMG_20251008_181048.jpg"
                                    alt="Pratham Patadiya"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white text-black font-bold p-3 md:p-4 border-4 border-black rounded-full shadow-[4px_4px_0px_#000] md:shadow-[6px_6px_0px_#000] rotate-12 z-20 font-heading text-sm md:text-lg">
                                HI THERE!
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
