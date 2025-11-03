"use client";

import { experience } from "@/app/helpers/aboutVars";
import { fadeIn } from "@/app/helpers/motionVariants";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
const Experience = () => {
    return (
        <>
            <motion.div className="flex flex-col" {...fadeIn}>
                <h3
                    className="text-2xl font-bold   mb-4 text-[var(--accent-color)]"
                    style={{ fontFamily: "var(--font-quantico)" }}
                >
                    Experience
                </h3>
                <Separator className="mb-2 bg-[var(--accent-color)]" />
            </motion.div>
            <motion.div className="flex flex-col" {...fadeIn}>
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
