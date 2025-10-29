// components/shared/TechBadge.tsx
"use client";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import { fadeUpItem } from "@/app/helpers/motionVariants";
import type { Tech } from "@/types/tech";

export default function TechBadge({ tech }: { tech: Tech }) {
    return (
        <motion.div
            variants={fadeUpItem}
            whileHover={{
                scale: 1.1,
                rotate: Math.random() < 0.5 ? -3 : 3,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-500 bg-gray-800/40 text-white shadow-sm backdrop-blur-sm"
        >
            <StackIcon
                name={tech.icon}
                variant={tech.variant}
                className="w-6 h-6"
            />
            <span className="text-sm font-medium">{tech.name}</span>
        </motion.div>
    );
}
