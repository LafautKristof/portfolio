"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PreviewProject({
    src,
    alt,
    link,
}: {
    src: string;
    alt: string;
    link: string;
}) {
    return (
        <Link href={link} target="_blank" rel="noopener noreferrer">
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full h-80 rounded-xl overflow-hidden border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-clip-border"
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center text-white font-semibold transition-opacity duration-500">
                    {alt}
                </div>
            </motion.div>
        </Link>
    );
}
