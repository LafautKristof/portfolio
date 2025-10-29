"use client";

import { fadeIn } from "@/app/helpers/motionVariants";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
const TitleProject = ({ project }: { project: string }) => {
    return (
        <>
            <motion.h1
                className="text-2xl font-bold mb-4 text-white"
                style={{ fontFamily: "var(--font-quantico)" }}
                {...fadeIn}
            >
                {project}
            </motion.h1>
            <Separator className="mb-2" />
        </>
    );
};
export default TitleProject;
