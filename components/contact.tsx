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
                "group relative border border-white/[0.04] bg-white/[0.01] rounded-2xl overflow-hidden transition-all duration-500",
                className
            )}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(350px circle at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`
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
        <section id="contact" className="py-16 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#020202]">
            {/* 2026 Trend: Grid Mesh Background - More Subtle */}
            <div className="absolute inset-0 z-0 opacity-[0.2]" 
                 style={{ 
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 75%)'
                 }} 
            />

            {/* Noise Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3")` }} 
            />

            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Compact Architectural Container */}
                    <div className="relative group p-[1px] rounded-[2rem] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 opacity-30" />
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_160deg,rgba(0,245,255,0.08)_180deg,transparent_200deg,transparent_360deg)] opacity-40 blur-sm"
                        />

                        <div className="relative rounded-[2rem] bg-[#050505]/90 backdrop-blur-3xl p-8 md:p-16 border border-white/[0.05] shadow-xl">
                            {/* Header Section */}
                            <div className="text-center mb-10 md:mb-12">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.01] border border-white/[0.04] text-white/30 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-bold mb-8"
                                >
                                    <Sparkles className="w-3 h-3 text-cyan-400" />
                                    The Next Chapter
                                </motion.div>

                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-tight leading-[1.1] text-white/90">
                                    Ready to <br className="sm:hidden"/> 
                                    <span className="inline-block relative font-bold italic w-full sm:w-auto px-2">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={rotatingWords[currentIndex]}
                                                initial={{ x: 5, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: -5, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                                className="text-gradient-purple inline-block min-w-[3ch]"
                                            >
                                                {rotatingWords[currentIndex]}
                                            </motion.span>
                                        </AnimatePresence>
                                        <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                                    </span>
                                    ?
                                </h2>
                                <p className="text-white/30 max-w-lg mx-auto text-sm sm:text-base leading-relaxed tracking-tight px-4 text-balance">
                                    Blending technical precision with creative vision to build the next generation of digital experiences.
                                </p>
                            </div>

                            {/* Refined Small Social Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                <SpotlightCard spotlightColor="rgba(38, 165, 228, 0.08)">
                                    <a href="https://t.me/RyanWez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-6 group/link">
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.01] border border-white/5 flex items-center justify-center group-hover/link:bg-[#26A5E4]/10 group-hover/link:border-[#26A5E4]/20 transition-all duration-300">
                                            <SiTelegram className="w-5 h-5 text-[#26A5E4]" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base font-medium text-white/80 group-hover/link:text-[#26A5E4] transition-colors truncate">Telegram</h3>
                                            <p className="text-white/20 text-[11px] truncate">Project inquiries</p>
                                        </div>
                                        <ArrowUpRight className="w-4 h-4 text-white/5 group-hover/link:text-white transition-colors" />
                                    </a>
                                </SpotlightCard>

                                <SpotlightCard spotlightColor="rgba(168, 85, 247, 0.08)">
                                    <a href="https://github.com/RyanWez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-6 group/link">
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.01] border border-white/5 flex items-center justify-center group-hover/link:bg-purple-500/10 group-hover/link:border-purple-500/20 transition-all duration-300">
                                            <SiGithub className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base font-medium text-white/80 group-hover/link:text-purple-400 transition-colors truncate">GitHub</h3>
                                            <p className="text-white/20 text-[11px] truncate">Architecture & Logic</p>
                                        </div>
                                        <ArrowUpRight className="w-4 h-4 text-white/5 group-hover/link:text-white transition-colors" />
                                    </a>
                                </SpotlightCard>
                            </div>

                            {/* Tight Footer */}
                            <div className="flex items-center justify-center gap-8 pt-8 border-t border-white/[0.03]">
                                <div className="flex items-center gap-2.5">
                                    <div className="relative flex h-1.5 w-1.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500 shadow-[0_0_6px_rgba(0,245,255,0.7)]"></span>
                                    </div>
                                    <span className="text-white/20 text-[9px] uppercase tracking-[0.2em] font-medium">Available</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3.5 h-3.5 text-white/10" />
                                    <span className="text-white/20 text-[9px] uppercase tracking-[0.1em] font-medium">Responds in 24h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
