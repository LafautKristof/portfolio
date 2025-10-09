"use client";
import { motion } from "framer-motion";
import { eager } from "@/app/helpers/homeVars";
const Eager = () => {
    return (
        <div
            className="inline-flex items-center px-6 py-3 text-white border rounded-full shadow-md bg-animated"
            style={{ fontFamily: "var(--font-quantico)" }}
        >
            <p className="text-lg">{eager}</p>
        </div>
    );
};
export default Eager;
