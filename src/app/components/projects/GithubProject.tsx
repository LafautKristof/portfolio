"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const GithubProject = ({ project }: { project: string[] }) => {
    if (!Array.isArray(project)) {
        console.warn("⚠️ github: expected an array but got=>", project);
        return null;
    }
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
        >
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
