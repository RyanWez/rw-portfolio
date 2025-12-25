"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Sparkles, MapPin, Zap, Cpu, Layers, ArrowRight } from "lucide-react";

const skills = [
    { icon: Cpu, label: "AI Integration", color: "text-cyan-400" },
    { icon: Layers, label: "Full Stack", color: "text-purple-400" },
    { icon: Zap, label: "Automation", color: "text-amber-400" },
];

export function About() {
    const prefersReducedMotion = useReducedMotion();

    // Simplified animation for performance
    const fadeInUp = {
        initial: { opacity: 0, y: 15 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4 },
    };

    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-12 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Background gradient blobs - Hidden on mobile for performance */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden sm:block">
                <div
                    className="absolute top-1/4 -right-20 w-[300px] h-[300px] rounded-full bg-cyan-500/15 blur-[80px]"
                    style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
                />
                <div
                    className="absolute bottom-1/4 -left-20 w-[200px] h-[200px] rounded-full bg-purple-500/10 blur-[60px]"
                    style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div {...fadeInUp} className="mb-6 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2">
                        About <span className="text-gradient-cyan">Me</span>
                    </h2>
                    <p className="text-white/50 text-xs sm:text-sm md:text-base">
                        The person behind the code.
                    </p>
                </motion.div>

                {/* Bio Card - Full Width */}
                <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative p-5 sm:p-8 md:p-10 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden group hover:border-cyan-500/30 transition-colors duration-300"
                >
                    {/* Gradient corner accents */}
                    <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-bl from-cyan-500/10 via-purple-500/5 to-transparent rounded-bl-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full pointer-events-none" />

                    <div className="relative z-10 flex flex-col">
                        {/* Header with icon */}
                        <div className="flex items-start gap-4 sm:gap-5 mb-5 sm:mb-8">
                            <div className="relative flex-shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl sm:rounded-2xl blur-xl opacity-50" />
                                <div className="relative w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                                    <Code2 className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-cyan-400" strokeWidth={1.5} />
                                </div>
                                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                            </div>

                            <div className="min-w-0 flex-1 pt-1">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                                    Hi, I&apos;m <span className="text-gradient-cyan">RyanWez</span>
                                </h3>
                                <div className="flex flex-wrap gap-3 sm:gap-4">
                                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/50">
                                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                        Myanmar
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-emerald-400">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                        Available for work
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bio text */}
                        <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                            I&apos;m an <span className="text-white font-medium">AI Product Architect</span> who transforms complex business
                            problems into scalable software solutions. I leverage AI-driven workflows to build
                            enterprise systems, automation tools, and intelligent applications that make a real impact.
                        </p>

                        {/* Skills row */}
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.15] transition-colors"
                                >
                                    <skill.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${skill.color}`} />
                                    <span className="text-xs sm:text-sm text-white/70">{skill.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* CTA Link */}
                <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-8 md:mt-10 flex justify-center"
                >
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white/[0.05] border border-white/[0.1] text-white/70 hover:text-white hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-colors duration-200 text-sm sm:text-base"
                    >
                        Let&apos;s work together
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
