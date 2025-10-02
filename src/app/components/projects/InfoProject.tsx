"use client";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
const InfoProject = () => {
    return (
        <>
            <motion.p
                className="text-white flex gap-2 items-center justify-center"
                style={{ fontFamily: "var(--font-quantico)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
            >
                I built this Pokémon app to practice full-stack development and
                create something fun and interactive. It features a complete
                Pokédex with search, type relations, and the ability to “catch”
                and manage your own collection. The project let me work with
                database design, infinite scrolling, and responsive UI combining
                playful content with real technical challenges.
            </motion.p>
        </>
    );
};
export default InfoProject;
