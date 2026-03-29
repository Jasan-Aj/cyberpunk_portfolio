"use client";

import { useRef } from "react";
import { Terminal, Bot, Shield, Cpu } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(".visual-core", { opacity: 0, scale: 0.8, duration: 1.5, ease: "expo.out" })
          .from(".about-header", { x: -30, opacity: 0, duration: 0.8 }, "-=1")
          .from(".about-card", { x: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
          .from(".status-item", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3");

        // Continuous rotation for the left-side scanner
        gsap.to(".scanner-ring", { rotation: 360, duration: 20, repeat: -1, ease: "none" });
        gsap.to(".scanner-ring-reverse", { rotation: -360, duration: 15, repeat: -1, ease: "none" });

    }, { scope: containerRef });

    return (
        <section id="about" ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Tech Grid */}
            <div className="absolute inset-0 bg-[url('/bg-grid.svg')] bg-[length:50px_50px] opacity-[0.03] pointer-events-none"></div>
            
            {/* Ambient Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-cyan/10 blur-[120px] rounded-full"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* LEFT SIDE: The Moving Visual Core */}
                    <div className="visual-core relative flex items-center justify-center">
                        <div className="relative w-64 h-64 md:w-96 md:h-96">
                            {/* Outer Rotating Rings */}
                            <div className="scanner-ring absolute inset-0 border border-dashed border-neon-cyan/20 rounded-full"></div>
                            <div className="scanner-ring-reverse absolute inset-4 border border-dotted border-neon-magenta/20 rounded-full"></div>
                            <div className="scanner-ring absolute inset-10 border border-neon-cyan/10 rounded-full"></div>
                            
                            {/* Center Icon Core */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-neon-cyan/20 blur-2xl rounded-full group-hover:bg-neon-cyan/40 transition-all"></div>
                                    <div className="relative p-8 bg-black border border-neon-cyan/50 rounded-2xl backdrop-blur-xl">
                                        <Cpu className="w-16 h-16 text-neon-cyan animate-pulse" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Data Points around the circle */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 flex flex-col items-center">
                                <div className="h-12 w-[1px] bg-gradient-to-t from-neon-cyan to-transparent"></div>
                                <span className="text-[10px] font-mono text-neon-cyan uppercase tracking-tighter">Bio_Signal: 100%</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Content */}
                    <div className="space-y-10">
                        <div className="about-header">
                            <div className="flex items-center gap-3 mb-2">
                                <Bot className="text-neon-cyan w-5 h-5" />
                                <span className="text-xs font-mono text-neon-cyan uppercase tracking-[0.5em]">DEVELOPER PROFILE</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter uppercase">
                                SYSTEM<span className="text-transparent stroke-text ml-2">OVERVIEW</span>
                            </h2>
                        </div>

                        {/* The Bio Card */}
                        <div className="about-card relative">
                            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-neon-cyan"></div>
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-neon-cyan"></div>
                            
                            <div className="bg-white/[0.03] border border-white/10 p-8 backdrop-blur-md">
                                <p className="text-gray-400 font-mono text-sm mb-6 leading-relaxed">
                                    <span className="text-neon-cyan font-bold mr-2">{">"}</span> 
                                    I am Mohammed Jasan, a Full-Stack Developer and System Architect specializing in building scalable, robust digital ecosystems.
                                </p>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    I bridge the gap between clean React/Next.js UIs and complex Node.js/PHP backends. My focus is &quot;under-the-hood&quot; engineering, including event-driven architecture and AI automation.
                                </p>
                            </div>
                        </div>

                        {/* Status List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: "Location", val: "Sri Lanka // Remote", icon: Shield },
                                { label: "Education", val: "Applied IT Undergraduate", icon: Terminal },
                            ].map((item, i) => (
                                <div key={i} className="status-item flex items-center gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                                    <item.icon className="w-5 h-5 text-neon-cyan/50" />
                                    <div>
                                        <p className="text-[10px] font-mono text-neon-cyan uppercase tracking-widest">{item.label}</p>
                                        <p className="text-sm text-white font-medium uppercase tracking-tight">{item.val}</p>
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
            `}</style>
        </section>
    );
}