"use client";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

import { techStack } from "@/app/helpers/techstack";
import { Separator } from "@/components/ui/separator";
const TechStack = () => {
    return (
        <section className="flex flex-col  gap-6">
            {/* Titel animatie */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <h3
                    className="text-2xl font-bold text-white mb-4"
                    style={{ fontFamily: "var(--font-quantico)" }}
                >
                    Tech Stack
                </h3>
                <Separator className="mb-2" />
            </motion.div>

            {/* Icons animatie */}
            <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.1 },
                    },
                }}
            >
                {techStack.map((tech) => (
                    <motion.div
                        key={tech.name}
                        className="inline-flex items-center gap-2 px-3 py-1 border text-white rounded-full shadow-sm"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{
                            scale: 1.1, // vergroot een beetje
                            rotate: Math.random() < 0.5 ? -3 : 3, // kantelt een beetje
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <StackIcon
                            name={tech.icon}
                            {...(tech.variant ? { variant: tech.variant } : {})}
                            className="w-6 h-6"
                        />
                        <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
export default TechStack;
