"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Lightbulb, Mail } from "lucide-react";
import { useEffect, useState, useCallback, useMemo } from "react";

const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: Briefcase, label: "Work", href: "#work" },
    { icon: Lightbulb, label: "Philosophy", href: "#philosophy" },
    { icon: Mail, label: "Contact", href: "#contact" },
];

export function Navigation() {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    // Throttle function for scroll performance
    const throttle = useCallback((func: () => void, limit: number) => {
        let inThrottle = false;
        return () => {
            if (!inThrottle) {
                func();
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }, []);

    // Memoized section detection
    const detectActiveSection = useCallback(() => {
        setIsScrolled(window.scrollY > 50);

        const isNearBottom =
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

        if (isNearBottom) {
            setActiveSection("contact");
            return;
        }

        const sections = ["home", "about", "work", "philosophy", "contact"];
        let currentSection = "home";

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2) {
                    currentSection = section;
                }
            }
        }

        setActiveSection(currentSection);
    }, []);

    useEffect(() => {
        const throttledScroll = throttle(detectActiveSection, 100);

        window.addEventListener("scroll", throttledScroll, { passive: true });
        detectActiveSection();

        return () => window.removeEventListener("scroll", throttledScroll);
    }, [throttle, detectActiveSection]);

    // Memoized nav items to prevent re-renders
    const renderedNavItems = useMemo(
        () =>
            navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                    <a
                        key={item.label}
                        href={item.href}
                        className={cn(
                            "relative flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full transition-colors duration-200",
                            isActive ? "text-black" : "text-white/50 hover:text-white/80"
                        )}
                    >
                        {/* Animated background pill */}
                        {isActive && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-white rounded-full shadow-lg"
                                transition={{
                                    type: "spring",
                                    stiffness: 380,
                                    damping: 30,
                                }}
                            />
                        )}
                        <item.icon className="w-4 h-4 relative z-10 flex-shrink-0" />
                        <AnimatePresence mode="wait">
                            {isActive && (
                                <motion.span
                                    key={item.label}
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "auto", opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                    }}
                                    className="text-sm font-medium relative z-10 overflow-hidden whitespace-nowrap"
                                >
                                    {item.label}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </a>
                );
            }),
        [activeSection]
    );

    return (
        <nav
            className={cn(
                "fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500",
                isScrolled && "top-4"
            )}
        >
            {/* 3D Glass Container */}
            <div
                className={cn(
                    "relative flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500",
                    "bg-black/40 backdrop-blur-3xl backdrop-saturate-150",
                    "border border-white/[0.15]",
                    "shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.2)]",
                    isScrolled &&
                    "bg-black/50 backdrop-blur-3xl shadow-[0_8px_40px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.12)]"
                )}
            >
                {/* Subtle top highlight for 3D effect */}
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                {/* Bottom shadow for depth */}
                <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />

                {renderedNavItems}
            </div>
        </nav>
    );
}
