"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SiTelegram, SiGithub } from "react-icons/si";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const rotatingWords = ["Collaborate", "Innovate", "Build", "Ship"];

export function Contact() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Decorative gradient orbs */}
            <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Main Glass Card with animated border */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative p-[1px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden"
                >
                    {/* Animated gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse opacity-50" />

                    {/* Inner content */}
                    <div className="relative rounded-2xl md:rounded-3xl bg-[#0a0a0a]/90 backdrop-blur-xl p-6 sm:p-8 md:p-14">
                        {/* Header */}
                        <div className="text-center mb-8 md:mb-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs sm:text-sm mb-4 sm:mb-6"
                            >
                                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                                Let&apos;s create something amazing
                            </motion.div>

                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                                Ready to{" "}
                                <span className="inline-block relative">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={rotatingWords[currentIndex]}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="text-gradient-purple inline-block"
                                        >
                                            {rotatingWords[currentIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                                ?
                            </h2>
                            <p className="text-white/50 max-w-md mx-auto text-sm sm:text-base">
                                I&apos;m always excited to work on innovative projects and bring ideas to life.
                            </p>
                        </div>

                        {/* Social Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 md:mb-8">
                            {/* Telegram Card */}
                            <motion.a
                                href="https://t.me/RyanWez"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[#26A5E4]/30 hover:bg-[#26A5E4]/5 transition-all duration-500"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-4 rounded-2xl bg-[#26A5E4]/10 border border-[#26A5E4]/20 group-hover:bg-[#26A5E4]/20 transition-colors">
                                            <SiTelegram className="w-7 h-7 text-[#26A5E4]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">Telegram</h3>
                                            <p className="text-white/40 text-sm">Quick responses, direct chat</p>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-[#26A5E4] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                            </motion.a>

                            {/* GitHub Card */}
                            <motion.a
                                href="https://github.com/RyanWez"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-500"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                                            <SiGithub className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">GitHub</h3>
                                            <p className="text-white/40 text-sm">Check out my projects</p>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                            </motion.a>
                        </div>

                        {/* Availability Status */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex items-center justify-center gap-3 text-white/40 text-sm"
                        >
                            <Clock className="w-4 h-4" />
                            <span>Usually responds within 24 hours</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
