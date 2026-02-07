'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    className?: string;
    delay?: number;
}
//deployement trigger

export default function ScrollReveal({
    children,
    width = 'fit-content',
    className = "",
    delay = 0
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optional: Unobserve after revealing to animate only once
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% is visible
                rootMargin: '0px 0px -50px 0px' // Slightly offset trigger
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ width, transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
