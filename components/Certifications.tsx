"use client";

import { useRef } from "react";
import { ShieldCheck, Cpu, Database, Binary, Zap, Terminal, Lock } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CERTS = [
    { name: "AWS Solutions Architect", issuer: "Amazon Web Services", date: "2025", id: "IDX-01", icon: <Cpu className="w-5 h-5" /> },
    { name: "Offensive Security (OSCP)", issuer: "OffSec", date: "2024", id: "IDX-02", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Advanced React Patterns", issuer: "Frontend Masters", date: "2023", id: "IDX-03", icon: <Binary className="w-5 h-5" /> },
    { name: "Cloud Kubernetes Admin", issuer: "CNCF", date: "2024", id: "IDX-04", icon: <Terminal className="w-5 h-5" /> },
    { name: "Neural Network Spec", issuer: "DeepLearning.AI", date: "2023", id: "IDX-05", icon: <Zap className="w-5 h-5" /> },
];

export default function Certifications() {
    const containerRef = useRef<HTMLElement>(null);
    const scannerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // 1. RADAR BEAM ROTATION (The "Engine")
        // We use 'rotation' instead of 'rotate' for GSAP stability
        gsap.to(scannerRef.current, {
            rotation: 360,
            duration: 5, // Faster speed for better "ping" feel
            repeat: -1,
            ease: "none",
        });

        // 2. SCROLL REVEAL: HEADER
        gsap.from(".reveal-header", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });

        // 3. SCROLL REVEAL: DATA BLOCKS
        // Each block slides in and "flashes" into existence
        const blocks = gsap.utils.toArray(".data-block") as HTMLElement[];
        blocks.forEach((block, i) => {
            gsap.from(block, {
                x: i % 2 === 0 ? -30 : 30, // Staggered side entry
                opacity: 0,
                filter: "blur(10px)",
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: block,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });

            // "Decoding" Text Effect (Simulated)
            gsap.from(block.querySelectorAll(".decode-text"), {
                opacity: 0,
                duration: 0.1,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: block,
                    start: "top 90%",
                }
            });
        });

    }, { scope: containerRef });

    return (
        <section id="certifications" ref={containerRef} className="py-32 bg-[#020202] relative overflow-hidden font-mono text-white">
            
            {/* RADAR SYSTEM - Absolute Fixed to Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-20">
                    <div className="absolute inset-0 border border-cyan-500/20 rounded-full"></div>
                    <div className="absolute inset-[20%] border border-cyan-500/10 rounded-full"></div>
                    <div className="absolute inset-[40%] border border-cyan-500/5 rounded-full"></div>
                    
                    {/* The Active Scanner Beam */}
                    <div 
                        ref={scannerRef} 
                        className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,211,238,0.3)_15deg,transparent_30deg)]"
                        style={{ willChange: "transform" }}
                    ></div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    
                    {/* LEFT: STATIC TERMINAL INFO */}
                    <div className="lg:w-1/3 reveal-header">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <div className="flex items-center gap-2 text-cyan-400 mb-3">
                                    <Lock className="w-4 h-4" />
                                    <span className="text-[10px] tracking-[0.5em] font-bold uppercase">Auth_Sequence_Active</span>
                                </div>
                                <h2 className="text-6xl font-black uppercase tracking-tighter leading-none">
                                    Security<br />
                                    <span className="text-transparent stroke-text">Clearance</span>
                                </h2>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 border border-white/5 bg-white/[0.02]">
                                    <p className="text-[9px] text-white/40 uppercase mb-1">Sector</p>
                                    <p className="text-xs text-cyan-400">04_DATA_VAULT</p>
                                </div>
                                <div className="p-3 border border-white/5 bg-white/[0.02]">
                                    <p className="text-[9px] text-white/40 uppercase mb-1">Integrity</p>
                                    <p className="text-xs text-emerald-400">VERIFIED</p>
                                </div>
                            </div>

                            <p className="text-[11px] text-white/30 leading-relaxed uppercase tracking-widest border-l border-white/10 pl-4">
                                Decrypting verified credentials from distributed ledger. Access granted to level_5 personnel only.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: ANIMATED DATA STREAM */}
                    <div className="lg:w-2/3 w-full flex flex-col gap-4">
                        {CERTS.map((cert) => (
                            <div 
                                key={cert.id} 
                                className="data-block group relative flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-500 cursor-crosshair"
                            >
                                {/* Glowing Accent */}
                                <div className="absolute right-0 top-0 h-full w-[1px] bg-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-700"></div>

                                {/* Icon & ID */}
                                <div className="flex flex-col items-center gap-2">
                                    <div className="p-3 bg-white/5 border border-white/10 text-white/20 group-hover:text-cyan-400 group-hover:border-cyan-400/50 transition-all duration-300">
                                        {cert.icon}
                                    </div>
                                    <span className="text-[8px] text-white/20 font-bold tracking-tighter">{cert.id}</span>
                                </div>

                                {/* Title & Issuer */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight decode-text">
                                            {cert.name}
                                        </h3>
                                    </div>
                                    <div className="flex gap-4 text-[9px] text-white/40 uppercase tracking-widest pl-3 border-l border-white/5">
                                        <span>Issued_By: {cert.issuer}</span>
                                        <span className="text-cyan-400/40">&lbrace;&quot;//&quot;&rbrace; CLS_{cert.date}</span>
                                    </div>
                                </div>

                                {/* Status Meter */}
                                <div className="hidden sm:flex flex-col items-end gap-1">
                                    <span className="text-[8px] text-emerald-400/60 font-black">VALIDATED</span>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className={`w-1 h-3 ${i < 5 ? 'bg-cyan-400/40' : 'bg-cyan-400'} group-hover:animate-pulse`}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
                }
                .data-block:hover {
                    box-shadow: 0 0 30px rgba(34, 211, 238, 0.05);
                }
            `}</style>
        </section>
    );
}