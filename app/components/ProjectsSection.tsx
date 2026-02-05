'use client';

import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
    const projects = [
        {
            title: "CricArena",
            year: "2025",
            description: "An all-in-one cricket platform for real-time scores, match analysis, player stats, quizzes, tactics boards, cricket calendar, ICC rankings, and AI-powered Q&A.",
            tags: ["React", "Django", "PostgreSQL", "HTML/CSS"],
            githubLink: "https://github.com/Pratham722007/cricarena",
            liveLink: "https://cricarena-app.onrender.com"
        },
        {
            title: "MangroSafe",
            year: "2025",
            description: "A gamified, AI-assisted platform for reporting illegal environmental activities and promoting community-driven conservation with risk assessment and heat maps.",
            tags: ["React", "Django", "PostgreSQL", "AI/ML", "Heatmaps"],
            githubLink: "https://github.com/Pratham722007/Hackout-25",
            liveLink: "https://youtu.be/Fb7jm8pD8CM" // Demo link used as live link based on request
        }
    ];

    return (
        <section id="projects" className="py-24 bg-gray-50 comic-pattern">
            <div className="comic-container">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-black text-black mb-4 inline-block relative">
                        <span className="relative z-10">FEATURED PROJECTS</span>
                        <div className="absolute inset-0 bg-yellow-400 transform translate-x-3 translate-y-3 -z-0 border-2 border-black md:w-full"></div>
                    </h2>
                    <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto mt-6">
                        Some of my best work in Full Stack Development and AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {projects.map((project, index) => (
                        <div key={index} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 200}ms` }}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
