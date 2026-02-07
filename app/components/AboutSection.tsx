'use client';

import ComicBackground from './ComicBackground';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
    // Skills data
    const skills = {
        languages: ['Python', 'C++', 'C', 'HTML', 'CSS', 'JavaScript'],
        frameworks: ['Django', 'React', 'Next.js', 'Node.js', 'Express.js', 'LangChain'],
        tools: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn', 'Git', 'GitHub']
    };

    return (
        <section id="about" className="py-16 relative overflow-hidden">
            <ComicBackground />
            <div className="comic-container px-4 relative z-10">

                {/* 
                 ==========================
                 PART 1: ABOUT ME + QUICK FACTS
                 ==========================
                */}
                <div className="flex flex-col md:flex-row gap-8 mb-16 items-stretch">

                    {/* LEFT COLUMN: Clean Text Bio */}
                    <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
                        <ScrollReveal>
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[4px_4px_0px_#000]">
                                ABOUT ME
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className="space-y-4 text-lg md:text-xl text-white font-medium leading-relaxed">
                                <p>
                                    I'm <span className="text-yellow-400 font-bold">Pratham</span>, a B.Tech AI student with a passion for creating
                                    <span className="italic"> beautiful, functional digital experiences</span>.
                                </p>
                                <p>
                                    I specialize in web development, app development, and AI/ML,
                                    constantly exploring new technologies and approaches to solve
                                    <span className="font-bold"> complex problems</span>.
                                </p>
                                <p>
                                    With a keen eye for detail and a commitment to clean, efficient code,
                                    I strive to build applications that are not only visually appealing but also
                                    provide exceptional user experiences.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* RIGHT COLUMN: Quick Facts Card */}
                    <div className="md:w-1/2">
                        <ScrollReveal delay={400} className="h-full">
                            <div className="comic-border bg-white h-full p-8 md:p-10 relative overflow-hidden shadow-[8px_8px_0px_#000] md:shadow-[12px_12px_0px_#000] border-[3px] border-black">
                                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-primary border-b-4 border-yellow-400 pb-2 inline-block">
                                    ⚡ Quick Facts
                                </h3>

                                <div className="space-y-8 text-black">
                                    {/* Education Item */}
                                    <div className="flex items-start gap-5">
                                        <span className="text-3xl">🎓</span>
                                        <div>
                                            <h4 className="font-bold text-xl md:text-2xl">B.Tech AI Student at SVNIT</h4>
                                            <p className="text-gray-600 text-base md:text-lg font-bold">2024–Present</p>
                                        </div>
                                    </div>
                                    {/* Full Stack */}
                                    <div className="flex items-start gap-5">
                                        <span className="text-3xl">💻</span>
                                        <div>
                                            <h4 className="font-bold text-xl md:text-2xl">Full-stack Developer</h4>
                                            <p className="text-gray-600 text-base md:text-lg font-bold">Specializing in Next.js & Python</p>
                                        </div>
                                    </div>
                                    {/* Achievements merged here */}
                                    <div className="flex items-start gap-5">
                                        <span className="text-3xl">🏆</span>
                                        <div>
                                            <h4 className="font-bold text-xl md:text-2xl">Competitive Programmer</h4>
                                            <ul className="text-gray-600 text-base md:text-lg mt-2 space-y-2 font-medium">
                                                <li>• 200+ LeetCode Solved (Rating: 1407)</li>
                                                <li>• Codeforces Max Rating: 967</li>
                                                <li>• Top 100 @ HACKOUT’25 (DAIICT)</li>
                                                <li>• Finalist @ Web Wonder 2025</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <span className="text-3xl">🌱</span>
                                        <div>
                                            <h4 className="font-bold text-xl md:text-2xl">Constantly Learning</h4>
                                            <p className="text-gray-600 text-base md:text-lg font-bold">Exploring GenAI, ML, and Web3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>


                {/* 
                 ===========================
                 PART 2: SKILLS (Compact)
                 ===========================
                */}
                <div className="relative mt-8">

                    {/* Title */}
                    <div className="text-center mb-8">
                        <ScrollReveal>
                            <div className="inline-block bg-white text-primary text-3xl md:text-5xl font-black px-6 md:px-8 py-2 md:py-3 transform -rotate-1 border-[3px] border-black shadow-[4px_4px_0px_#FACC15] md:shadow-[6px_6px_0px_#FACC15]">
                                🕷 SKILLS
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Skill Cards (Nodes) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Languages Node */}
                        <ScrollReveal delay={100} className="h-full">
                            <div className="comic-border bg-white p-6 hover:-translate-y-1 transition-transform duration-300 h-full">
                                <h3 className="text-xl md:text-2xl font-black text-center mb-4 bg-yellow-400 text-black border-2 border-black inline-block px-4 py-1 -rotate-2 mx-auto shadow-[3px_3px_0px_#000]">
                                    LANGUAGES
                                </h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {skills.languages.map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white border-[2px] border-black text-black font-bold text-sm hover:bg-red-100 transition-colors cursor-default shadow-[2px_2px_0px_#000]">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Frameworks Node */}
                        <ScrollReveal delay={200} className="h-full">
                            <div className="comic-border bg-white p-6 hover:-translate-y-1 transition-transform duration-300 h-full">
                                <h3 className="text-xl md:text-2xl font-black text-center mb-4 bg-red-500 text-white border-2 border-black inline-block px-4 py-1 rotate-1 mx-auto shadow-[3px_3px_0px_#000]">
                                    FRAMEWORKS
                                </h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {skills.frameworks.map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white border-[2px] border-black text-black font-bold text-sm hover:bg-yellow-100 transition-colors cursor-default shadow-[2px_2px_0px_#000]">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Tools Node */}
                        <ScrollReveal delay={300} className="h-full">
                            <div className="comic-border bg-white p-6 hover:-translate-y-1 transition-transform duration-300 h-full">
                                <h3 className="text-xl md:text-2xl font-black text-center mb-4 bg-black text-white border-2 border-white inline-block px-4 py-1 -rotate-1 mx-auto shadow-[3px_3px_0px_#000]">
                                    TOOLS
                                </h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {skills.tools.map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white border-[2px] border-black text-black font-bold text-sm hover:bg-red-100 transition-colors cursor-default shadow-[2px_2px_0px_#000]">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                    </div>
                </div>

            </div>
        </section>
    );
}
