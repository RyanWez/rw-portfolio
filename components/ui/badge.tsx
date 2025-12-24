import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "cyan" | "purple" | "success";
    className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full",
                "border backdrop-blur-sm",
                {
                    "bg-white/5 border-white/10 text-white/70": variant === "default",
                    "bg-cyan-500/10 border-cyan-500/30 text-cyan-400": variant === "cyan",
                    "bg-purple-500/10 border-purple-500/30 text-purple-400": variant === "purple",
                    "bg-emerald-500/10 border-emerald-500/30 text-emerald-400": variant === "success",
                },
                className
            )}
        >
            {children}
        </span>
    );
}
