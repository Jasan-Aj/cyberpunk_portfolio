"use client";

import { useRef } from "react";
import { 
    Server, Smartphone, Zap, Layout, 
    Box, Cpu, ChevronRight, Activity
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SERVICES = [
    { id: "01", name: "Fullstack_Systems", icon: <Server />, desc: "Next.js & Node Architectures" },
    { id: "02", name: "Mobile_Frameworks", icon: <Smartphone />, desc: "Flutter & React Native Ops" },
    { id: "03", name: "Neural_Interfaces", icon: <Cpu />, desc: "AI Integration & Data Logic" },
    { id: "04", name: "Dynamic_Dashboards", icon: <Zap />, desc: "Real-time WebSocket Engines" },
    { id: "05", name: "Cloud_Infrastructures", icon: <Box />, desc: "AWS & Docker Deployment" },
];

export default function InfiniteKineticStream() {
    const containerRef = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // High-speed seamless loop - No hover listeners to prevent "sticking"
        gsap.to(scrollRef.current, {
            yPercent: -50,
            duration: 15, 
            ease: "none",
            repeat: -1,
        });

        // Left side entrance
        gsap.from(".info-side", {
            x: -40,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out"
        });
    }, { scope: containerRef });

    return (
        <section 
            ref={containerRef} 
            className="py-24 bg-[#020202] flex items-center justify-center overflow-hidden min-h-[700px]"
        >
            <div className="container max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                
                {/* Left Side: Cyberpunk Typography */}
                <div className="info-side space-y-8 relative z-20">
                    <div className="inline-flex items-center gap-3 px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 rounded-full">
                        <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em]">Stream_Active</span>
                    </div>
                    
                    <h2 className="text-7xl md:text-9xl font-black text-white leading-[0.85] uppercase tracking-tighter">
                        TECH<br />
                        <span className="text-transparent stroke-white/10 italic">STATIONS</span>
                    </h2>

                    <div className="space-y-4 max-w-sm">
                        <div className="h-px w-full bg-gradient-to-r from-cyan-500/50 to-transparent" />
                        <p className="text-white/40 font-mono text-xs leading-relaxed uppercase tracking-wider">
                            &gt; Initializing neural protocols...<br />
                            &gt; Status: Continuous Deployment
                        </p>
                    </div>
                </div>

                {/* Right Side: The Non-Stop Kinetic List */}
                <div className="relative h-[550px] overflow-hidden mask-fade-edges border-l border-white/5 pl-10">
                    {/* The Loop Wrapper */}
                    <div ref={scrollRef} className="flex flex-col gap-4">
                        {/* Render list twice for the seamless reset effect */}
                        {[...SERVICES, ...SERVICES].map((service, i) => (
                            <div 
                                key={i}
                                className="group relative flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-cyan-500/[0.03] hover:border-cyan-500/30 transition-all duration-500 cursor-default"
                            >
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="text-[10px] font-mono text-white/20 group-hover:text-cyan-400 transition-colors">
                                        ID_{service.id}
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-xl text-white/60 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all duration-500">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-white/90 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                                            {service.name}
                                        </h3>
                                        <p className="text-[10px] text-white/20 font-mono mt-1 group-hover:text-white/40">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-white/5 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
                            </div>
                        ))}
                    </div>

                    {/* HUD Vertical Decor */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
                </div>
            </div>

            <style jsx>{`
                .stroke-white\/10 {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
                }
                .mask-fade-edges {
                    mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
                }
            `}</style>
        </section>
    );
}