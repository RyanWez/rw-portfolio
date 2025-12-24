"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Circle, ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-12 relative overflow-hidden">
            {/* Gradient Mesh Blobs - 2025 Style */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {/* Cyan blob - top right */}
                <motion.div
                    className="absolute -top-20 -right-20 w-[700px] h-[700px] rounded-full bg-cyan-500/30 blur-[100px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.4, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                {/* Purple blob - bottom left */}
                <motion.div
                    className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-purple-500/25 blur-[80px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.25, 0.35, 0.25],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
                {/* Cyan accent blob - center left */}
                <motion.div
                    className="absolute top-1/3 -left-10 w-[400px] h-[400px] rounded-full bg-cyan-400/20 blur-[60px]"
                    animate={{
                        y: [0, 30, 0],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </div>

            <div className="max-w-5xl mx-auto w-full relative z-10">
                {/* Availability Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Badge variant="success" className="mb-8">
                        <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400 animate-pulse" />
                        Available for new projects
                    </Badge>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
                >
                    I architect{" "}
                    <span className="text-gradient-cyan">intelligent software</span>{" "}
                    <br className="hidden md:block" />
                    solutions using AI-driven workflows.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-white/50 max-w-2xl mb-10 leading-relaxed"
                >
                    AI Product Architect crafting enterprise systems, automation tools, and
                    intelligent applications that solve real business problems.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap gap-4"
                >
                    <a
                        href="#work"
                        className="group px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2"
                    >
                        View My Work
                        <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full glass border border-white/10 text-white font-semibold hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
                >
                    <div className="w-1 h-2 rounded-full bg-white/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}
