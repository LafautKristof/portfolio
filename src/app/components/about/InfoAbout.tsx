"use client";

import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
const InfoAbout = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            // once:false = opnieuw afspelen bij scroll
            // amount:0.5 = animatie start als 50% zichtbaar is
            className="flex flex-col justify-center"
        >
            <p
                className="text-white text-center "
                style={{ fontFamily: "var(--font-quantico)" }}
            >
                I’m a passionate Full-Stack Developer with a strong drive to
                create applications that combine performance, scalability, and a
                smooth user experience. I thrive on transforming complex
                challenges into clear, maintainable solutions and believe that
                every project is an opportunity to grow my technical and
                creative skills. Beyond the code, I value collaboration and open
                communication, because the best products are built together. I’m
                currently looking for opportunities where I can contribute my
                skills, learn from experienced colleagues, and help bring
                innovative ideas to life.
            </p>
            <Separator className="my-4" />
        </motion.div>
    );
};
export default InfoAbout;
