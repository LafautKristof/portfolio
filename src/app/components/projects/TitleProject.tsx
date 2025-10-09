"use client";

import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
const TitleProject = ({ project }: { project: string }) => {
    return (
        <>
            <motion.h1
                className="text-2xl font-bold mb-4 text-white"
                style={{ fontFamily: "var(--font-quantico)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
            >
                {project}
            </motion.h1>
            <Separator className="mb-2" />
        </>
    );
};
export default TitleProject;
