'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

const roles = [
    "AI Engineer",
    "DSA Enthusiast",
    "Full Stack Developer"
];

export default function HeroSection() {
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(200);

    const tick = useCallback(() => {
        let i = roleIndex % roles.length;
        let fullText = roles[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(2000); // Wait before deleting
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setRoleIndex(index => index + 1);
            setDelta(200);
        }
    }, [isDeleting, roleIndex, text]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [delta, tick]);

    return (
        <section className="min-h-screen flex items-center justify-center pt-16 bg-white overflow-hidden">
            <div className="comic-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                {/* Left: Text Content */}
                <div className="space-y-6 order-2 md:order-1 animate-in slide-in-from-left duration-1000">
                    <h1 className="text-6xl md:text-8xl font-black text-black leading-tight drop-shadow-md">
                        PRATHAM <br />
                        <span className="text-primary">PATADIYA</span>
                    </h1>

                    <div className="text-2xl md:text-4xl font-bold bg-black text-white px-4 py-2 inline-block -rotate-1 comic-border border-white">
                        I am a <span className="text-primary">{text}</span><span className="animate-pulse">|</span>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-800 font-medium max-w-lg mt-4 font-body border-l-4 border-primary pl-4">
                        “Building intelligent systems, scalable applications, and solving real-world problems with code.”
                    </p>

                    <div className="flex flex-wrap gap-4 pt-6">
                        <a href="#projects" className="comic-button comic-button-primary">
                            View Projects
                        </a>
                        <a href="#contact" className="comic-button">
                            Contact Me
                        </a>
                    </div>

                    <div className="flex gap-4 pt-8">
                        {/* Social Icons Placeholder - replace with actual icons later or use text links for now */}
                        {['GitHub', 'LinkedIn', 'LeetCode', 'Email'].map((social) => (
                            <span key={social} className="px-3 py-1 border-2 border-black rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                {social}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right: Profile Photo */}
                <div className="flex justify-center order-1 md:order-2 animate-in slide-in-from-right duration-1000">
                    <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
                        {/* Blob Background */}
                        <div className="absolute inset-0 bg-primary opacity-20 rounded-full blur-3xl animate-pulse"></div>

                        {/* Image Container with Comic Border */}
                        <div className="absolute inset-0 border-4 border-black rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] bg-gray-200 overflow-hidden shadow-[8px_8px_0px_#000] hover:scale-105 transition-transform duration-300">
                            {/* Replace src with actual image path or placeholder */}
                            <Image
                                src="https://placehold.co/500x500/png?text=Pratham+Patadiya"
                                alt="Pratham Patadiya"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 bg-yellow-400 text-black font-bold p-3 border-2 border-black rounded-full shadow-[4px_4px_0px_#000] rotate-12 z-10 font-heading">
                            HI THERE!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
