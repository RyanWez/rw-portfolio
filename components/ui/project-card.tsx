"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    badges: { label: string; variant?: "cyan" | "purple" | "default" }[];
    link: string;
    variant?: "desktop" | "mobile";
    glowColor?: "cyan" | "purple";
    delay?: number;
}

export function ProjectCard({
    image,
    title,
    subtitle,
    description,
    badges,
    link,
    variant = "desktop",
    glowColor = "cyan",
    delay = 0,
}: ProjectCardProps) {
    const isDesktop = variant === "desktop";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
        >
            <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "group relative block rounded-2xl overflow-hidden",
                    "border border-white/[0.08] hover:border-white/20",
                    "transition-all duration-500",
                    isDesktop ? "aspect-[16/10]" : "aspect-[9/16]",
                    glowColor === "cyan" && "hover:shadow-[0_0_60px_rgba(0,245,255,0.15)]",
                    glowColor === "purple" && "hover:shadow-[0_0_60px_rgba(168,85,247,0.15)]"
                )}
            >
                {/* Background Image */}
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={isDesktop ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 25vw"}
                />

                {/* Overlay - Fades out on hover */}
                <div
                    className={cn(
                        "absolute inset-0 transition-opacity duration-500",
                        "bg-gradient-to-t from-black/90 via-black/60 to-black/30",
                        "group-hover:opacity-0"
                    )}
                />

                {/* Content - Fades out on hover */}
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end transition-opacity duration-500 group-hover:opacity-0">
                    {/* Title & Subtitle */}
                    <div className="mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                            {title}
                        </h3>
                        <p className="text-white/60 text-sm">{subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
                        {description}
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                        {badges.map((badge, index) => (
                            <span
                                key={index}
                                className={cn(
                                    "text-xs px-3 py-1.5 rounded-full font-medium",
                                    badge.variant === "cyan" && "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
                                    badge.variant === "purple" && "bg-purple-500/20 text-purple-400 border border-purple-500/30",
                                    (!badge.variant || badge.variant === "default") && "bg-white/10 text-white/70 border border-white/10"
                                )}
                            >
                                {badge.label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* External Link Icon - Shows on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                        <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
