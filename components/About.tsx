"use client";

import { useRef, useEffect } from "react";
import { Terminal, Bot, Shield, Cpu } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef<HTMLElement>(null);
    const coreRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Timeline for main content
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(".about-header", {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
        .from(".about-card", {
            y: 30,
            opacity: 0,
            rotationX: -15,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
        }, "-=0.6")
        .from(".status-item", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
        }, "-=0.4");

        // Continuous rotation rings
        gsap.to(".scanner-ring", { rotation: 360, duration: 25, repeat: -1, ease: "none" });
        gsap.to(".scanner-ring-reverse", { rotation: -360, duration: 18, repeat: -1, ease: "none" });

        // Floating core animation
        gsap.to(coreRef.current, {
            y: "-=10",
            yoyo: true,
            repeat: -1,
            duration: 2.5,
            ease: "sine.inOut",
        });

        gsap.to(coreRef.current, {
            scale: 1.05,
            yoyo: true,
            repeat: -1,
            duration: 3,
            ease: "sine.inOut",
        });

    }, []);

    return (
        <section ref={containerRef} className="py-16 md:py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/bg-grid.svg')] bg-[length:50px_50px] opacity-5 pointer-events-none"></div>

            {/* Neon Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-cyan/10 blur-[120px] rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-neon-magenta/10 blur-[100px] rounded-full animate-pulse-slow"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT: Floating Core */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-56 h-56 md:w-96 md:h-96">
                            <div className="scanner-ring absolute inset-0 border border-dashed border-neon-cyan/20 rounded-full"></div>
                            <div className="scanner-ring-reverse absolute inset-4 border border-dotted border-neon-magenta/20 rounded-full"></div>
                            <div className="scanner-ring absolute inset-8 md:inset-10 border border-neon-cyan/10 rounded-full"></div>

                            <div ref={coreRef} className="absolute inset-0 flex items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-105">
                                <div className="relative p-6 md:p-10 bg-black border border-neon-cyan/50 rounded-3xl backdrop-blur-xl shadow-neon-cyan">
                                    <Cpu className="w-12 h-12 md:w-20 md:h-20 text-neon-cyan animate-pulse" />
                                </div>
                                <div className="absolute -inset-4 bg-neon-cyan/10 blur-2xl rounded-full transition-opacity group-hover:opacity-50"></div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Content */}
                    <div className="space-y-8 md:space-y-12">
                        {/* Header */}
                        <div className="about-header">
                            <div className="flex items-center gap-3 mb-2">
                                <Bot className="text-neon-cyan w-5 h-5" />
                                <span className="text-xs font-mono text-neon-cyan uppercase tracking-widest">DEVELOPER PROFILE</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
                                SYSTEM <span className="text-transparent stroke-text ml-2">OVERVIEW</span>
                            </h2>
                        </div>

                        {/* Bio Card */}
                        <div className="about-card relative group hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-neon-cyan"></div>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-neon-cyan"></div>

                            <div className="bg-white/[0.03] border border-white/10 p-6 md:p-8 backdrop-blur-md hover:bg-white/[0.05] transition-colors duration-300">
                                <p className="text-gray-400 font-mono text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                                    <span className="text-neon-cyan font-bold mr-2">{">"}</span>
                                    I am Mohammed Jasan, a Full-Stack Developer and System Architect.
                                </p>
                                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                    I bridge the gap between clean React/Next.js UIs and complex Node.js/PHP backends. My focus is "under-the-hood" engineering and AI automation.
                                </p>
                            </div>
                        </div>

                        {/* Status List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: "Location", val: "Sri Lanka // Remote", icon: Shield },
                                { label: "Education", val: "Applied IT Undergraduate", icon: Terminal },
                            ].map((item, i) => (
                                <div key={i} className="status-item flex items-center gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-neon-cyan/10 transition-colors duration-300 rounded-xl cursor-pointer">
                                    <item.icon className="w-5 h-5 text-neon-cyan/50" />
                                    <div>
                                        <p className="text-[9px] md:text-[10px] font-mono text-neon-cyan uppercase tracking-widest">{item.label}</p>
                                        <p className="text-xs md:text-sm text-white font-medium uppercase tracking-tight">{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
                }
                .shadow-neon-cyan {
                    box-shadow: 0 0 40px rgba(0,255,255,0.3), 0 0 80px rgba(0,255,255,0.2);
                }
                .animate-pulse-slow {
                    animation: pulse 6s infinite alternate;
                }
                @keyframes pulse {
                    0% { opacity: 0.2; transform: scale(0.95); }
                    50% { opacity: 0.3; transform: scale(1); }
                    100% { opacity: 0.2; transform: scale(0.95); }
                }
            `}</style>
        </section>
    );
}