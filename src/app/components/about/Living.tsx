"use client";
import { living } from "@/app/helpers/aboutVars";
import { fadeIn } from "@/app/helpers/motionVariants";
import { motion } from "framer-motion";
import { LiaMapMarkerSolid } from "react-icons/lia";

const Living = () => {
    return (
        <motion.div className="flex gap-2" {...fadeIn}>
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
