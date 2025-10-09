"use client";

import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { infoAbout } from "@/app/helpers/aboutVars";
const InfoAbout = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col justify-center"
        >
            <p
                className="text-white text-center "
                style={{ fontFamily: "var(--font-quantico)" }}
            >
                {infoAbout}
            </p>
            <Separator className="my-4" />
        </motion.div>
    );
};
export default InfoAbout;
