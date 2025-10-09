"use client";
import { motion } from "framer-motion";

const Title = ({ title }: { title: string }) => {
    const letters = title.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // tijd tussen letters
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.h1
            className="text-4xl font-bold animate-gradient flex flex-wrap justify-center text-white"
            style={{ fontFamily: "var(--font-quantico)" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }} // start alleen 1x als zichtbaar
        >
            {letters.map((char, index) => (
                <motion.span key={index} variants={child}>
                    {char === " " ? "\u00A0" : char} {/* spatie behouden */}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default Title;
