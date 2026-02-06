'use client';

import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    githubLink: string;
    liveLink?: string;
    year?: string;
    image?: string;
}

export default function ProjectCard({ title, description, tags, githubLink, liveLink, year, image }: ProjectCardProps) {
    return (
        <div className="relative group h-full">
            {/* Spidey Sense Bolts - Outside the Card */}
            {/* Top Left */}
            <div className="absolute -top-10 -left-10 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <svg width="60" height="60" viewBox="0 0 50 50" className="animate-tingle text-white fill-current">
                    <path d="M20,0 L10,25 L30,20 L15,50 L25,25 L5,30 Z" stroke="none" />
                </svg>
            </div>
            {/* Top Right */}
            <div className="absolute -top-10 -right-10 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-x-[-1] pointer-events-none">
                <svg width="60" height="60" viewBox="0 0 50 50" className="animate-tingle text-white fill-current">
                    <path d="M20,0 L10,25 L30,20 L15,50 L25,25 L5,30 Z" stroke="none" />
                </svg>
            </div>
            {/* Bottom Left */}
            <div className="absolute -bottom-10 -left-10 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-y-[-1] pointer-events-none">
                <svg width="60" height="60" viewBox="0 0 50 50" className="animate-tingle text-white fill-current">
                    <path d="M20,0 L10,25 L30,20 L15,50 L25,25 L5,30 Z" stroke="none" />
                </svg>
            </div>
            {/* Bottom Right */}
            <div className="absolute -bottom-10 -right-10 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-[-1] pointer-events-none">
                <svg width="60" height="60" viewBox="0 0 50 50" className="animate-tingle text-white fill-current">
                    <path d="M20,0 L10,25 L30,20 L15,50 L25,25 L5,30 Z" stroke="none" />
                </svg>
            </div>

            {/* Main Card Content */}
            <div className="comic-border bg-white flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_#000]">
                {/* Image Section */}
                <div className="relative w-full h-48 border-b-[3px] border-black bg-gray-100 overflow-hidden">
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold text-xl uppercase tracking-widest">
                            No Image
                        </div>
                    )}

                    <div className="absolute top-3 right-3">
                        {year && (
                            <div className="bg-black text-white text-xs font-bold px-3 py-1 rounded-md transform rotate-2 shadow-[2px_2px_0px_#fff]">
                                {year}
                            </div>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                    {/* Header */}
                    <div className="mb-3">
                        <h3 className="text-3xl font-black uppercase text-black italic tracking-wider group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag) => (
                            <span key={tag} className="text-xs font-bold border-[2px] border-black px-2 py-1 rounded-md bg-white hover:bg-yellow-300 transition-colors shadow-[2px_2px_0px_#000]">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-black font-medium font-body mb-6 text-sm leading-relaxed border-l-4 border-yellow-400 pl-3">
                        {description}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-3 mt-auto pt-4 border-t-2 border-dashed border-gray-300">
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center border-[2px] border-black py-2.5 font-bold hover:bg-gray-100 transition-all rounded-lg shadow-[3px_3px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none text-sm uppercase tracking-wide bg-white"
                        >
                            GitHub
                        </a>
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center bg-primary text-white border-[2px] border-black py-2.5 font-bold hover:bg-red-600 transition-all rounded-lg shadow-[3px_3px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none text-sm uppercase tracking-wide"
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
