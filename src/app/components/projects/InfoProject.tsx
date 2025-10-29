"use client";
import { fadeIn } from "@/app/helpers/motionVariants";
import { motion } from "framer-motion";
const InfoProject = ({ project }: { project: string }) => {
    return (
        <>
            <motion.p
                className="text-white flex gap-2 items-center justify-center"
                style={{ fontFamily: "var(--font-quantico)" }}
                {...fadeIn}
            >
                {project}
            </motion.p>
        </>
    );
};
export default InfoProject;
