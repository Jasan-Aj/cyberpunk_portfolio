"use client";

import { useRef, useState } from "react";
import { Send, Terminal, Globe, Mail, ShieldAlert, Cpu, Fingerprint } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CreativeContact() {
    const containerRef = useRef<HTMLElement>(null);
    const [status, setStatus] = useState("AWAITING_INPUT");

    useGSAP(() => {
        // Subtle background grid movement
        gsap.to(".grid-bg", {
            backgroundPosition: "40px 40px",
            repeat: -1,
            duration: 2,
            ease: "none"
        });

        // Floating UI elements animation
        gsap.to(".floating-hud", {
            y: -10,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "power1.inOut"
        });
    }, { scope: containerRef });

    return (
        <section id="contact" ref={containerRef} className="py-32 bg-[#020202] relative overflow-hidden font-mono text-white">
            {/* The "Cyber-Grid" Background */}
            <div className="grid-bg absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-stretch gap-0 border border-white/10 bg-black/40 backdrop-blur-xl">
                    
                    {/* LEFT SIDE: BIO-METRIC HUD (STATIONARY) */}
                    <div className="lg:w-1/3 p-8 border-r border-white/10 flex flex-col justify-between relative overflow-hidden">
                        {/* Decorative Corner Brackets */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>
                        
                        <div className="space-y-8">
                            <div className="floating-hud">
                                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                                    <Fingerprint className="w-5 h-5" />
                                    <span className="text-[10px] tracking-[0.4em] font-bold">IDENTITY_VERIFIED</span>
                                </div>
                                <h2 className="text-5xl font-black uppercase leading-none tracking-tighter">
                                    Establish<br />
                                    <span className="text-cyan-500">Connection</span>
                                </h2>
                            </div>

                            <div className="space-y-4 pt-8">
                                <div className="p-4 border border-white/5 bg-white/[0.02] group hover:border-cyan-500/50 transition-colors">
                                    <p className="text-[8px] text-white/30 uppercase mb-2">Primary_Node</p>
                                    <p className="text-sm font-bold flex items-center gap-2">
                                        <Mail className="w-3 h-3 text-cyan-500" /> hello@yourdomain.com
                                    </p>
                                </div>
                                <div className="p-4 border border-white/5 bg-white/[0.02] group hover:border-cyan-500/50 transition-colors">
                                    <p className="text-[8px] text-white/30 uppercase mb-2">Global_Position</p>
                                    <p className="text-sm font-bold flex items-center gap-2">
                                        <Globe className="w-3 h-3 text-cyan-500" /> Sector_7 // EARTH
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive "Pulse" Meter */}
                        <div className="mt-12">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-[10px] text-white/40 uppercase">Signal_Strength</span>
                                <span className="text-[10px] text-cyan-400 animate-pulse">98.2%</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 flex gap-1">
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className={`h-full flex-1 ${i < 10 ? 'bg-cyan-500' : 'bg-white/20'}`}></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: DATA INJECTION (FORM) */}
                    <div className="lg:w-2/3 p-8 md:p-16 relative">
                        <div className="absolute top-4 right-8 flex gap-4 text-[9px] text-white/20">
                            <span>ENC: AES-256</span>
                            <span>PROT: WSS://</span>
                        </div>

                        <form className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-12">
                                {/* Input 1 */}
                                <div className="relative group">
                                    <input required type="text" className="peer w-full bg-transparent border-b border-white/10 py-2 text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder-transparent" id="name" placeholder="Name" />
                                    <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] uppercase tracking-widest text-white/40 group-focus-within:text-cyan-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-[10px]">
                                        User_Alias
                                    </label>
                                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-500 group-focus-within:w-full transition-all duration-500"></div>
                                </div>

                                {/* Input 2 */}
                                <div className="relative group">
                                    <input required type="email" className="peer w-full bg-transparent border-b border-white/10 py-2 text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder-transparent" id="email" placeholder="Email" />
                                    <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] uppercase tracking-widest text-white/40 group-focus-within:text-cyan-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-[10px]">
                                        Uplink_Address
                                    </label>
                                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-500 group-focus-within:w-full transition-all duration-500"></div>
                                </div>
                            </div>

                            {/* Textarea */}
                            <div className="relative group">
                                <textarea required rows={4} className="peer w-full bg-white/[0.03] border border-white/10 p-4 text-sm focus:outline-none focus:border-cyan-500/50 transition-all placeholder-transparent" id="msg" placeholder="Message"></textarea>
                                <label htmlFor="msg" className="absolute left-2 -top-6 text-[10px] uppercase tracking-widest text-white/40 group-focus-within:text-cyan-500 transition-all">
                                    Data_Payload
                                </label>
                                {/* Corners for Textarea */}
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-focus-within:border-cyan-500"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-focus-within:border-cyan-500"></div>
                            </div>

                            {/* Submit Button */}
                            <button className="relative w-full overflow-hidden border border-cyan-500/50 group py-6 transition-all hover:bg-cyan-500/10">
                                <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <div className="relative z-10 flex items-center justify-center gap-4 group-hover:text-black transition-colors font-black uppercase tracking-[0.8em] text-xs">
                                    <Cpu className="w-4 h-4 animate-spin-slow" />
                                    Initiate_Broadcast
                                    <Send className="w-4 h-4" />
                                </div>
                            </button>
                        </form>

                        {/* Terminal Log Footer */}
                        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-[8px] text-white/40">SYSTEM_READY</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                                    <span className="text-[8px] text-white/40">ENCRYPTION_ACTIVE</span>
                                </div>
                            </div>
                            <p className="text-[7px] text-white/20 uppercase tracking-[0.3em]">© 2026 // NO_RIGHTS_RESERVED // OPEN_SOURCE</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}