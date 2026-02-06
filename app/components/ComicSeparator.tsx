import React from 'react';

interface ComicSeparatorProps {
    fill?: string;
    className?: string;
    flip?: boolean;
}

export default function ComicSeparator({
    fill = "#ffffff",
    className = "",
    flip = false
}: ComicSeparatorProps) {
    return (
        <div className={`w-full ${className} ${flip ? 'transform rotate-180' : ''} pointer-events-none`} style={{ zIndex: 20, position: 'relative' }}>
            {/* 
              Custom Comic Panel Separator
              Matches the sort of 'cracked/segmented' black strip look from the user's reference, but now in RED.
            */}
            <svg
                viewBox="0 0 1200 24"
                className="w-full h-4 md:h-6"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Background Line (Red) */}
                <rect x="0" y="2" width="1200" height="20" fill="rgb(212, 1, 0)" />

                {/* 
                   Cracks / Detail Lines (White/Transparent) 
                   These paths cut through the rect to create the segmented look.
                */}
                <g stroke="white" strokeWidth="2" fill="none">
                    {/* Pattern repeating slightly to cover the width */}
                    <path d="M50,2 L70,22 M120,22 L140,2 M200,2 L210,22" />
                    <path d="M280,22 L300,2 M350,2 L340,22 M410,22 L430,2" />
                    <path d="M500,2 L520,22 M580,22 L590,2 M650,2 L630,22" />
                    <path d="M720,22 L740,2 M800,2 L790,22 M860,22 L880,2" />
                    <path d="M950,2 L970,22 M1020,22 L1030,2 M1100,2 L1080,22" />

                    {/* Horizontal internal detail lines for that "drawn" look */}
                    <path d="M0,4 L1200,4" stroke="white" strokeWidth="1" opacity="0.3" />
                    <path d="M0,20 L1200,20" stroke="white" strokeWidth="1" opacity="0.3" />
                </g>

                {/* Outer Border (Red) to ensure edge crispness */}
                <rect x="0" y="2" width="1200" height="20" fill="none" stroke="rgb(212, 1, 0)" strokeWidth="2" />
            </svg>
        </div>
    );
}
