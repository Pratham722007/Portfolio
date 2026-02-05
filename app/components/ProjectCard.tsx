'use client';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    githubLink: string;
    liveLink?: string;
    year?: string;
    image?: string; // Optional image prop
}

export default function ProjectCard({ title, description, tags, githubLink, liveLink, year }: ProjectCardProps) {
    return (
        <div className="comic-border bg-white p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">

            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold uppercase text-black group-hover:text-primary transition-colors">
                    {title}
                </h3>
                {year && (
                    <span className="bg-black text-white text-xs px-2 py-1 rounded font-bold -rotate-2">
                        {year}
                    </span>
                )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                    <span key={tag} className="text-xs font-bold border-2 border-black px-2 py-1 rounded bg-gray-100">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Description */}
            <p className="text-gray-700 font-body mb-6 flex-grow text-lg leading-relaxed">
                {description}
            </p>

            {/* Actions */}
            <div className="flex gap-4 mt-auto">
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border-2 border-black py-2 font-bold hover:bg-black hover:text-white transition-colors rounded shadow-[2px_2px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                    GitHub
                </a>
                {liveLink && (
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-primary text-white border-2 border-black py-2 font-bold hover:bg-red-600 transition-colors rounded shadow-[2px_2px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >
                        Live Demo
                    </a>
                )}
            </div>

            {/* Decorative Corner */}
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-yellow-400 rounded-full border-4 border-black z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
    );
}
