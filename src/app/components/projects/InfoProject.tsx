"use client";
import { motion } from "framer-motion";
const InfoProject = ({ project }: { project: string }) => {
    return (
        <>
            <motion.p
                className="text-white flex gap-2 items-center justify-center"
                style={{ fontFamily: "var(--font-quantico)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                {project}
            </motion.p>
        </>
    );
};
export default InfoProject;
