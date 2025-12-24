"use client";

import { Badge } from "@/components/ui/badge";
import { BentoCard } from "@/components/ui/bento-card";
import { GraduationCap, BookOpen, Users, Star, Play } from "lucide-react";

export function SayarKaungCard() {
    return (
        <BentoCard delay={0.4}>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Left: Info */}
                <div className="flex items-center gap-4 md:w-1/3">
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <GraduationCap className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Sayar Kaung</h3>
                        <p className="text-white/50 text-sm">Educational Platform</p>
                    </div>
                </div>

                {/* Center: Mini Preview */}
                <div className="flex-1 flex items-center gap-3 p-4 rounded-xl bg-[#0f0f0f] border border-white/5">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5">
                        <BookOpen className="w-4 h-4 text-amber-400" />
                        <span className="text-xs text-white/50">Courses</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5">
                        <Users className="w-4 h-4 text-amber-400" />
                        <span className="text-xs text-white/50">Students</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5">
                        <Star className="w-4 h-4 text-amber-400" />
                        <span className="text-xs text-white/50">Reviews</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5">
                        <Play className="w-4 h-4 text-amber-400" />
                        <span className="text-xs text-white/50">Videos</span>
                    </div>
                </div>

                {/* Right: Badge */}
                <div className="md:w-auto">
                    <Badge>EdTech</Badge>
                </div>
            </div>
        </BentoCard>
    );
}
