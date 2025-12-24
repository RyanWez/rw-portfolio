"use client";

import { motion } from "framer-motion";
import { EMSCard } from "@/components/project-cards/ems-card";
import { StockMhatCard, AhkyawayMhatCard } from "@/components/project-cards/inventory-cards";
import { SayarKaungCard } from "@/components/project-cards/sayar-kaung-card";

export function ProjectsGrid() {
    return (
        <section id="work" className="py-24 px-6 md:px-12 lg:px-24">
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
                        Featured <span className="text-gradient-cyan">Work</span>
                    </h2>
                    <p className="text-white/60">
                        Products and systems I&apos;ve architected from concept to production.
                    </p>
                </motion.div>

                {/* Bento Grid - Balanced Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Row 1: EMS Large + 2 Small Cards */}
                    <div className="md:col-span-2 md:row-span-2">
                        <EMSCard />
                    </div>
                    <div className="h-full">
                        <StockMhatCard />
                    </div>
                    <div className="h-full">
                        <AhkyawayMhatCard />
                    </div>

                    {/* Row 2: Sayar Kaung spans full width on bottom */}
                    <div className="md:col-span-3">
                        <SayarKaungCard />
                    </div>
                </div>
            </div>
        </section>
    );
}
