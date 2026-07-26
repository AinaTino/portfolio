// components/ProjectsSection.tsx
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    repoUrl?: string;
    liveUrl?: string;
}

interface ProjectsSectionProps {
    projects: Project[];
    className?: string;
}

function GithubIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577
            0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757
            -1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997
            .108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.235-3.22
            -.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005
            2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84
            1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.478 5.92.43.37.815 1.096.815 2.21
            0 1.595-.015 2.88-.015 3.27 0 .32.192.694.8.576C20.565 21.795 24 17.298 24 12
            c0-6.63-5.373-12-12-12z" />
        </svg>
    );
}

function ProjectsSection({ projects, className = "" }: ProjectsSectionProps) {
    return (
        <section className={`w-full py-16 px-6 md:px-16 ${className}`}>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold text-amber-950 relative inline-block mb-10"
            >
                Projects
                <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-amber-700" />
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((proj, i) => (
                    <motion.div
                        key={proj.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="bg-white border border-amber-700/40 shadow-xl overflow-hidden flex flex-col"
                    >
                        <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-5 flex flex-col flex-1 space-y-3">
                            <h3 className="font-serif font-semibold text-xl text-amber-950">
                                {proj.title}
                            </h3>
                            <p className="font-serif text-sm text-stone-600 leading-relaxed flex-1">
                                {proj.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-1">
                                {proj.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-serif px-2 py-1 bg-stone-200/60 text-amber-900 border border-amber-700/50"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-2">

                                {proj.repoUrl && (
                                    <a
                                    href={proj.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm font-serif text-amber-950 hover:text-amber-700 transition-colors"
                                    >
                                    <GithubIcon />
                                    Code
                                    </a>
                                    )}
                                {proj.liveUrl && (
                                    <a
                                    href={proj.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm font-serif text-amber-950 hover:text-amber-700 transition-colors"
                                    >
                                    <ExternalLink className="w-4 h-4" />
                                    Live
                                    </a>
                                    )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <motion.a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 font-serif text-lg bg-amber-950 text-amber-50 flex items-center gap-2"
                >
                    View more
                    <GithubIcon />
                </motion.a>
            </div>

        </section>
    );
}

export default ProjectsSection;