"use client";

import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { infoAbout } from "@/app/helpers/aboutVars";
import { fadeIn } from "@/app/helpers/motionVariants";
const InfoAbout = () => {
    return (
        <motion.div className="flex flex-col justify-center" {...fadeIn}>
            <p
                className="text-white text-center "
                style={{ fontFamily: "var(--font-quantico)" }}
            >
                {infoAbout}
            </p>
            <Separator className="my-4 bg-[var(--accent-color)]" />
        </motion.div>
    );
};
export default InfoAbout;
