"use client";

import { Badge } from "@/components/ui/badge";
import { BentoCard } from "@/components/ui/bento-card";
import { Package, ArrowRightLeft } from "lucide-react";

export function StockMhatCard() {
    return (
        <BentoCard glowColor="purple" delay={0.2}>
            <div className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                        <Package className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="font-bold">Stock Mhat</h3>
                        <p className="text-white/50 text-xs">Inventory Solution</p>
                    </div>
                </div>

                <p className="text-white/60 text-sm flex-1">
                    Automated inventory tracking with real-time stock alerts and supplier management.
                </p>

                <div className="flex gap-2 mt-4">
                    <Badge variant="purple">Automation</Badge>
                    <Badge>Business Logic</Badge>
                </div>
            </div>
        </BentoCard>
    );
}

export function AhkyawayMhatCard() {
    return (
        <BentoCard glowColor="cyan" delay={0.3}>
            <div className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                        <ArrowRightLeft className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                        <h3 className="font-bold">Ahkyaway Mhat</h3>
                        <p className="text-white/50 text-xs">POS Solution</p>
                    </div>
                </div>

                <p className="text-white/60 text-sm flex-1">
                    Point-of-sale system with payment processing, reporting, and customer management.
                </p>

                <div className="flex gap-2 mt-4">
                    <Badge variant="cyan">Payments</Badge>
                    <Badge>Retail</Badge>
                </div>
            </div>
        </BentoCard>
    );
}
