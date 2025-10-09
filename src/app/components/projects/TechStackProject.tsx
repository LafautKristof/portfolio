"use client";
import { techStack } from "@/app/helpers/techstack";
import StackIcon from "tech-stack-icons";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const TechStackProject = ({ project }: { project: string[] }) => {
    if (!Array.isArray(project)) {
        console.warn(
            "⚠️ TechStackProject: expected an array but got=>",
            project
        );
        return null;
    }
    return (
        <>
            <motion.div
                className="flex flex-wrap gap-3 mb-4"
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
                {project &&
                    project.map((name) => {
                        const tech = techStack.find((t) => t.name === name);
                        if (!tech) return null;

                        return (
                            <motion.div
                                key={tech.name}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-500 bg-gray-800/40 text-white shadow-sm backdrop-blur-sm"
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
                                    {...(tech.variant
                                        ? { variant: tech.variant }
                                        : {})}
                                    className="w-6 h-6"
                                />
                                <span className="text-sm font-medium">
                                    {tech.name}
                                </span>
                            </motion.div>
                        );
                    })}
            </motion.div>
            <Separator className="mb-2" />
        </>
    );
};

export default TechStackProject;
