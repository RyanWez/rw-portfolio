"use client";

import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { SiTelegram, SiGithub } from "react-icons/si";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { useEffect, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

const rotatingWords = ["Collaborate", "Innovate", "Build", "Ship"];

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}

function SpotlightCard({ children, className, spotlightColor = "rgba(255, 255, 255, 0.05)" }: SpotlightCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            onMouseMove={onMouseMove}
            className={cn(
                "group relative border border-white/[0.06] bg-white/[0.01] rounded-3xl overflow-hidden transition-all duration-500",
                className
            )}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`
                    ),
                }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}

export function Contact() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="contact" className="py-24 md:py-44 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#030303]">
            {/* 2026 Trend: Grid Mesh Background */}
            <div className="absolute inset-0 z-0 opactiy-30" 
                 style={{ 
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                 }} 
            />

            {/* Noise Texture Overlay for tactile feel */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3")` }} 
            />

            {/* Scanning Light Beams */}
            <motion.div 
                animate={{ top: ['-20%', '120%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent z-0"
            />
            <motion.div 
                animate={{ top: ['120%', '-20%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute right-1/3 w-px h-60 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent z-0"
            />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                    className="relative"
                >
                    {/* Main Container with Iridescent Animated Border */}
                    <div className="relative group p-[1px] rounded-[2.5rem] overflow-hidden">
                        {/* Iridescent Border Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,rgba(0,245,255,0.1)_180deg,transparent_210deg,transparent_360deg)] opacity-30"
                        />

                        <div className="relative rounded-[2.5rem] bg-[#080808]/80 backdrop-blur-3xl p-8 sm:p-12 md:p-24 border border-white/[0.05] shadow-2xl">
                            {/* Content Header */}
                            <div className="text-center mb-16">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] text-white/40 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold mb-10"
                                >
                                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                                    The Future is Collaborative
                                </motion.div>

                                <h2 className="text-4xl sm:text-5xl md:text-7xl font-light mb-8 tracking-tighter leading-[0.9]">
                                    Ready to <br/>
                                    <span className="inline-block relative font-bold italic mt-2">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={rotatingWords[currentIndex]}
                                                initial={{ x: 10, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: -10, opacity: 0 }}
                                                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                                                className="text-gradient-purple inline-block"
                                            >
                                                {rotatingWords[currentIndex]}
                                            </motion.span>
                                        </AnimatePresence>
                                        <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
                                    </span>
                                </h2>
                                <p className="text-white/30 max-w-md mx-auto text-base sm:text-lg font-light tracking-tight leading-relaxed">
                                    Blending technical precision with creative vision to build the next generation of digital experiences.
                                </p>
                            </div>

                            {/* Minimalist Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                                {/* Telegram Card */}
                                <SpotlightCard spotlightColor="rgba(38, 165, 228, 0.1)">
                                    <a href="https://t.me/RyanWez" target="_blank" rel="noopener noreferrer" className="block p-8 group/link">
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-center justify-between">
                                                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover/link:bg-[#26A5E4]/10 group-hover/link:border-[#26A5E4]/20 transition-all duration-300">
                                                    <SiTelegram className="w-6 h-6 text-[#26A5E4]" />
                                                </div>
                                                <ArrowUpRight className="w-5 h-5 text-white/10 group-hover/link:text-white group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-white mb-1 group-hover/link:text-[#26A5E4] transition-colors">Telegram</h3>
                                                <p className="text-white/20 text-xs tracking-tight">Direct channel for project inquiries</p>
                                            </div>
                                        </div>
                                    </a>
                                </SpotlightCard>

                                {/* GitHub Card */}
                                <SpotlightCard spotlightColor="rgba(168, 85, 247, 0.1)">
                                    <a href="https://github.com/RyanWez" target="_blank" rel="noopener noreferrer" className="block p-8 group/link">
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-center justify-between">
                                                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover/link:bg-purple-500/10 group-hover/link:border-purple-500/20 transition-all duration-300">
                                                    <SiGithub className="w-6 h-6 text-white" />
                                                </div>
                                                <ArrowUpRight className="w-5 h-5 text-white/10 group-hover/link:text-white group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-white mb-1 group-hover/link:text-purple-400 transition-colors">GitHub</h3>
                                                <p className="text-white/20 text-xs tracking-tight">Architecture, logic and open source</p>
                                            </div>
                                        </div>
                                    </a>
                                </SpotlightCard>
                            </div>

                            {/* Footer Status */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/[0.05]">
                                <div className="flex items-center gap-3">
                                    <div className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_8px_rgba(0,245,255,0.8)]"></span>
                                    </div>
                                    <span className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold">Project Available</span>
                                </div>
                                <div className="flex items-center gap-4">
                                     <div className="flex items-center gap-2 group cursor-help">
                                        <Clock className="w-3.5 h-3.5 text-white/20 group-hover:text-cyan-400 transition-colors" />
                                        <span className="text-white/20 text-[10px] uppercase tracking-[0.1em] font-medium">EST. Output: 24h</span>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
