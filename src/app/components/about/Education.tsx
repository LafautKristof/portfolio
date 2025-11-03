"use client";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col  justify-start"
        >
            <h3
                className="text-2xl font-bold mb-4 text-[var(--accent-color)]"
                style={{ fontFamily: "var(--font-quantico)" }}
            >
                Education
            </h3>
            <Separator className="mb-2 bg-[var(--accent-color)]" />
            <div className="gap-4">
                <div className="text-white flex items-center justify-between mb-4">
                    <div
                        className="text-lg flex flex-col"
                        style={{ fontFamily: "var(--font-quantico)" }}
                    >
                        <p className="font-bold">Syntra AB</p>{" "}
                        <p>Full Stack Developer</p>
                    </div>
                    <p>june 2025</p>
                </div>
                <Separator className=" w-16 h-[10px] mb-2 bg-[var(--accent-color)]" />
                <div className="text-white flex items-center justify-between mb-4">
                    <div
                        className="text-lg flex flex-col"
                        style={{ fontFamily: "var(--font-quantico)" }}
                    >
                        <p className="font-bold">CVO Focus</p>{" "}
                        <p>ICT-Programeren</p>
                    </div>
                    <p>june 2024</p>
                </div>
                <Separator className="bg-[var(--accent-color)] w-16 h-[10px] mb-2" />
            </div>
        </motion.div>
    );
};
export default Education;
