"use client";
import { motion } from "framer-motion";
import { info } from "@/app/helpers/contactVars";
import { fadeIn } from "@/app/helpers/motionVariants";
const InfoContact = () => {
    return (
        <motion.div className="flex flex-col justify-center min" {...fadeIn}>
            <p
                className="text-white text-center "
                style={{ fontFamily: "var(--font-quantico)" }}
            >
                {info}
            </p>
        </motion.div>
    );
};
export default InfoContact;
