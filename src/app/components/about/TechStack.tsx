"use client";
import { motion } from "framer-motion";
import { techStack } from "@/app/helpers/techstack";
import { Separator } from "@/components/ui/separator";
import { fadeIn, staggerContainer } from "@/app/helpers/motionVariants";
import TechBadge from "../TechBadge";

const TechStack = () => {
    return (
        <section className="flex flex-col gap-6">
            <motion.div {...fadeIn}>
                <h3
                    className="text-2xl font-bold text-[var(--accent-color)] mb-4"
                    style={{ fontFamily: "var(--font-quantico)" }}
                >
                    Tech Stack
                </h3>
                <Separator className=" bg-[var(--accent-color)]" />
            </motion.div>
            -
            <motion.div
                className="flex flex-wrap justify-center gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {techStack.map((tech) => (
                    <TechBadge key={tech.name} tech={tech} />
                ))}
            </motion.div>
        </section>
    );
};

export default TechStack;
