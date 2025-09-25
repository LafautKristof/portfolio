"use client";

import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
const Experience = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
                // once:false = opnieuw afspelen bij scroll
                // amount:0.5 = animatie start als 50% zichtbaar is
                className="flex flex-col"
            >
                <h3
                    className="text-2xl font-bold  text-white mb-4"
                    style={{ fontFamily: "var(--font-quantico)" }}
                >
                    Experience
                </h3>
                <Separator className="mb-2" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
                // once:false = opnieuw afspelen bij scroll
                // amount:0.5 = animatie start als 50% zichtbaar is
                className="flex flex-col"
            >
                <p
                    className="text-white"
                    style={{ fontFamily: "var(--font-quantico)" }}
                >
                    While I am at the beginning of my professional journey, I
                    have gained hands-on experience by creating real-world
                    projects at home. Through these projects I learned how to
                    translate ideas into scalable applications, work with APIs,
                    and deliver polished user experiences. I am eager to apply
                    these skills in a professional environment and continue
                    learning.
                </p>
            </motion.div>
        </>
    );
};
export default Experience;
