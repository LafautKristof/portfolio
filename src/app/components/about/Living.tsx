"use client";
import { living } from "@/app/helpers/aboutVars";
import { motion } from "framer-motion";
import { LiaMapMarkerSolid } from "react-icons/lia";

const Living = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex gap-2"
        >
            {" "}
            <p
                className="text-white flex gap-2 items-center justify-center"
                style={{ fontFamily: "var(--font-quantico)" }}
            >
                <LiaMapMarkerSolid /> {living}
            </p>
        </motion.div>
    );
};
export default Living;
