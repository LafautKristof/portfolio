"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/helpers/motionVariants";
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
                        <Image
                            src="/github-white-icon.png"
                            alt="github"
                            width={50}
                            height={50}
                        />
                    </Link>
                ))}
            </div>
        </motion.div>
    );
};
export default GithubProject;
