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
            <Link href={project} target="_blank" rel="noopener noreferrer">
                <TbWorldWww size={50} />
            </Link>
        </motion.div>
    );
};
export default LinkProject;
