"use client";
import { motion } from "framer-motion";
const TagLine = ({ title, text }: { title: string; text: string }) => {
    return (
        <>
            {" "}
            <div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                    // once:false = opnieuw afspelen bij scroll
                    // amount:0.5 = animatie start als 50% zichtbaar is
                    className="text-center flex flex-col gap-5 max-w-4xl mx-auto text-white"
                    style={{ fontFamily: "var(--font-quantico)" }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        {title}
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                    // once:false = opnieuw afspelen bij scroll
                    // amount:0.5 = animatie start als 50% zichtbaar is
                    className="flex flex-col justify-center"
                >
                    <p className="max-w-2xl mx-auto text-center text-lg sm:text-xl text-gray-300">
                        {text}
                    </p>
                </motion.div>
            </div>
        </>
    );
};
export default TagLine;
