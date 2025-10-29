"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { fadeIn } from "@/app/helpers/motionVariants";

const Video = ({ project, picture }: { project: string; picture: string }) => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <motion.div
                    className="relative w-full h-80 overflow-hidden cursor-pointer"
                    {...fadeIn}
                >
                    <video
                        key={project}
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={picture}
                        className="absolute top-[-42px] left-0 w-full h-auto rounded-md shadow-md"
                    >
                        <source src={project} type="video/mp4" />
                    </video>
                </motion.div>
            </DialogTrigger>

            <DialogContent
                className="w-[95vw] h-[90vh] max-w-none p-0 bg-black border-none flex items-center justify-center rounded-lg shadow-xl
"
                aria-describedby="project-video"
            >
                <DialogHeader>
                    <DialogTitle className="sr-only">Project video</DialogTitle>
                </DialogHeader>

                <video controls autoPlay className="w-full h-full  rounded-md">
                    <source src={project} type="video/mp4" />
                </video>
            </DialogContent>
        </Dialog>
    );
};

export default Video;
