"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const GithubProject = ({ link }: { link: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
        >
            <Link href={link} target="_blank" rel="noopener noreferrer">
                <Image
                    src="/github-white-icon.png"
                    alt="github"
                    width={50}
                    height={50}
                />
            </Link>
        </motion.div>
    );
};
export default GithubProject;
