"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Target, Users, BookOpen, Minimize2 } from "lucide-react";

const philosophyItems = [
    {
        number: "01",
        icon: Target,
        title: "Problem First",
        description: "Every project starts with understanding the problem, not the syntax. I dig deep into business needs before writing a single line of code.",
        color: "purple",
        iconBg: "bg-purple-500/10 border-purple-500/20",
        iconColor: "text-purple-400"
    },
    {
        number: "02",
        icon: Sparkles,
        title: "AI as Multiplier",
        description: "I leverage AI tools as force multipliers, building systems that would traditionally require entire teams.",
        color: "cyan",
        iconBg: "bg-cyan-500/10 border-cyan-500/20",
        iconColor: "text-cyan-400"
    },
    {
        number: "03",
        icon: Zap,
        title: "Ship Value",
        description: "My focus is on product vision and shipping value to users, not pixel-pushing or over-engineering.",
        color: "amber",
        iconBg: "bg-amber-500/10 border-amber-500/20",
        iconColor: "text-amber-400"
    },
    {
        number: "04",
        icon: Users,
        title: "User-Centric",
        description: "Always design for the end user's needs. Beautiful interfaces mean nothing if they don't solve real problems.",
        color: "cyan",
        iconBg: "bg-cyan-500/10 border-cyan-500/20",
        iconColor: "text-cyan-400"
    },
    {
        number: "05",
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Stay updated with emerging tech and AI advancements. The industry evolves fast—so do I.",
        color: "purple",
        iconBg: "bg-purple-500/10 border-purple-500/20",
        iconColor: "text-purple-400"
    },
    {
        number: "06",
        icon: Minimize2,
        title: "Simplicity Wins",
        description: "Complex problems deserve simple solutions. Elegant code is maintainable code.",
        color: "amber",
        iconBg: "bg-amber-500/10 border-amber-500/20",
        iconColor: "text-amber-400"
    }
];

const glowMap: Record<string, string> = {
    purple: "glow-purple-hover",
    cyan: "glow-cyan-hover",
    amber: "hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]"
};

export function Philosophy() {
    return (
        <section id="philosophy" className="py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        My <span className="text-gradient-purple">Philosophy</span>
                    </h2>
                    <p className="text-white/50">
                        The principles that guide how I build software.
                    </p>
                </motion.div>

                {/* Philosophy Grid - 2 rows of 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {philosophyItems.map((item, index) => (
                        <motion.div
                            key={item.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative p-6 rounded-2xl glass border border-white/5 transition-all duration-300 ${glowMap[item.color]}`}
                        >
                            {/* Number Badge */}
                            <span className="absolute top-4 right-4 text-xs font-mono text-white/20">
                                {item.number}
                            </span>

                            {/* Icon */}
                            <div className={`p-3 rounded-xl border w-fit mb-4 ${item.iconBg}`}>
                                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
