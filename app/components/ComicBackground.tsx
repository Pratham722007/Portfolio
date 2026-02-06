'use client';

import Image from 'next/image';

export default function ComicBackground() {
    return (
        <div className="absolute inset-0 z-0">
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
        </div>
    );
}
