"use client";

import { ProjectCard } from "@/components/ui/project-card";

export function SayarKaungCard() {
    return (
        <ProjectCard
            image="/images/projects/sayar-kaung.png"
            title="Sayar Kaung"
            subtitle="Educational Platform"
            description="Online learning platform connecting students with expert tutors, featuring course management, video lessons, and progress tracking."
            badges={[
                { label: "EdTech", variant: "cyan" },
                { label: "Next.js" },
                { label: "Vercel" },
            ]}
            link="https://sayarkaung.vercel.app/"
            variant="desktop"
            glowColor="cyan"
            delay={0.4}
        />
    );
}
