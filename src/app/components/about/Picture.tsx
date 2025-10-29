"use client";
import { fadeIn } from "@/app/helpers/motionVariants";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";
const Picture = () => {
    return (
        <>
            <motion.div
                className="flex flex-col justify-center gap-4 items-center"
                {...fadeIn}
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
