"use client";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";
const Picture = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col justify-center gap-4 items-center"
            >
                <Image
                    src="/kristof.jpg"
                    alt="Picture of Kristof Lafaut"
                    width={200}
                    height={200}
                    className="rounded-full"
                />
                <Separator className="mb-2" />
            </motion.div>
        </>
    );
};
export default Picture;
