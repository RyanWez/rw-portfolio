"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
    Users, TrendingUp, Calendar, BarChart3,
    Package, ArrowRightLeft, GraduationCap,
    ChevronLeft, ChevronRight
} from "lucide-react";

interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    badges: { label: string; variant: "cyan" | "purple" | "success" | "default" }[];
    tags: string[];
    icon: React.ReactNode;
    accentColor: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        id: "ems",
        title: "EMS",
        subtitle: "Enterprise Management System",
        description: "Full-scale enterprise solution currently managing 100+ employees with real-time analytics, HR management, and business intelligence dashboards.",
        badges: [
            { label: "Flagship Product", variant: "cyan" },
            { label: "Production", variant: "success" }
        ],
        tags: ["Next.js", "Real-time DB", "Enterprise"],
        icon: <BarChart3 className="w-6 h-6" />,
        accentColor: "cyan",
        featured: true
    },
    {
        id: "stock-mhat",
        title: "Stock Mhat",
        subtitle: "Inventory Solution",
        description: "Automated inventory tracking system with real-time stock alerts, supplier management, and predictive restocking capabilities.",
        badges: [
            { label: "Automation", variant: "purple" },
            { label: "Business Logic", variant: "default" }
        ],
        tags: ["Inventory", "Tracking", "Alerts"],
        icon: <Package className="w-6 h-6" />,
        accentColor: "purple"
    },
    {
        id: "ahkyaway-mhat",
        title: "Ahkyaway Mhat",
        subtitle: "POS Solution",
        description: "Point-of-sale system with integrated payment processing, sales reporting, customer management, and multi-branch support.",
        badges: [
            { label: "Payments", variant: "cyan" },
            { label: "Retail", variant: "default" }
        ],
        tags: ["POS", "Payments", "Retail"],
        icon: <ArrowRightLeft className="w-6 h-6" />,
        accentColor: "cyan"
    },
    {
        id: "sayar-kaung",
        title: "Sayar Kaung",
        subtitle: "Educational Platform",
        description: "Comprehensive e-learning platform with course management, student progress tracking, video hosting, and interactive assessments.",
        badges: [
            { label: "EdTech", variant: "default" }
        ],
        tags: ["Courses", "Students", "Videos"],
        icon: <GraduationCap className="w-6 h-6" />,
        accentColor: "amber"
    }
];

function EMSMockup() {
    return (
        <div className="mt-4 rounded-xl bg-[#0a0a0a] border border-white/5 overflow-hidden">
            <div className="flex h-48">
                {/* Sidebar */}
                <div className="w-14 bg-[#050505] border-r border-white/5 p-2 flex flex-col gap-2">
                    <div className="w-full aspect-square rounded-lg bg-cyan-500/20 flex items-center justify-center">
                        <div className="w-3 h-3 rounded bg-cyan-500" />
                    </div>
                    <div className="w-full aspect-square rounded-lg bg-white/5" />
                    <div className="w-full aspect-square rounded-lg bg-white/5" />
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4">
                    {/* Stats Row */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                            <Users className="w-3 h-3 text-cyan-400 mb-1" />
                            <div className="text-[10px] text-white/40">Employees</div>
                            <div className="text-xs font-bold text-white">100+</div>
                        </div>
                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                            <TrendingUp className="w-3 h-3 text-emerald-400 mb-1" />
                            <div className="text-[10px] text-white/40">Growth</div>
                            <div className="text-xs font-bold text-white">24%</div>
                        </div>
                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                            <Calendar className="w-3 h-3 text-purple-400 mb-1" />
                            <div className="text-[10px] text-white/40">Projects</div>
                            <div className="text-xs font-bold text-white">48</div>
                        </div>
                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                            <BarChart3 className="w-3 h-3 text-amber-400 mb-1" />
                            <div className="text-[10px] text-white/40">Revenue</div>
                            <div className="text-xs font-bold text-white">↑18%</div>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="h-16 rounded-lg bg-white/5 border border-white/5 p-2 flex items-end gap-1">
                        {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                            <div
                                key={i}
                                className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/50 to-cyan-500/20"
                                style={{ height: `${h}%` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const colorMap: Record<string, string> = {
        cyan: "from-cyan-500/20 border-cyan-500/20 text-cyan-400",
        purple: "from-purple-500/20 border-purple-500/20 text-purple-400",
        amber: "from-amber-500/20 border-amber-500/20 text-amber-400"
    };

    const iconBgMap: Record<string, string> = {
        cyan: "bg-cyan-500/10 border-cyan-500/20",
        purple: "bg-purple-500/10 border-purple-500/20",
        amber: "bg-amber-500/10 border-amber-500/20"
    };

    return (
        <div className="h-full p-8 rounded-3xl glass border border-white/5 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl border ${iconBgMap[project.accentColor]}`}>
                        <span className={colorMap[project.accentColor].split(" ").pop()}>
                            {project.icon}
                        </span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-white/50">{project.subtitle}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    {project.badges.map((badge, i) => (
                        <Badge key={i} variant={badge.variant}>{badge.label}</Badge>
                    ))}
                </div>
            </div>

            {/* Description */}
            <p className="text-white/60 leading-relaxed mb-4">
                {project.description}
            </p>

            {/* Featured Mockup for EMS */}
            {project.featured && <EMSMockup />}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/50">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export function ProjectsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    const cardWidth = 600; // Card width
    const gap = 24; // Gap between cards
    const peekWidth = 200; // How much of next card to show

    const maxIndex = projects.length - 1;

    const goTo = (index: number) => {
        const clampedIndex = Math.max(0, Math.min(index, maxIndex));
        setCurrentIndex(clampedIndex);
        animate(x, -clampedIndex * (cardWidth + gap), {
            type: "spring",
            stiffness: 300,
            damping: 30
        });
    };

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number }; velocity: { x: number } }) => {
        const threshold = cardWidth / 4;
        const velocity = info.velocity.x;

        if (Math.abs(velocity) > 500) {
            // Fast swipe
            if (velocity > 0) {
                goTo(currentIndex - 1);
            } else {
                goTo(currentIndex + 1);
            }
        } else if (Math.abs(info.offset.x) > threshold) {
            // Slow drag past threshold
            if (info.offset.x > 0) {
                goTo(currentIndex - 1);
            } else {
                goTo(currentIndex + 1);
            }
        } else {
            // Snap back
            goTo(currentIndex);
        }
    };

    return (
        <section id="work" className="py-24 overflow-hidden relative">
            {/* Gradient Mesh Blobs - Work Section */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {/* Purple blob - right side */}
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
                {/* Cyan blob - left side */}
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

            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mb-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-end justify-between"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                            Featured <span className="text-gradient-cyan">Work</span>
                        </h2>
                        <p className="text-white/60">
                            Products and systems I&apos;ve architected from concept to production.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => goTo(currentIndex - 1)}
                            disabled={currentIndex === 0}
                            className="p-3 rounded-full glass border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => goTo(currentIndex + 1)}
                            disabled={currentIndex === maxIndex}
                            className="p-3 rounded-full glass border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Carousel */}
            <div
                ref={containerRef}
                className="relative"
                style={{ paddingLeft: `calc((100vw - ${cardWidth}px) / 2 - ${peekWidth / 2}px)` }}
            >
                <motion.div
                    className="flex gap-6 cursor-grab active:cursor-grabbing"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{
                        left: -maxIndex * (cardWidth + gap),
                        right: 0
                    }}
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="flex-shrink-0"
                            style={{ width: cardWidth }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} index={index} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goTo(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? "w-8 bg-cyan-500"
                            : "bg-white/20 hover:bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
