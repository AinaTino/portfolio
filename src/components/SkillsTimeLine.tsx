// components/SkillsTimeline.tsx
import {useLayoutEffect, useRef, useState} from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useSpring,
    useTransform,
    useMotionValueEvent,
} from "framer-motion";

interface SkillCategory {
    title: string;
    description: string;
    skills: string[];
}

interface SkillsTimelineProps {
    categories: SkillCategory[],
    className?: string,
    id?: string
}

function SkillsTimeline({categories, className = "", id}: SkillsTimelineProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [dotYs, setDotYs] = useState<number[]>([]);
    const [trackHeight, setTrackHeight] = useState(0);
    const [firedDots, setFiredDots] = useState<boolean[]>([]);

    useLayoutEffect(() => {
        const measure = () => {
            if (!containerRef.current) return;
            const containerTop = containerRef.current.getBoundingClientRect().top;
            const ys = cardRefs.current.map((el) => {
                if (!el) return 0;
                const rect = el.getBoundingClientRect();
                return rect.top - containerTop + rect.height / 2;
            });
            setDotYs(ys);
            setTrackHeight(ys.length ? ys[ys.length - 1] : 0);
            setFiredDots(new Array(ys.length).fill(false));
        };

        measure();
        const ro = new ResizeObserver(measure);
        if (containerRef.current) ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, [categories]);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 22,
        mass: 0.6,
    });

    const fillHeight = useTransform(smoothProgress, [0, 1], [0, trackHeight]);

    useMotionValueEvent(fillHeight, "change", (latest) => {
        setFiredDots(dotYs.map((y) => latest >= y - 2));
    });

    return (
        <section id={id} className={`w-full py-16 px-6 md:px-16 ${className}`}>
            <motion.h2
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                className="text-3xl font-semibold text-amber-950 relative inline-block mb-16"
            >
                Skills
                <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-amber-700"/>
            </motion.h2>

            <div ref={containerRef} className="relative max-w-4xl mx-auto">
                <div
                    className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px] bg-stone-300"
                    style={{height: trackHeight}}
                />

                <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px] bg-gradient-to-b from-amber-500 to-amber-800 rounded-full"
                    style={{height: fillHeight}}
                />

                {dotYs.map((y, i) => {
                    // description is on the LEFT when cardOnRight is true, on the RIGHT otherwise
                    const cardOnRight = i % 2 !== 0;
                    const descriptionOnLeft = cardOnRight;

                    return (
                        <div
                            key={i}
                            className="absolute"
                            style={{top: y, left: "50%"}}
                        >
                            {/* Le point — centrage unique, propre */}
                            <motion.div
                                className="w-3 h-3 rounded-full border-2 relative z-10"
                                style={{transform: "translate(-50%, -50%)"}}
                                animate={{
                                    backgroundColor: firedDots[i] ? "#78350f" : "#fff",
                                    borderColor: "#78350f",
                                }}
                                transition={{duration: 0.3}}
                            />

                            {/* Tirets — uniquement du côté du texte descriptif */}
                            {descriptionOnLeft ? (
                                <div className="absolute top-0 right-1/2 flex gap-1 -translate-y-1/2 pr-3">
                                    {[0, 1, 2].map((d) => (
                                        <motion.span
                                            key={d}
                                            className="block w-2 h-[2px] bg-amber-700"
                                            initial={{opacity: 0, x: 6}}
                                            animate={
                                                firedDots[i]
                                                    ? {opacity: 1, x: 0}
                                                    : {opacity: 0, x: 6}
                                            }
                                            transition={{duration: 0.25, delay: d * 0.06}}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="absolute top-0 left-1/2 flex gap-1 -translate-y-1/2 pl-3">
                                    {[0, 1, 2].map((d) => (
                                        <motion.span
                                            key={d}
                                            className="block w-2 h-[2px] bg-amber-700"
                                            initial={{opacity: 0, x: -6}}
                                            animate={
                                                firedDots[i]
                                                    ? {opacity: 1, x: 0}
                                                    : {opacity: 0, x: -6}
                                            }
                                            transition={{duration: 0.25, delay: d * 0.06}}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}

                <div className="flex flex-col gap-16">
                    {categories.map((cat, i) => {
                        const cardOnRight = i % 2 !== 0;
                        const isActive = firedDots[i] ?? false;

                        return (
                            <div
                                key={cat.title}
                                className="flex items-center justify-between gap-6"
                            >
                                <div className="w-[42%] flex justify-end">
                                    {cardOnRight ? (
                                        <DescriptionBlock
                                            text={cat.description}
                                            align="right"
                                            active={isActive}
                                        />
                                    ) : (
                                        <StackCard
                                            innerRef={(el) => {
                                                cardRefs.current[i] = el;
                                            }}
                                            title={cat.title}
                                            skills={cat.skills}
                                        />
                                    )}
                                </div>

                                <div className="w-10 flex-shrink-0"/>

                                <div className="w-[42%] flex justify-start">
                                    {cardOnRight ? (
                                        <StackCard
                                            innerRef={(el) => {
                                                cardRefs.current[i] = el;
                                            }}
                                            title={cat.title}
                                            skills={cat.skills}
                                        />
                                    ) : (
                                        <DescriptionBlock
                                            text={cat.description}
                                            align="left"
                                            active={isActive}
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function StackCard({
                       innerRef,
                       title,
                       skills,
                   }: {
    innerRef: (el: HTMLDivElement | null) => void;
    title: string;
    skills: string[];
}) {
    return (
        <motion.div
            ref={innerRef}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-100px"}}
            transition={{duration: 0.4}}
            className="w-full bg-white border border-amber-700/40 shadow-lg p-5"
        >
            <h3 className="font-serif font-semibold text-lg text-amber-950 mb-3">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="text-xs font-serif px-2 py-1 bg-stone-200/60 text-amber-900 border border-amber-700/50"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

function DescriptionBlock({
                              text,
                              align,
                              active,
                          }: {
    text: string;
    align: "left" | "right";
    active: boolean;
}) {
    return (
        <div
            className="w-full min-h-[3rem] flex items-center"
            style={{justifyContent: align === "right" ? "flex-end" : "flex-start"}}
        >
            <AnimatePresence mode="wait">
                {active && (
                    <motion.p
                        key="desc"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 10}}
                        transition={{duration: 0.3}}
                        className={`font-serif text-sm text-stone-600 leading-relaxed ${
                            align === "right" ? "text-right" : "text-left"
                        }`}
                    >
                        {text}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}

export default SkillsTimeline;