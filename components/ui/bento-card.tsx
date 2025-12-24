"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    size?: "default" | "large" | "tall";
    glowColor?: "cyan" | "purple" | "none";
    delay?: number;
}

export function BentoCard({
    children,
    className,
    size = "default",
    glowColor = "none",
    delay = 0,
}: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={cn(
                "relative rounded-2xl p-6 overflow-hidden",
                "glass glass-hover transition-all duration-300",
                {
                    "col-span-1 row-span-1": size === "default",
                    "col-span-1 md:col-span-2 row-span-1 md:row-span-2": size === "large",
                    "col-span-1 row-span-2": size === "tall",
                    "glow-cyan-hover": glowColor === "cyan",
                    "glow-purple-hover": glowColor === "purple",
                },
                className
            )}
        >
            {children}
        </motion.div>
    );
}
