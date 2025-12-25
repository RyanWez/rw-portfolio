"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Sparkles, MapPin, Zap, Cpu, Layers, ArrowRight } from "lucide-react";

const stats = [
    { value: "3+", label: "Years Experience", color: "cyan" },
    { value: "10+", label: "Projects Built", color: "purple" },
    { value: "100+", label: "Users Served", color: "emerald" },
];

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
        <section id="about" className="py-12 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
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

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div {...fadeInUp} className="mb-6 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2">
                        About <span className="text-gradient-cyan">Me</span>
                    </h2>
                    <p className="text-white/50 text-xs sm:text-sm md:text-base">
                        The person behind the code.
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                    {/* Main Bio Card - Spans 2 columns on desktop */}
                    <motion.div
                        {...fadeInUp}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="md:col-span-2 relative p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden group hover:border-cyan-500/30 transition-colors duration-300"
                    >
                        {/* Gradient corner accent */}
                        <div className="absolute top-0 right-0 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-bl from-cyan-500/10 via-purple-500/5 to-transparent rounded-bl-full pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Header with icon */}
                            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="relative flex-shrink-0">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg sm:rounded-xl blur-lg opacity-40" />
                                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                                        <Code2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cyan-400" strokeWidth={1.5} />
                                    </div>
                                    <Sparkles className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1">
                                        Hi, I&apos;m <span className="text-gradient-cyan">RyanWez</span>
                                    </h3>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs md:text-sm text-white/50">
                                            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                            Myanmar
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs md:text-sm text-emerald-400">
                                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400" />
                                            Available for work
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Bio text */}
                            <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 flex-grow">
                                I&apos;m an <span className="text-white font-medium">AI Product Architect</span> who transforms complex business
                                problems into scalable software solutions. I leverage AI-driven workflows to build
                                enterprise systems, automation tools, and intelligent applications.
                            </p>

                            {/* Skills row */}
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08]"
                                    >
                                        <skill.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${skill.color}`} />
                                        <span className="text-[10px] sm:text-xs md:text-sm text-white/70">{skill.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Cards - Horizontal on mobile, vertical on desktop */}
                    <div className="grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                                className="relative p-3 sm:p-4 md:p-5 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden text-center md:text-left"
                            >
                                {/* Gradient accent - simplified */}
                                <div className={`absolute top-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 ${stat.color === 'cyan' ? 'bg-cyan-500/15' :
                                        stat.color === 'purple' ? 'bg-purple-500/15' :
                                            'bg-emerald-500/15'
                                    } rounded-bl-full blur-sm pointer-events-none`} />

                                <div className="relative z-10">
                                    <span className={`text-xl sm:text-2xl md:text-3xl font-bold ${stat.color === 'cyan' ? 'text-cyan-400' :
                                            stat.color === 'purple' ? 'text-purple-400' :
                                                'text-emerald-400'
                                        }`}>
                                        {stat.value}
                                    </span>
                                    <p className="text-white/50 text-[10px] sm:text-xs md:text-sm mt-0.5 md:mt-1 leading-tight">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Link */}
                <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="mt-6 md:mt-8 flex justify-center"
                >
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/[0.05] border border-white/[0.1] text-white/70 hover:text-white hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-colors duration-200 text-xs sm:text-sm md:text-base"
                    >
                        Let&apos;s work together
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
