"use client";

import { ProjectCard } from "@/components/ui/project-card";

export function EMSCard() {
    return (
        <ProjectCard
            image="/images/projects/ems.png"
            title="EMS"
            subtitle="Enterprise Management System"
            description="Full-scale enterprise solution currently managing 100+ employees with real-time analytics, HR management, and business intelligence dashboards."
            badges={[
                { label: "Flagship Product", variant: "cyan" },
                { label: "Production", variant: "cyan" },
                { label: "Next.js" },
                { label: "Real-time DB" },
            ]}
            link="https://www.ems-mm.site/login"
            variant="desktop"
            glowColor="cyan"
            delay={0.1}
        />
    );
}
