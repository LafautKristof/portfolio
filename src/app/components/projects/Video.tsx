"use client";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
const Video = () => {
    return (
        <>
            <motion.div
                className="relative w-full h-80 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-[-42px] left-0 w-full h-auto"
                >
                    <source src="/projectPokemon.mp4" type="video/mp4" />
                </video>
            </motion.div>
        </>
    );
};

export default Video;
