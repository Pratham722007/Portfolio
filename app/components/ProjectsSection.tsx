'use client';

import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';

import ComicBackground from './ComicBackground';

export default function ProjectsSection() {
    const projects = [
        {
            title: "MindSettler",
            year: "2025",
            image: "/mindsettler.png",
            description: "A psycho-education and mental well-being platform focused on awareness, clarity, and personalized support. Features interactive storytelling, journey-driven experiences, and an AI-powered assistant using Google Gemini.",
            tags: ["HTML", "CSS", "JS", "Firebase", "Supabase", "Gemini"],
            githubLink: "https://github.com/Pratham722007/Mindsettler_GWOC-26",
            liveLink: "https://mindsettler-bypb.vercel.app/"
        },
        {
            title: "CricArena",
            year: "2025",
            image: "/cricarena.jpg.jpeg",
            description: "All-in-one cricket platform for real-time scores, match analysis, player stats, and quizzes. Built with React and Django, featuring AI-powered Q&A and detailed team info.",
            tags: ["React", "Django", "PostgreSQL", "HTML/CSS"],
            githubLink: "https://github.com/Pratham722007/cricarena",
            liveLink: "https://cricarena-app.onrender.com"
        },
        {
            title: "MangroSafe",
            year: "2025",
            image: "/mangrosafe.jpg.jpeg",
            description: "Gamified, AI-assisted platform for reporting illegal environmental activities. Promotes community-driven conservation with AI validation, confidence scoring, and real-time heat maps.",
            tags: ["React", "Django", "PostgreSQL", "AI/ML"],
            githubLink: "https://github.com/Pratham722007/Hackout-25",
            liveLink: "https://youtu.be/Fb7jm8pD8CM"
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <ComicBackground />
            <div className="comic-container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-black text-white mb-4 inline-block relative">
                        FEATURED PROJECTS
                    </h2>
                    <p className="text-xl text-white font-body max-w-2xl mx-auto mt-6 drop-shadow-md">
                        Some of my best work in Full Stack Development and AI.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} delay={index * 150} className="h-full">
                            <ProjectCard {...project} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
