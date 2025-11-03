"use client";
import { fadeIn } from "@/app/helpers/motionVariants";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";
const Picture = () => {
    return (
        <>
            <motion.div
                className="relative flex flex-col justify-center gap-4 items-center"
                animate={{ y: [0, -10, 0], scale: [1, 1.02, 1] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="absolute inset-0 rounded-full blur-2xl bg-cyan-400/20 scale-110"></div>
                <Image
                    src="/kristof.jpg"
                    alt="Picture of Kristof Lafaut"
                    width={200}
                    height={200}
                    className="rounded-full relative z-10 shadow-xl"
                />
            </motion.div>
            <Separator className="mb-2 relative z-10" />
        </>
    );
};
export default Picture;
