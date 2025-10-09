"use client";
import { motion } from "framer-motion";
import { info } from "@/app/helpers/contactVars";
const InfoContact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col justify-center min"
        >
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
