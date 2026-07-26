// components/SkillsBanner.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SkillsBannerProps {
    skills: string[];
    intervalMs?: number;   // vitesse entre chaque "tir" -> AUGMENTE cette valeur si c'est trop rapide
    maxVisible?: number;   // nombre de skills affichés avant que le FIFO commence
    className?: string;
}

let uid = 0;

function SkillsBanner({
                          skills,
                          intervalMs = 1400,
                          maxVisible = 6,
                          className = "",
                      }: SkillsBannerProps) {
    const [visible, setVisible] = useState<{ id: number; text: string }[]>([]);
    const indexRef = useRef(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisible((prev) => {
                const next = skills[indexRef.current % skills.length];
                indexRef.current += 1;
                const updated = [...prev, { id: uid++, text: next }];
                // FIFO : dès qu'on dépasse maxVisible, on vire le plus vieux (le premier)
                return updated.length > maxVisible
                    ? updated.slice(updated.length - maxVisible)
                    : updated;
            });
        }, intervalMs);

        return () => clearInterval(timer);
    }, [skills, intervalMs, maxVisible]);

    return (
        <div
            className={`w-full overflow-hidden border-t border-b border-amber-700 bg-stone-200/30 py-4 ${className}`}
        >
            <div className="flex items-center justify-center flex-nowrap">
                <AnimatePresence mode="popLayout" initial={false}>
                    {visible.map((skill, i) => (
                        <motion.div
                            key={skill.id}
                            layout
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -60 }}
                            transition={{ type: "spring", stiffness: 260, damping: 26 }}
                            className="flex items-center gap-3"
                        >
                            {i !== 0 && (
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-700 mx-3" />
                            )}
                            <span className="font-serif text-lg text-amber-950 whitespace-nowrap">
                                {skill.text}
                            </span>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default SkillsBanner;