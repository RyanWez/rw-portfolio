"use client";

import { ProjectCard } from "@/components/ui/project-card";

export function StockMhatCard() {
    return (
        <ProjectCard
            image="/images/projects/stock-mhat.png"
            title="Stock Mhat"
            subtitle="Inventory Solution"
            description="Automated inventory tracking system with real-time stock alerts, supplier management, and predictive restocking capabilities."
            badges={[
                { label: "Flutter", variant: "purple" },
                { label: "Automation" },
                { label: "Business Logic" },
            ]}
            link="https://t.me/RyanWez"
            variant="mobile"
            glowColor="purple"
            delay={0.2}
        />
    );
}

export function AhkyawayMhatCard() {
    return (
        <ProjectCard
            image="/images/projects/ahkyaway-mhat.png"
            title="Ahkyaway Mhat"
            subtitle="POS Solution"
            description="Point-of-sale system with payment processing, reporting, and customer management for retail businesses."
            badges={[
                { label: "Flutter", variant: "cyan" },
                { label: "Payments" },
                { label: "Retail" },
            ]}
            link="https://github.com/RyanWez/ahkyaway_mhat-releases/releases"
            variant="mobile"
            glowColor="cyan"
            delay={0.3}
        />
    );
}
