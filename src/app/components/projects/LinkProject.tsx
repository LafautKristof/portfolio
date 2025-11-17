"use client";
import { TbWorldWww } from "react-icons/tb";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/helpers/motionVariants";
const LinkProject = ({ project }: { project: string }) => {
    return (
        <motion.div
            {...fadeIn}
            className="hover:text-[var(--accent-color)] text-white"
        >
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
                    <TbWorldWww size={50} />
                </motion.div>
            </Link>
        </motion.div>
    );
};
export default LinkProject;
