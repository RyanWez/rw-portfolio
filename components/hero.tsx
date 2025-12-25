"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Circle, ArrowDown } from "lucide-react";

// Blur Text Animation Component - Optimized
function BlurText({ text, delay = 0 }: { text: string; delay?: number }) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: delay,
            },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 150,
                mass: 0.8,
            },
        },
        hidden: {
            opacity: 0,
            filter: "blur(12px)",
            y: 8,
            scale: 0.95,
        },
    };

    return (
        <motion.span
            className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-1"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="inline-block will-change-transform"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-24 pb-12 relative overflow-hidden">
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

            <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
                {/* Availability Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex justify-center"
                >
                    <Badge variant="success" className="mb-8">
                        <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400 animate-pulse" />
                        Available for Projects
                    </Badge>
                </motion.div>

                {/* Main Title - Centered with gradient */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
                >
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        AI Product
                    </span>
                    <br />
                    <span className="text-white">Architect</span>
                </motion.h1>

                {/* Subtitle - Centered with Blur Animation */}
                <div className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed px-2">
                    <BlurText
                        text="I architect intelligent software solutions using AI-driven workflows, transforming complex problems into scalable products."
                        delay={1.2}
                    />
                </div>

                {/* CTA - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0"
                >
                    <a
                        href="#work"
                        className="group px-8 py-3.5 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all duration-300"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                    >
                        Get in Touch
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
