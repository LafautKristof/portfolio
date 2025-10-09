"use client";

import { experience } from "@/app/helpers/aboutVars";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
const Experience = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
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
                viewport={{ once: true, amount: 0.5 }}
                // once:false = opnieuw afspelen bij scroll
                // amount:0.5 = animatie start als 50% zichtbaar is
                className="flex flex-col"
            >
                <p
                    className="text-white"
                    style={{ fontFamily: "var(--font-quantico)" }}
                >
                    {experience}
                </p>
            </motion.div>
        </>
    );
};
export default Experience;
