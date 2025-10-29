"use client";
import { techStack } from "@/app/helpers/techstack";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { staggerContainer } from "@/app/helpers/motionVariants";
import TechBadge from "../TechBadge";

const TechStackProject = ({ project }: { project: string[] }) => {
    if (!Array.isArray(project)) {
        console.warn(
            "⚠️ TechStackProject: expected an array but got=>",
            project
        );
        return null;
    }
    const filteredTechs = project
        .map((name) => techStack.find((t) => t.name === name))
        .filter(Boolean);
    return (
        <>
            <motion.div
                className="flex flex-wrap gap-3 mb-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {filteredTechs.map((tech) => (
                    <TechBadge key={tech!.name} tech={tech!} />
                ))}
            </motion.div>
            <Separator className="mb-2" />
        </>
    );
};

export default TechStackProject;
