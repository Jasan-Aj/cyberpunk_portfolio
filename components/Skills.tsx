"use client";

import { useRef } from "react";
import { Layers, Terminal, Globe, ShieldCheck, Cpu } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SKILL_GROUPS = [
    {
        category: "Frontend Architecture",
        icon: <Globe className="w-5 h-5" />,
        skills: ["React", "Next.js", "Tailwind", "Three.js", "GSAP", "Framer", "TypeScript", "WebGL"],
        color: "from-cyan-400 to-blue-500",
        duration: "40s",
        direction: "animate-marquee-left"
    },
    {
        category: "Neural Backend",
        icon: <Terminal className="w-5 h-5" />,
        skills: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL", "Docker", "AWS"],
        color: "from-magenta-500 to-purple-600",
        duration: "40s",
        direction: "animate-marquee-right"
    }
];

export default function Skills() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".skill-row", {
            opacity: 0,
            y: 40,
            stagger: 0.3,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, { scope: containerRef });

    return (
        <section id="skills" ref={containerRef} className="py-32 bg-[#020202] relative overflow-hidden">
            
            <div className="container mx-auto px-6 mb-20 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Layers className="text-neon-cyan w-4 h-4" />
                            <span className="text-[10px] font-mono text-neon-cyan uppercase tracking-[0.5em]">Skill_Protocol_v2</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">
                            Neural<span className="text-transparent stroke-text ml-3">Implants</span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* MARQUEE ROWS */}
            <div className="space-y-4">
                {SKILL_GROUPS.map((group, idx) => (
                    <div key={idx} className="skill-row relative border-y border-white/5 py-10 overflow-hidden bg-white/[0.01]">
                        
                        <div className="flex whitespace-nowrap">
                            {/* We repeat the content twice to create a seamless loop */}
                            <div className={`flex items-center gap-12 pr-12 ${group.direction}`} style={{ animationDuration: group.duration }}>
                                {group.skills.concat(group.skills).map((skill, sIdx) => (
                                    <div key={sIdx} className="flex items-center gap-6 group cursor-default">
                                        <span className="text-5xl md:text-7xl font-bold text-white/10 group-hover:text-neon-cyan transition-colors duration-500 uppercase tracking-tighter">
                                            {skill}
                                        </span>
                                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${group.color} shadow-[0_0_15px_rgba(0,243,255,0.3)]`}></div>
                                    </div>
                                ))}
                            </div>
                            {/* Duplicate for infinite effect */}
                            <div className={`flex items-center gap-12 pr-12 aria-hidden ${group.direction}`} style={{ animationDuration: group.duration }}>
                                {group.skills.concat(group.skills).map((skill, sIdx) => (
                                    <div key={sIdx} className="flex items-center gap-6 group cursor-default">
                                        <span className="text-5xl md:text-7xl font-bold text-white/10 group-hover:text-neon-cyan transition-colors duration-500 uppercase tracking-tighter">
                                            {skill}
                                        </span>
                                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${group.color} shadow-[0_0_15px_rgba(0,243,255,0.3)]`}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
                }
                
                .animate-marquee-left {
                    animation: marquee-left linear infinite;
                }

                .animate-marquee-right {
                    animation: marquee-right linear infinite;
                }

                @keyframes marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }

                /* Pause on hover */
                .skill-row:hover .animate-marquee-left,
                .skill-row:hover .animate-marquee-right {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}