"use client";

import { motion } from "framer-motion";
import { SiTelegram, SiGithub } from "react-icons/si";
import { Heart } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-6 md:py-8 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between md:text-left"
                >
                    {/* Copyright */}
                    <p className="text-white/40 text-xs sm:text-sm flex items-center gap-1 order-2 md:order-1">
                        © {currentYear} RyanWez. Built with{" "}
                        <Heart className="w-3 h-3 text-red-500 fill-red-500" /> and AI.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 order-1 md:order-2">
                        <a
                            href="https://t.me/RyanWez"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-[#26A5E4] transition-colors"
                            aria-label="Telegram"
                        >
                            <SiTelegram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://github.com/RyanWez"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <SiGithub className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Status */}
                    <p className="text-white/30 text-xs order-3">
                        Designed & Developed by RyanWez
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
