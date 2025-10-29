import { easeOut } from "framer-motion";
export const fadeIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: easeOut },
    viewport: { once: true, amount: 0.5 },
};

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

export const fadeUpItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};
