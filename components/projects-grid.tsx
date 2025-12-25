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

                {/* Projects Layout */}
                <div className="space-y-6">
                    {/* Row 1: EMS - Full width desktop project */}
                    <div className="w-full">
                        <EMSCard />
                    </div>

                    {/* Row 2: Mobile Apps - Side by side */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <div className="col-span-1 md:col-span-1">
                            <StockMhatCard />
                        </div>
                        <div className="col-span-1 md:col-span-1">
                            <AhkyawayMhatCard />
                        </div>
                        {/* Sayar Kaung takes remaining 2 columns on desktop */}
                        <div className="col-span-2 md:col-span-2">
                            <SayarKaungCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
