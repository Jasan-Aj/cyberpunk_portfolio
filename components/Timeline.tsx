"use client";

import { useRef } from "react";
import { Timer, Zap, Shield, Activity } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE = [
    {
        year: "2024 - PRESENT",
        role: "Lead Cyber Architect",
        company: "Neo-Corp Technologies",
        description: "Spearheading the transition of legacy systems into fully immersive, high-performance web applications using modern stacks.",
        icon: <Zap className="w-4 h-4" />
    },
    {
        year: "2022 - 2024",
        role: "Full Stack Operator",
        company: "DataStream Dynamics",
        description: "Engineered real-time data visualization dashboards and scalable APIs serving millions of requests daily.",
        icon: <Activity className="w-4 h-4" />
    },
    {
        year: "2020 - 2022",
        role: "Frontend Initiate",
        company: "Pixel Syndicate",
        description: "Developed UI/UX components for decentralized finance startups, focusing on responsiveness and fluid animations.",
        icon: <Shield className="w-4 h-4" />
    }
];

export default function Timeline() {
    const containerRef = useRef<HTMLElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Vertical Progress Beam Animation
        gsap.fromTo(progressRef.current, 
            { scaleY: 0 }, 
            { 
                scaleY: 1, 
                ease: "none",
                scrollTrigger: {
                    trigger: ".timeline-container",
                    start: "top 70%",
                    end: "bottom 70%",
                    scrub: 0.5,
                }
            }
        );

        // Entrance animation for items
        const items = gsap.utils.toArray(".timeline-item");
        items.forEach((item: any) => {
            gsap.from(item, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }, { scope: containerRef });

    return (
        <section id="timeline" ref={containerRef} className="py-32 bg-[#020202] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#ff00ff10,transparent_50%)]"></div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center mb-32 space-y-4">
                    <div className="flex items-center gap-3">
                        <Timer className="text-neon-magenta w-5 h-5 animate-pulse" />
                        <span className="text-xs font-mono text-neon-magenta uppercase tracking-[0.5em]">System_History_v4.2</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter uppercase text-center">
                        Temporal<span className="text-transparent stroke-text ml-4">.Shift</span>
                    </h2>
                </div>

                <div className="timeline-container relative">
                    {/* The Background Track */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-white/5"></div>
                    
                    {/* The Animated Beam */}
                    <div 
                        ref={progressRef}
                        className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-neon-magenta via-fuchsia-500 to-transparent origin-top shadow-[0_0_20px_#ff00ff]"
                    ></div>

                    <div className="space-y-32">
                        {TIMELINE.map((item, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={idx} className={`timeline-item relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                    
                                    {/* Central Node */}
                                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                                        <div className="w-10 h-10 rounded-full bg-black border border-neon-magenta flex items-center justify-center shadow-[0_0_15px_#ff00ff40] group-hover:scale-125 transition-transform duration-500">
                                            <div className="text-neon-magenta">{item.icon}</div>
                                        </div>
                                    </div>

                                    {/* Content Box */}
                                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-20' : 'md:pr-20'}`}>
                                        <div className="relative p-8 bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-neon-magenta/50 transition-all duration-500 group overflow-hidden">
                                            
                                            {/* Decorative Corner */}
                                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neon-magenta/20 to-transparent"></div>

                                            <div className="flex justify-between items-start mb-6">
                                                <span className="font-mono text-[10px] text-neon-magenta tracking-widest uppercase py-1 px-2 bg-neon-magenta/10 rounded">
                                                    {item.year}
                                                </span>
                                            </div>

                                            <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-neon-magenta transition-colors tracking-tight">
                                                {item.role}
                                            </h3>
                                            <h4 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-6">
                                                // {item.company}
                                            </h4>

                                            <p className="text-gray-400 font-light leading-relaxed border-l border-white/10 pl-4">
                                                {item.description}
                                            </p>

                                            {/* Bottom Scanning Line */}
                                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-magenta to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                        </div>
                                    </div>

                                    {/* Empty Side Label (For Desktop Depth) */}
                                    <div className={`hidden md:block w-1/2 ${isEven ? 'text-right pr-20' : 'text-left pl-20'}`}>
                                        <span className="text-8xl font-black text-white/[0.02] select-none tracking-tighter">
                                            0{idx + 1}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
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