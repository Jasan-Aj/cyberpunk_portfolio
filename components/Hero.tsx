"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".hero-bg", { opacity: 0, duration: 1.5 })
          .from(".hero-title", { x: -50, opacity: 0, duration: 1, ease: "power4.out" }, "-=1")
          .from(".hud-content", { x: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.5")
          .to(".hud-scanner", { rotation: 360, duration: 12, repeat: -1, ease: "none" }, 0);

        gsap.to(".hero-video-container", {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#050505] flex flex-col p-6 md:p-16">
            
            {/* Background Video */}
            <div className="absolute inset-0 z-0 hero-video-container hero-bg">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10 pointer-events-none"></div>
                <video 
                    ref={videoRef} 
                    autoPlay loop muted playsInline 
                    className="w-full h-full object-cover opacity-70 grayscale-[0.3]" 
                >
                    <source src="/video/looped.mp4" type="video/mp4" />
                </video>
            </div>

            {/* MAIN MIDDLE SECTION */}
            <div className="relative z-20 flex-1 flex flex-col justify-center">
                <div className="hero-title">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="h-[1px] w-10 bg-neon-cyan/60"></div>
                        <span className="text-[10px] font-mono text-neon-cyan/80 uppercase tracking-[0.5em]">Network_Active</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-white tracking-tighter leading-[0.85] uppercase">
                        JASAN AJ<br />
                        <span className="text-transparent stroke-text">WEB DEV</span>
                    </h1>
                </div>
            </div>

            {/* BOTTOM SECTION: Anchored to bottom */}
            <div className="relative z-20 flex flex-col md:flex-row justify-between items-center md:items-end mt-auto gap-8">
                
                {/* Bottom Left: Coordinates - Hidden on mobile for cleaner look */}
                <div className="hidden md:block font-mono text-[9px] text-white/30 space-y-1 pb-4">
                    <p className="hud-content">SIGNAL: ENCRYPTED</p>
                    <p className="hud-content">PORT: 8080 // SSL</p>
                </div>

                {/* Bottom Right: THE CREATIVE HUB */}
                <div className="w-full md:max-w-md lg:max-w-lg flex flex-col items-center md:items-end gap-5">
                    
                    {/* The Info Card */}
                    <div className="w-full bg-black/40 backdrop-blur-md border-r-0 md:border-r border-neon-cyan/40 p-5 md:p-6 relative group">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-cyan"></div>
                        
                        <p className="text-xs md:text-sm lg:text-base text-white/90 font-mono leading-relaxed mb-4 text-center md:text-left">
                            <span className="text-neon-cyan font-bold">&gt;</span> ARCHITECTING DIGITAL FUTURES THROUGH IMMERSIVE WEB EXPERIENCES. 
                            <span className="inline-block w-2 h-4 bg-neon-cyan/60 animate-block-blink align-middle ml-1"></span>
                        </p>

                        {/* Tech Stack Tags - Scrollable on mobile if they overflow */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 text-[10px] md:text-[12px] font-mono text-white/30 uppercase tracking-[0.1em] md:tracking-[0.2em]">
                            <span className="hud-content whitespace-nowrap">[ MERN ]</span>
                            <span className="hud-content whitespace-nowrap">[ NEXT JS ]</span>
                            <span className="hud-content whitespace-nowrap">[ INNGEST ]</span>
                            <span className="hud-content whitespace-nowrap">[ RAG/AI ]</span>
                        </div>
                    </div>

                    {/* Button Group */}
                    <div className="flex items-center gap-4 w-full justify-center md:justify-end">
                        {/* Scanner - Hidden on mobile to save space */}
                        <div className="relative w-10 h-10 hidden lg:flex items-center justify-center opacity-40">
                            <div className="absolute inset-0 border border-white/20 rounded-full hud-scanner"></div>
                            <div className="w-1 h-1 bg-neon-cyan rounded-full"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                            <a href="#projects" className="group relative flex items-center justify-between px-6 py-3 bg-white text-black text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-neon-cyan">
                                <span>Explore Matrix</span>
                                <span className="ml-4">→</span>
                            </a>
                            
                            <a href="#about" className="group flex items-center justify-between px-6 py-3 border border-white/10 text-white/60 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] hover:text-white hover:bg-white/5 transition-all">
                                <span>System Status</span>
                                <span className="text-neon-cyan/50 italic ml-4">Active</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
                }
                @keyframes block-blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-block-blink {
                    animation: block-blink 1s infinite;
                }
            `}</style>
        </section>
    );
}