// components/Btn.tsx
import { motion } from "framer-motion";

interface props_btn {
    text: string;
    className: string;
    href?: string;       // pour un lien (ex: resume PDF)
    onClick?: () => void; // pour une action (ex: scroll)
}

function Btn(props: props_btn) {
    if (props.href) {
        return (
            <motion.a
                href={props.href}
                target={props.href.startsWith("http") ? "_blank" : undefined}
                rel={props.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
                className={props.className}
            >
                {props.text}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={props.onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            className={props.className}
        >
            {props.text}
        </motion.button>
    );
}

export default Btn;