"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// React Icons
import { FaCode, FaDatabase, FaServer, FaRobot, FaLayerGroup } from "react-icons/fa";
import { 
  SiNextdotjs, SiNodedotjs, SiTypescript, SiMongodb, SiReact, 
  SiTailwindcss, SiStripe, SiExpress, SiLaravel, SiPhp, 
  SiRedux, SiFramer, SiSanity, SiClerk, SiSupabase 
} from "react-icons/si";

/**
 * Updated SKILLS array based on CV content [cite: 27, 28, 52, 58, 64, 70]
 */
const SKILLS = [
  { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-white" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5 text-green-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-emerald-500" /> },
  { name: "React", icon: <SiReact className="w-5 h-5 text-cyan-300" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="w-5 h-5 text-sky-400" /> },
  { name: "PHP", icon: <SiPhp className="w-5 h-5 text-indigo-400" /> },
  { name: "Laravel", icon: <SiLaravel className="w-5 h-5 text-red-500" /> },
  { name: "MySQL", icon: <FaDatabase className="w-5 h-5 text-blue-600" /> },
  { name: "Stripe", icon: <SiStripe className="w-5 h-5 text-indigo-500" /> },
  { name: "Gemini AI", icon: <FaRobot className="w-5 h-5 text-purple-400" /> },
  { name: "Redux", icon: <SiRedux className="w-5 h-5 text-purple-600" /> },
  { name: "Inngest", icon: <FaServer className="w-5 h-5 text-orange-500" /> },
  { name: "Sanity CMS", icon: <SiSanity className="w-5 h-5 text-red-400" /> },
  { name: "Clerk", icon: <SiClerk className="w-5 h-5 text-blue-300" /> },
  { name: "Supabase", icon: <SiSupabase className="w-5 h-5 text-emerald-400" /> },
  { name: "Zustand", icon: <FaLayerGroup className="w-5 h-5 text-amber-600" /> },
  { name: "Arcjet", icon: <FaCode className="w-5 h-5 text-zinc-400" /> },
  { name: "Express", icon: <SiExpress className="w-5 h-5 text-gray-300" /> },
  { name: "Framer Motion", icon: <SiFramer className="w-5 h-5 text-pink-500" /> },
  { name: "AJAX", icon: <FaCode className="w-5 h-5 text-blue-200" /> },
  { name: "JWT Auth", icon: <FaCode className="w-5 h-5 text-gold-400" /> },
  { name: "REST API", icon: <FaServer className="w-5 h-5 text-cyan-500" /> },
  { name: "System Design", icon: <FaLayerGroup className="w-5 h-5 text-white" /> },
];

export default function CircularMarqueeCloseRings() {
  const containerRef = useRef<HTMLElement>(null);
  const earthRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    // Cyber Earth Rotation
    gsap.to(earthRef.current, {
        rotation: 360,
        duration: 100,
        repeat: -1,
        ease: "none"
    });

    // Outer Ring Rotation
    gsap.to(".marquee-ring.outer", {
      rotationY: 360,
      duration: 40,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%",
    });

    // Inner Ring Rotation (Reverse)
    gsap.to(".marquee-ring.inner", {
      rotationY: -360,
      duration: 40,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%",
    });

    // Floating/Scaling animation for individual cards
    gsap.utils.toArray(".skill-card").forEach((card: any, i) => {
      gsap.to(card, {
        y: 6,
        repeat: -1,
        yoyo: true,
        duration: 1.5 + Math.random(),
        ease: "sine.inOut",
        delay: i * 0.03,
      });

      gsap.to(card, {
        scale: 1.03,
        repeat: -1,
        yoyo: true,
        duration: 2 + Math.random() * 1.5,
        ease: "sine.inOut",
        delay: i * 0.06,
      });
    });
  }, { scope: containerRef });

  const outerSkills = SKILLS.slice(0, 12);
  const innerSkills = SKILLS.slice(12, 24);
  const radius = 430;

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-10 bg-[#050505] relative overflow-hidden min-h-[800px] flex flex-col items-center justify-center"
    >
      {/* --- CYBER EARTH BACKGROUND --- */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <svg
          ref={earthRef}
          width="800"
          height="800"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[120%] h-auto md:w-[800px]"
        >
          {/* Latitudes */}
          <circle cx="400" cy="400" r="350" stroke="#06b6d4" strokeWidth="1" strokeDasharray="10 5" />
          <circle cx="400" cy="400" r="250" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="5 5" />
          <circle cx="400" cy="400" r="150" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="2 2" />
          
          {/* Longitudes */}
          <ellipse cx="400" cy="400" rx="350" ry="100" stroke="#06b6d4" strokeWidth="1" />
          <ellipse cx="400" cy="400" rx="100" ry="350" stroke="#06b6d4" strokeWidth="1" />
          <ellipse cx="400" cy="400" rx="250" ry="350" stroke="#06b6d4" strokeWidth="0.5" />
          <ellipse cx="400" cy="400" rx="350" ry="250" stroke="#06b6d4" strokeWidth="0.5" />
          
          {/* Outer Glow */}
          <circle cx="400" cy="400" r="350" stroke="url(#paint0_radial)" strokeWidth="40" opacity="0.2" />
          
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 400) rotate(90) scale(350)">
              <stop stopColor="#06b6d4" />
              <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* --- HEADER --- */}
      <div className="absolute top-10 text-center z-20">
        <div className="flex items-center justify-center gap-2 mb-2">
          <FaCode className="text-cyan-400 w-4 h-4" />
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.5em]">
            Tech_Stack_Orbit_v2
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
          TECH
          <span className="text-transparent stroke-text ml-3">
            ORBIT
          </span>
        </h2>
      </div>

      {/* --- RINGS CONTAINER --- */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* Outer Ring */}
        <div className="relative w-full h-[400px] flex items-center justify-center [perspective:1400px]">
          <div className="marquee-ring outer relative w-full h-full flex items-center justify-center preserve-3d">
            {outerSkills.map((skill, i) => {
              const angle = (i / outerSkills.length) * 360;
              return (
                <div
                  key={i}
                  className="absolute preserve-3d"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                >
                  <div className="skill-card flex items-center gap-3 px-5 py-3 bg-black/60 border border-white/10 rounded-xl backdrop-blur-md min-w-[160px] max-w-[220px] group hover:border-cyan-400/50 hover:shadow-[0_0_15px_#00ffff30] transition-all duration-300">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-mono text-white/90 uppercase tracking-normal break-words">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Inner Ring */}
        <div className="relative w-full h-[400px] flex items-center justify-center [perspective:1400px] -mt-60">
          <div className="marquee-ring inner relative w-full h-full flex items-center justify-center preserve-3d">
            {innerSkills.map((skill, i) => {
              const angle = (i / innerSkills.length) * 360;
              return (
                <div
                  key={i}
                  className="absolute preserve-3d"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                >
                  <div className="skill-card flex items-center gap-3 px-5 py-3 bg-black/60 border border-white/10 rounded-xl backdrop-blur-md min-w-[160px] max-w-[220px] group hover:border-cyan-400/50 hover:shadow-[0_0_15px_#00ffff30] transition-all duration-300">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-mono text-white/90 uppercase tracking-normal break-words">
                      {skill.name}
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

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .marquee-ring {
          transform-style: preserve-3d;
        }

        .skill-card {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        @media (max-width: 768px) {
          .marquee-ring {
            transform: scale(0.5);
          }
        }
      `}</style>
    </section>
  );
}