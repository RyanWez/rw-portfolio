"use client";

import { motion } from "framer-motion";
import { SiTelegram, SiGithub } from "react-icons/si";
import { Heart } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    {/* Copyright */}
                    <p className="text-white/40 text-sm flex items-center gap-1">
                        © {currentYear} RyanWez. Built with{" "}
                        <Heart className="w-3 h-3 text-red-500 fill-red-500" /> and AI.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
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
                    <p className="text-white/30 text-xs">
                        Designed & Developed by RyanWez
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
