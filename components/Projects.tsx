"use client";

import { useRef } from "react";
import { ExternalLink, Code2, Terminal, Cpu } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
    {
        id: "01",
        title: "Project Zero Dawn",
        description: "A decentralized exchange platform built with advanced smart contracts and a real-time glowing order book.",
        tech: ["Next.js", "Solidity", "TailwindCSS"],
        links: { github: "#", live: "#" },
        image: "bg-gradient-to-br from-cyan-500/20 to-transparent"
    },
    {
        id: "02",
        title: "NeuroNet Analyzer",
        description: "Machine learning dashboard visualizing neural network layers in a 3D cyberpunk interface.",
        tech: ["Three.js", "Python", "TensorFlow"],
        links: { github: "#", live: "#" },
        image: "bg-gradient-to-br from-fuchsia-500/20 to-transparent"
    },
    {
        id: "03",
        title: "Cyber City Protocol",
        description: "Real-time multiplayer web game set in a dystopian future with integrated crypto economy.",
        tech: ["Socket.io", "Phaser.js", "MongoDB"],
        links: { github: "#", live: "#" },
        image: "bg-gradient-to-br from-emerald-500/20 to-transparent"
    }
];

export default function Projects() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const items = gsap.utils.toArray(".project-item");
        
        items.forEach((item: any) => {
            const content = item.querySelector(".project-content");
            const visual = item.querySelector(".project-visual");

            gsap.from(content, {
                x: item.classList.contains("rev") ? 100 : -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
            
            gsap.from(visual, {
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }, { scope: containerRef });

    return (
        <section id="projects" ref={containerRef} className="py-32 bg-[#020202] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col mb-24 space-y-4">
                    <div className="flex items-center gap-3">
                        <Terminal className="text-cyan-400 w-5 h-5" />
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.5em]">Sector_04 // Deployment</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter uppercase">
                        Operation<span className="text-transparent stroke-text ml-4">.Logs</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-32">
                    {PROJECTS.map((project, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div 
                                key={project.id} 
                                className={`project-item flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse rev'} items-center gap-12`}
                            >
                                <div className="project-visual relative w-full lg:w-1/2 aspect-video bg-white/[0.03] border border-white/10 group overflow-hidden">
                                    <div className={`absolute inset-0 ${project.image} group-hover:scale-110 transition-transform duration-700`}></div>
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <div className="absolute top-4 left-4 font-mono text-[10px] text-cyan-400 opacity-60 uppercase">
                                        PRJ_{project.id} // STAT: STABLE
                                    </div>
                                </div>

                                <div className="project-content w-full lg:w-1/2 space-y-6">
                                    <div className="relative">
                                        <span className="absolute -top-12 -left-4 text-8xl font-bold text-white/[0.03] pointer-events-none select-none">
                                            {project.id}
                                        </span>
                                        <h3 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-white/60 uppercase tracking-widest hover:text-cyan-400 transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-6 pt-4">
                                        <a href={project.links.github} className="flex items-center gap-2 group/link" target="_blank" rel="noopener noreferrer">
                                            <div className="p-3 border border-white/10 group-hover/link:border-cyan-400 group-hover/link:bg-cyan-400/10 transition-all rounded-full">
                                                {/* Manual SVG for GitHub to avoid import errors */}
                                                <svg className="w-5 h-5 text-white/60 group-hover/link:text-cyan-400 fill-current" viewBox="0 0 24 24">
                                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                                </svg>
                                            </div>
                                            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 group-hover/link:text-white">Src_Code</span>
                                        </a>
                                        <a href={project.links.live} className="flex items-center gap-2 group/link" target="_blank" rel="noopener noreferrer">
                                            <div className="p-3 border border-white/10 group-hover/link:border-cyan-400 group-hover/link:bg-cyan-400/10 transition-all rounded-full">
                                                <ExternalLink className="w-5 h-5 text-white/60 group-hover/link:text-cyan-400" />
                                            </div>
                                            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 group-hover/link:text-white">Live_Sys</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </section>
    );
}