"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/helpers/motionVariants";
const LinkProject = ({ project }: { project: string }) => {
    return (
        <motion.div {...fadeIn}>
            <Link href={project} target="_blank" rel="noopener noreferrer">
                <Image
                    src="/www.png"
                    alt="Open GitHub repository for this project"
                    width={50}
                    height={50}
                />
            </Link>
        </motion.div>
    );
};
export default LinkProject;
