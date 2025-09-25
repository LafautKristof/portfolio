"use client";
import { motion } from "framer-motion";
import { LiaMapMarkerSolid } from "react-icons/lia";

const Living = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            // once:false = opnieuw afspelen bij scroll
            // amount:0.5 = animatie start als 50% zichtbaar is
            className="flex gap-2"
        >
            {" "}
            <p
                className="text-white flex gap-2 items-center justify-center"
                style={{ fontFamily: "var(--font-quantico)" }}
            >
                <LiaMapMarkerSolid /> Grembergen, Belgium
            </p>
        </motion.div>
    );
};
export default Living;
