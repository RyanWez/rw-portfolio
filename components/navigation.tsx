"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Home, Briefcase, Lightbulb, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: Briefcase, label: "Work", href: "#work" },
    { icon: Lightbulb, label: "Philosophy", href: "#philosophy" },
    { icon: Mail, label: "Contact", href: "#contact" },
];

export function Navigation() {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Check if we're near the bottom of the page (for Contact section)
            const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

            if (isNearBottom) {
                setActiveSection("contact");
                return;
            }

            // Find active section by checking which section is in view
            const sections = ["home", "work", "philosophy", "contact"];
            let currentSection = "home";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Section is considered active if its top is within the top half of viewport
                    if (rect.top <= window.innerHeight / 2) {
                        currentSection = section;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={cn(
                "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
                isScrolled && "top-4"
            )}
        >
            {/* 3D Glass Container */}
            <div
                className={cn(
                    "relative flex items-center gap-1 px-2 py-2 rounded-[28px] transition-all duration-500",
                    // Glass effect with 3D depth
                    "bg-white/[0.03] backdrop-blur-2xl",
                    "border border-white/[0.08]",
                    // 3D shadow layers
                    "shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]",
                    isScrolled && "bg-black/40 shadow-[0_8px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]"
                )}
            >
                {/* Subtle top highlight for 3D effect */}
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {navItems.map((item) => {
                    const isActive = activeSection === item.href.replace("#", "");
                    return (
                        <a
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "relative flex items-center gap-2 px-4 py-2.5 rounded-[20px] transition-all duration-300",
                                isActive
                                    ? "bg-white text-black shadow-lg"
                                    : "text-white/50 hover:text-white/80 hover:bg-white/[0.05]"
                            )}
                        >
                            <item.icon className="w-4 h-4" />
                            <span className="text-sm font-medium hidden sm:inline">{item.label}</span>
                        </a>
                    );
                })}
            </div>
        </motion.nav>
    );
}
