"use client";
import { motion } from "framer-motion";
import { title, text } from "@/app/helpers/homeVars";
import { fadeIn } from "@/app/helpers/motionVariants";
const TagLine = () => {
    return (
        <>
            {" "}
            <div>
                <motion.div
                    className="text-center flex flex-col gap-5 max-w-4xl mx-auto text-white"
                    style={{ fontFamily: "var(--font-quantico)" }}
                    {...fadeIn}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        {title}
                    </h1>
                </motion.div>
                <motion.div
                    className="flex flex-col justify-center"
                    {...fadeIn}
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
