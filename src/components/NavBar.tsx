// components/Navbar.tsx
import { motion } from "framer-motion";

interface NavLink {
    label: string;
    href: string;
}

interface NavbarProps {
    links: NavLink[];
    className?: string;
}

function Navbar({ links, className = "" }: NavbarProps) {
    return (
        <nav
            className={`fixed top-4 left-4 right-4 z-[9999] flex items-center justify-between md:justify-start mix-blend-difference ${className}`}
        >
            <span className="font-serif font-semibold text-xl text-white tracking-wide">
                AinaTino
            </span>

            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4 text-white">
                {links.map((link, i) => (
                    <div key={link.href} className="flex items-center gap-4">
                        {i !== 0 && <span className="select-none">·</span>}
                        <motion.a
                            href={link.href}
                            whileHover={{ scale: 1.1 }}
                            className="font-serif text-sm tracking-wide"
                        >
                            {link.label}
                        </motion.a>
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;