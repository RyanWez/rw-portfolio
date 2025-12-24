"use client";

import { Badge } from "@/components/ui/badge";
import { BentoCard } from "@/components/ui/bento-card";
import { Users, TrendingUp, Calendar, BarChart3 } from "lucide-react";

export function EMSCard() {
    return (
        <BentoCard size="large" glowColor="cyan" delay={0.1}>
            <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <Badge variant="cyan" className="mb-2">Flagship Product</Badge>
                        <h3 className="text-xl font-bold">EMS</h3>
                        <p className="text-white/60 text-sm">Enterprise Management System</p>
                    </div>
                    <Badge variant="success">Production</Badge>
                </div>

                {/* CSS Dashboard Mockup */}
                <div className="flex-1 rounded-xl bg-[#0f0f0f] border border-white/5 overflow-hidden">
                    <div className="flex h-full">
                        {/* Sidebar */}
                        <div className="w-12 md:w-16 bg-[#080808] border-r border-white/5 p-2 flex flex-col gap-2">
                            <div className="w-full aspect-square rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                <div className="w-3 h-3 rounded bg-cyan-500" />
                            </div>
                            <div className="w-full aspect-square rounded-lg bg-white/5" />
                            <div className="w-full aspect-square rounded-lg bg-white/5" />
                            <div className="w-full aspect-square rounded-lg bg-white/5" />
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-3 md:p-4">
                            {/* Stats Row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                                <div className="p-2 md:p-3 rounded-lg bg-white/5 border border-white/5">
                                    <Users className="w-4 h-4 text-cyan-400 mb-1" />
                                    <div className="text-xs text-white/40">Employees</div>
                                    <div className="text-sm font-bold text-white">100+</div>
                                </div>
                                <div className="p-2 md:p-3 rounded-lg bg-white/5 border border-white/5">
                                    <TrendingUp className="w-4 h-4 text-emerald-400 mb-1" />
                                    <div className="text-xs text-white/40">Growth</div>
                                    <div className="text-sm font-bold text-white">24%</div>
                                </div>
                                <div className="p-2 md:p-3 rounded-lg bg-white/5 border border-white/5 hidden md:block">
                                    <Calendar className="w-4 h-4 text-purple-400 mb-1" />
                                    <div className="text-xs text-white/40">Projects</div>
                                    <div className="text-sm font-bold text-white">48</div>
                                </div>
                                <div className="p-2 md:p-3 rounded-lg bg-white/5 border border-white/5 hidden md:block">
                                    <BarChart3 className="w-4 h-4 text-amber-400 mb-1" />
                                    <div className="text-xs text-white/40">Revenue</div>
                                    <div className="text-sm font-bold text-white">↑18%</div>
                                </div>
                            </div>

                            {/* Chart Area */}
                            <div className="h-20 md:h-32 rounded-lg bg-white/5 border border-white/5 p-3 flex items-end gap-1">
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

                {/* Footer */}
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-xs px-2 py-1 rounded bg-white/5 text-white/50">Next.js</span>
                    <span className="text-xs px-2 py-1 rounded bg-white/5 text-white/50">Real-time DB</span>
                    <span className="text-xs px-2 py-1 rounded bg-white/5 text-white/50">Enterprise</span>
                </div>
            </div>
        </BentoCard>
    );
}
