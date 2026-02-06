'use client';

import ComicBackground from './ComicBackground';

export default function AboutSection() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <ComicBackground />
            <div className="comic-container px-4 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-black text-white inline-block relative rotate-1 drop-shadow-[4px_4px_0px_#000]">
                        <span className="relative z-10">ABOUT ME</span>
                        <div className="absolute inset-0 bg-black transform -translate-x-2 -translate-y-2 -z-0 border-2 border-white"></div>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Education Column */}
                    <div className="comic-border bg-white p-6 relative overflow-hidden group">
                        <h3 className="text-3xl font-bold mb-6 border-b-4 border-primary inline-block text-black">🎓 Education</h3>

                        <div className="space-y-6 text-black">
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold">SVNIT, Surat</h4>
                                <p className="text-gray-600 font-bold text-sm">B.Tech in Artificial Intelligence</p>
                                <p className="text-primary font-bold">2024–Present</p>
                                <p className="text-sm mt-1">CGPA: 8.51 / 10</p>
                                <p className="text-xs text-gray-500 mt-1">Coursework: Machine Learning</p>
                            </div>

                            <div className="relative z-10">
                                <h4 className="text-xl font-bold">Ultravision School</h4>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="text-gray-600 font-bold text-sm">HSC (2024)</span>
                                    <span className="bg-black text-white px-2 rounded text-xs font-bold">84.9%</span>
                                </div>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="text-gray-600 font-bold text-sm">SSC (2022)</span>
                                    <span className="bg-black text-white px-2 rounded text-xs font-bold">93.0%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technical Skills Column */}
                    <div className="comic-border bg-black text-white p-6 relative overflow-hidden transform md:-translate-y-4">
                        <h3 className="text-3xl font-bold mb-6 text-primary border-b-4 border-white inline-block">🛠 Skills</h3>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg font-bold text-gray-300 mb-2">Languages</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Python', 'C++', 'C', 'HTML', 'CSS', 'JavaScript'].map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-white text-black text-xs font-bold rounded border border-gray-400">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-gray-300 mb-2">Frameworks</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Django', 'React', 'Next.js', 'Node.js', 'Express.js', 'LangChain'].map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-white text-black text-xs font-bold rounded border border-gray-400">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-gray-300 mb-2">Libraries & Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn', 'Git', 'GitHub'].map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-gray-800 text-white text-xs font-bold rounded border border-gray-600">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Leadership & Achievements Column */}
                    <div className="comic-border bg-white p-6 relative overflow-hidden">
                        <h3 className="text-3xl font-bold mb-6 border-b-4 border-primary inline-block text-black">🏆 Trophy Cabinet</h3>

                        <ul className="space-y-3 relative z-10 text-black">
                            <li className="flex items-start">
                                <span className="text-primary mr-2">➤</span>
                                <span className="text-sm font-medium"><strong>200+ LeetCode problems</strong> (Rating: 1407)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">➤</span>
                                <span className="text-sm font-medium"><strong>Codeforces</strong> max rating: 967</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">➤</span>
                                <span className="text-sm font-medium"><strong>Top 100</strong> – HACKOUT’25 (DAIICT)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">➤</span>
                                <span className="text-sm font-medium"><strong>Finalist</strong> – Web Wonder 2025</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">➤</span>
                                <span className="text-sm font-medium">SIH internal round selection</span>
                            </li>
                        </ul>

                        <h4 className="text-xl font-bold mt-6 mb-3 border-t-2 border-dashed border-gray-300 pt-3 text-black">Positions</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>• CEV Developer – NIT Surat</li>
                            <li>• Executive Member – ACM, NIT Surat</li>
                            <li>• Core Member – BIS Club, NIT Surat</li>
                            <li>• Co-Head – Mindbend Fest</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
