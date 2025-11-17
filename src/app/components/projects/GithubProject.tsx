"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/helpers/motionVariants";
import { FaGithub } from "react-icons/fa";
const GithubProject = ({ project }: { project: string[] }) => {
    if (!Array.isArray(project)) {
        console.warn("⚠️ github: expected an array but got=>", project);
        return null;
    }
    return (
        <motion.div {...fadeIn}>
            <div className="flex gap-4">
                {project.map((project) => (
                    <Link
                        href={project}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={project}
                    >
                        <motion.div
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="text-white hover:text-[var(--accent-color)]"
                        >
                            <FaGithub size={50} />
                        </motion.div>
                    </Link>
                ))}
            </div>
        </motion.div>
    );
};
export default GithubProject;
