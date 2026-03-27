"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Cpu } from "lucide-react";

const NAV_LINKS = [
    { name: "About", href: "#about", code: "01" },
    { name: "Skills", href: "#skills", code: "02" },
    { name: "Projects", href: "#projects", code: "03" },
    { name: "Timeline", href: "#timeline", code: "04" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 transition-all duration-500">
            <div className={`mx-auto max-w-7xl transition-all duration-500 rounded-lg border ${
                scrolled 
                ? "bg-black/40 backdrop-blur-xl border-white/10 py-3 px-6 shadow-2xl" 
                : "bg-transparent border-transparent py-4 px-0"
            }`}>
                <div className="flex items-center justify-between">
                    
                    {/* LOGO AREA */}
                    <Link href="/" className="group flex items-center gap-3">
                        <div className="relative">
                            <Cpu className="w-8 h-8 text-neon-cyan group-hover:rotate-90 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white tracking-[0.2em] leading-none">
                                SYS<span className="text-neon-cyan italic">.</span>ADMIN
                            </span>
                            <span className="text-[8px] font-mono text-neon-cyan/50 tracking-[0.4em] uppercase">Core_System_v.4</span>
                        </div>
                    </Link>

                    {/* DESKTOP NAV: The "HUD" Brackets */}
                    <div className="hidden md:flex items-center gap-2">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 group overflow-hidden"
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-[8px] font-mono text-neon-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                                        // {link.code}
                                    </span>
                                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">
                                        {link.name}
                                    </span>
                                </div>
                                {/* Animated Bottom Line */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-neon-cyan group-hover:w-1/2 transition-all duration-300"></div>
                            </Link>
                        ))}

                        <div className="h-6 w-[1px] bg-white/10 mx-4"></div>

                        {/* CTA: Initiate Button */}
                        <Link
                            key="initiate"
                            href="#contact"
                            className="relative px-6 py-2 group overflow-hidden"
                        >
                            <div className="absolute inset-0 border border-neon-cyan/50 group-hover:border-neon-cyan transition-colors"></div>
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-1 h-1 bg-neon-cyan"></div>
                            <div className="absolute bottom-0 right-0 w-1 h-1 bg-neon-cyan"></div>
                            
                            <span className="relative z-10 text-[11px] font-bold text-neon-cyan uppercase tracking-[0.3em] group-hover:text-white transition-colors">
                                INITIATE_UPLINK
                            </span>
                        </Link>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        className="md:hidden text-white hover:text-neon-cyan transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* MOBILE OVERLAY: Full Screen Tech Interface */}
            <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[-1] transition-all duration-500 ${
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {NAV_LINKS.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="group flex items-baseline gap-4"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <span className="text-neon-cyan font-mono text-sm opacity-50 group-hover:opacity-100">{link.code}</span>
                            <span className="text-4xl font-bold text-white uppercase tracking-tighter group-hover:text-neon-cyan transition-all italic">
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </div>
                
                {/* Background Decor for Mobile Menu */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/20 tracking-[1em] uppercase">
                    System_Menu_Interface
                </div>
            </div>
        </nav>
    );
}