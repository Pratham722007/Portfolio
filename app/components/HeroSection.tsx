'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const roles = [
    "DSA Enthusiast",
    "AI Engineer",
    "Full Stack Developer"
];

export default function HeroSection() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade out
            setTimeout(() => {
                setRoleIndex((prev) => (prev + 1) % roles.length);
                setFade(true); // Start fade in
            }, 500); // Wait for fade out to complete
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Comic Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Web Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none"
                style={{ maskImage: 'radial-gradient(circle, transparent 60%, black 100%)', WebkitMaskImage: 'radial-gradient(circle, transparent 60%, black 100%)' }}
            >
                <Image
                    src="/web-overlay.png"
                    alt="Web Overlay"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="comic-container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center w-full relative z-10 px-6">
                {/* Left: Text Content */}
                <div className="space-y-8 order-2 md:order-1 animate-in slide-in-from-left duration-1000 text-white flex flex-col justify-center">
                    <h1 className="text-6xl md:text-8xl font-black leading-tight drop-shadow-[4px_4px_0px_#000]">
                        PRATHAM <br />
                        <span>PATADIYA</span>
                    </h1>

                    <div className="text-2xl md:text-3xl font-bold bg-white text-black px-6 py-4 inline-block -rotate-1 comic-border border-black shadow-[4px_4px_0px_#000] self-start">
                        I am a <span className={`inline-block min-w-[200px] transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                            {roles[roleIndex]}
                        </span>
                    </div>

                    <p className="text-xl md:text-2xl text-white font-medium max-w-lg mt-4 font-body border-l-4 border-white pl-6 drop-shadow-md leading-relaxed">
                        “Building intelligent systems, scalable applications, and solving real-world problems with code.”
                    </p>

                    <div className="flex flex-wrap gap-6 pt-4">
                        <a href="#projects" className="comic-button bg-white text-black hover:bg-gray-100 border-black transform transition-transform hover:-translate-y-1">
                            View Projects
                        </a>
                        <a href="#contact" className="comic-button bg-white text-black hover:-translate-y-1">
                            Contact Me
                        </a>
                    </div>

                    <div className="flex gap-4 pt-4">
                        {['GitHub', 'LinkedIn', 'LeetCode', 'Email'].map((social) => (
                            <span key={social} className="px-4 py-2 border-2 border-white rounded-full font-bold text-sm text-white hover:bg-white hover:text-red-600 transition-colors cursor-pointer drop-shadow-md">
                                {social}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right: Profile Photo */}
                <div className="flex justify-center items-center order-1 md:order-2 animate-in slide-in-from-right duration-1000">
                    <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
                        {/* Blob Background - White/Black contrast against red */}
                        <div className="absolute inset-0 bg-black opacity-20 rounded-full blur-3xl animate-pulse"></div>

                        {/* Image Container with Comic Border - Oval/Blob shape */}
                        <div className="absolute inset-0 border-[6px] border-black rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] bg-white overflow-hidden shadow-[12px_12px_0px_#000] hover:scale-105 transition-transform duration-300 z-10">
                            <Image
                                src="/IMG_20251008_181048.jpg"
                                alt="Pratham Patadiya"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 bg-white text-black font-bold p-4 border-4 border-black rounded-full shadow-[6px_6px_0px_#000] rotate-12 z-20 font-heading text-lg">
                            HI THERE!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
