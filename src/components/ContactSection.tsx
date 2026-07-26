// components/ContactSection.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactSectionProps {
    email: string;
    linkedinUrl?: string;
    githubUrl?: string;
    className?: string;
}

function GithubIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.478 5.92.43.37.815 1.096.815 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.192.694.8.576C20.565 21.795 24 17.298 24 12c0-6.63-5.373-12-12-12z" />
        </svg>
    );
}

function LinkedinIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

// Récupère ces 3 valeurs depuis ton dashboard EmailJS
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactSection({ email, linkedinUrl, githubUrl, className = "" }: ContactSectionProps) {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
                EMAILJS_PUBLIC_KEY
            );
            setStatus("sent");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
        }
    };

    const buttonLabel = {
        idle: "Send message",
        sending: "Sending...",
        sent: "Message sent ✓",
        error: "Failed — try again",
    }[status];

    return (
        <section className={`w-full py-16 px-6 md:px-16 ${className}`}>
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-semibold text-amber-950 relative inline-block mb-4"
                >
                    Contact
                    <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-amber-700" />
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-serif text-stone-600 mb-10"
                >
                    Got a project in mind, or just want to say hi? Drop a message below.
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <div className="flex flex-col md:flex-row gap-5">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="flex-1 px-4 py-3 font-serif bg-white border border-amber-700/50 text-amber-950 placeholder:text-stone-400 focus:outline-none focus:border-amber-800"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="flex-1 px-4 py-3 font-serif bg-white border border-amber-700/50 text-amber-950 placeholder:text-stone-400 focus:outline-none focus:border-amber-800"
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder="Your message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 font-serif bg-white border border-amber-700/50 text-amber-950 placeholder:text-stone-400 focus:outline-none focus:border-amber-800 resize-none"
                    />

                    <motion.button
                        type="submit"
                        disabled={status === "sending"}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-6 py-3 font-serif text-lg bg-amber-950 text-amber-50 disabled:opacity-60"
                    >
                        {buttonLabel}
                    </motion.button>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-10 pt-8 border-t border-amber-700/30"
                >
                    <div className="flex justify-center gap-8">
                        <motion.a
                            href={`mailto:${email}`}
                            whileHover={{ scale: 1.15, y: -2 }}
                            className="text-amber-950 hover:text-amber-700 transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-6 h-6" />
                        </motion.a>

                        {linkedinUrl && (
                            <motion.a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15, y: -2 }}
                                className="text-amber-950 hover:text-amber-700 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <LinkedinIcon />
                            </motion.a>
                        )}

                        {githubUrl && (
                            <motion.a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15, y: -2 }}
                                className="text-amber-950 hover:text-amber-700 transition-colors"
                                aria-label="GitHub"
                            >
                                <GithubIcon />
                            </motion.a>
                        )}
                    </div>

                    <p className="text-center font-serif text-xs text-stone-500 mt-6">
                        © {new Date().getFullYear()} AinaTino
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default ContactSection;