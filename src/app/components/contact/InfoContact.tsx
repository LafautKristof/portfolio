"use client";
import { motion } from "framer-motion";
const InfoContact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            // once:false = opnieuw afspelen bij scroll
            // amount:0.5 = animatie start als 50% zichtbaar is
            className="flex flex-col justify-center min"
        >
            <p
                className="text-white text-center "
                style={{ fontFamily: "var(--font-quantico)" }}
            >
                Whether you’d like to chat, discuss opportunities, or schedule a
                job interview — I’m always happy to connect.
            </p>
        </motion.div>
    );
};
export default InfoContact;
