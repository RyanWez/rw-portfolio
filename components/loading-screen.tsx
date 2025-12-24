"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for page to be fully loaded
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Minimum 1.5s loading time for smooth UX

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] w-full h-full min-h-screen"
                >
                    {/* Gradient background for loading screen - responsive */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-cyan-500/20 blur-[80px] md:blur-[100px]" />
                        <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-purple-500/15 blur-[60px] md:blur-[80px]" />
                    </div>

                    {/* Loading dots - responsive sizing */}
                    <div className="flex items-center gap-1.5 md:gap-2 relative z-10">
                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={index}
                                className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-cyan-400"
                                animate={{
                                    y: [0, -10, 0],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay: index * 0.15,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
