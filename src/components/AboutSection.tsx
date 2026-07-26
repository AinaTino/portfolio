// components/AboutSection.tsx
import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";

interface AboutSectionProps {
    bio: string;
    location: string;
    education: string;
    className?: string;
}

function AboutSection({ bio, location, education, className = "" }: AboutSectionProps) {
    return (
        <section className={`w-full py-16 px-6 md:px-16 ${className}`}>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-start">

                {/* Title column, game-menu-section style */}
                <div className="md:w-1/3">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-semibold text-amber-950 relative inline-block"
                    >
                        About
                        <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-amber-700" />
                    </motion.h2>
                </div>

                {/* Content column */}
                <div className="md:w-2/3 space-y-6">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-serif text-lg text-stone-700 leading-relaxed"
                    >
                        {bio}
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* "Stat" card: location */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center gap-3 px-4 py-3 bg-stone-200/40 border border-amber-700/60 rounded-sm"
                        >
                            <MapPin className="w-5 h-5 text-amber-800" />
                            <div>
                                <p className="text-xs uppercase tracking-wide text-amber-800/70 font-serif">
                                    Location
                                </p>
                                <p className="font-serif text-amber-950">{location}</p>
                            </div>
                        </motion.div>

                        {/* "Stat" card: education */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center gap-3 px-4 py-3 bg-stone-200/40 border border-amber-700/60 rounded-sm"
                        >
                            <GraduationCap className="w-5 h-5 text-amber-800" />
                            <div>
                                <p className="text-xs uppercase tracking-wide text-amber-800/70 font-serif">
                                    Education
                                </p>
                                <p className="font-serif text-amber-950">{education}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;