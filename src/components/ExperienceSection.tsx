// components/ExperienceSection.tsx
import { motion } from "framer-motion";
import { useRef } from "react";

interface Experience {
    number: string;       // "01", "02"...
    title: string;
    description: string;
    image: string;
}

interface ExperienceSectionProps {
    experiences: Experience[];
    className?: string;
}

function ExperienceSection({ experiences, className = "" }: ExperienceSectionProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section className={`w-full py-16 px-6 md:px-16 ${className}`}>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold text-amber-950 relative inline-block mb-10"
            >
                Experience
                <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-amber-700" />
            </motion.h2>

            <div
                ref={scrollRef}
                className="flex gap-10 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            >
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        whileHover={{ scale: 1.03 }}
                        className="relative w-64 flex-shrink-0 snap-start"
                    >
                        {/* offset card behind, same idea as hero pic */}
                        <div className="absolute top-4 left-4 w-full h-full rotate-2 bg-stone-200" />

                        <div className="relative bg-white shadow-2xl overflow-hidden border border-amber-700/40">
                            <div className="relative">
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-40 object-cover"
                                />
                                {/* number badge, game "level" style */}
                                <span className="absolute top-2 left-2 flex items-center justify-center w-9 h-9 bg-amber-950 text-amber-50 font-serif font-semibold text-sm border border-amber-700">
                                    {exp.number}
                                </span>
                            </div>

                            <div className="p-4 space-y-2">
                                <h3 className="font-serif font-semibold text-lg text-amber-950">
                                    {exp.title}
                                </h3>
                                <p className="font-serif text-sm text-stone-600 leading-snug">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default ExperienceSection;