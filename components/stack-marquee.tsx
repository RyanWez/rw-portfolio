"use client";

import { motion } from "framer-motion";
import {
    SiNextdotjs,
    SiVercel,
    SiTypescript,
    SiTailwindcss,
    SiReact,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiGit,
    SiFigma,
    SiOpenai,
} from "react-icons/si";
import { Sparkles } from "lucide-react";

const techStack = [
    { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { icon: SiVercel, name: "Vercel", color: "text-white" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
    { icon: SiReact, name: "React", color: "text-cyan-400" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-400" },
    { icon: SiPrisma, name: "Prisma", color: "text-white" },
    { icon: SiGit, name: "Git", color: "text-orange-500" },
    { icon: SiFigma, name: "Figma", color: "text-purple-400" },
    { icon: Sparkles, name: "Gemini", color: "text-cyan-400" },
    { icon: SiOpenai, name: "AI Tools", color: "text-emerald-400" },
];

function MarqueeItem({ icon: Icon, name, color }: { icon: React.ElementType; name: string; color: string }) {
    return (
        <div className="flex items-center gap-3 px-5 py-2.5 mx-2 rounded-full bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 flex-shrink-0">
            <Icon className={`w-4 h-4 ${color}`} />
            <span className="text-white/60 text-sm font-medium whitespace-nowrap">
                {name}
            </span>
        </div>
    );
}

export function StackMarquee() {
    return (
        <section className="py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01]"
                >
                    {/* Gradient overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

                    {/* Marquee Container - uses flex with 2 identical groups */}
                    <div className="flex py-6 group">
                        {/* First group */}
                        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
                            {techStack.map((tech, index) => (
                                <MarqueeItem key={`first-${index}`} {...tech} />
                            ))}
                        </div>
                        {/* Second group (duplicate for seamless loop) */}
                        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
                            {techStack.map((tech, index) => (
                                <MarqueeItem key={`second-${index}`} {...tech} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
