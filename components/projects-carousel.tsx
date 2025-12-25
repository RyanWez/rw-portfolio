"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    badges: { label: string; variant: "cyan" | "purple" | "default" }[];
    image: string;
    link: string;
}

const projects = {
    ems: {
        id: "ems",
        title: "EMS",
        subtitle: "Enterprise Management System",
        description: "Full-scale enterprise solution managing 100+ employees with real-time analytics, HR management, and BI dashboards.",
        badges: [
            { label: "Flagship", variant: "cyan" as const },
            { label: "Production", variant: "cyan" as const },
            { label: "Next.js", variant: "default" as const },
        ],
        image: "/images/projects/ems.png",
        link: "https://www.ems-mm.site/login",
    },
    stockMhat: {
        id: "stock-mhat",
        title: "Stock Mhat",
        subtitle: "Inventory Solution",
        description: "Automated inventory tracking with real-time stock alerts and supplier management.",
        badges: [
            { label: "Flutter", variant: "purple" as const },
            { label: "Automation", variant: "default" as const },
        ],
        image: "/images/projects/stock-mhat.png",
        link: "https://t.me/RyanWez",
    },
    ahkyawayMhat: {
        id: "ahkyaway-mhat",
        title: "Ahkyaway Mhat",
        subtitle: "POS Solution",
        description: "Point-of-sale system with payment processing and customer management.",
        badges: [
            { label: "Flutter", variant: "cyan" as const },
            { label: "Payments", variant: "default" as const },
        ],
        image: "/images/projects/ahkyaway-mhat.png",
        link: "https://github.com/RyanWez/ahkyaway_mhat-releases/releases",
    },
    sayarKaung: {
        id: "sayar-kaung",
        title: "Sayar Kaung",
        subtitle: "Educational Platform",
        description: "Online learning platform with course management, video lessons, and student progress tracking.",
        badges: [
            { label: "EdTech", variant: "cyan" as const },
            { label: "Next.js", variant: "default" as const },
        ],
        image: "/images/projects/sayar-kaung.png",
        link: "https://sayarkaung.vercel.app/",
    }
};

function ProjectCard({
    project,
    variant,
    delay = 0
}: {
    project: Project;
    variant: "desktop" | "mobile";
    delay?: number;
}) {
    const glowColor = project.badges[0]?.variant === "purple" ? "purple" : "cyan";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
        >
            <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "group relative block rounded-2xl overflow-hidden h-full",
                    "border border-white/[0.08] hover:border-white/20",
                    "transition-all duration-500",
                    variant === "desktop" ? "aspect-[16/9]" : "aspect-[9/16]",
                    glowColor === "cyan" && "hover:shadow-[0_0_60px_rgba(0,245,255,0.15)]",
                    glowColor === "purple" && "hover:shadow-[0_0_60px_rgba(168,85,247,0.15)]"
                )}
            >
                {/* Background Image */}
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading="lazy"
                    quality={80}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={variant === "desktop" ? "(max-width: 768px) 100vw, 75vw" : "(max-width: 768px) 100vw, 25vw"}
                />

                {/* Overlay - Fades out on hover */}
                <div
                    className={cn(
                        "absolute inset-0 transition-opacity duration-500",
                        "bg-gradient-to-t from-black/90 via-black/50 to-black/20",
                        "group-hover:opacity-0"
                    )}
                />

                {/* Content - Fades out on hover */}
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end transition-opacity duration-500 group-hover:opacity-0">
                    <div className="mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                            {project.title}
                        </h3>
                        <p className="text-white/60 text-sm">{project.subtitle}</p>
                    </div>

                    <p className={cn(
                        "text-white/70 text-sm leading-relaxed mb-3",
                        variant === "mobile" ? "line-clamp-2" : "line-clamp-2"
                    )}>
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.badges.map((badge, index) => (
                            <span
                                key={index}
                                className={cn(
                                    "text-xs px-2.5 py-1 rounded-full font-medium",
                                    badge.variant === "cyan" && "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
                                    badge.variant === "purple" && "bg-purple-500/20 text-purple-400 border border-purple-500/30",
                                    badge.variant === "default" && "bg-white/10 text-white/70 border border-white/10"
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

export function ProjectsCarousel() {
    return (
        <section id="work" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative">
            {/* Gradient Mesh Blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    className="absolute top-0 -right-20 w-[600px] h-[600px] rounded-full bg-purple-500/30 blur-[80px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.4, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-cyan-500/25 blur-[70px]"
                    animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.25, 0.35, 0.25],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 md:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                        Featured <span className="text-gradient-cyan">Work</span>
                    </h2>
                    <p className="text-white/60 text-sm sm:text-base">
                        Products and systems I&apos;ve architected from concept to production.
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="space-y-4 md:space-y-6">
                    {/* Row 1: EMS (Desktop) + Ahkyaway Mhat (Mobile) - Both Production */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                        <div className="md:col-span-3">
                            <ProjectCard project={projects.ems} variant="desktop" delay={0.1} />
                        </div>
                        <div className="md:col-span-1">
                            <ProjectCard project={projects.ahkyawayMhat} variant="mobile" delay={0.2} />
                        </div>
                    </div>

                    {/* Row 2: Stock Mhat (Mobile) + Sayar Kaung (Desktop) */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                        <div className="md:col-span-1 order-2 md:order-1">
                            <ProjectCard project={projects.stockMhat} variant="mobile" delay={0.3} />
                        </div>
                        <div className="md:col-span-3 order-1 md:order-2">
                            <ProjectCard project={projects.sayarKaung} variant="desktop" delay={0.4} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
