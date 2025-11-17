import { Project } from "@/types/project";
import Image from "next/image";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";
import TechStackProject from "./TechStackProject";
import { IoMdClose } from "react-icons/io";
import GithubProject from "./GithubProject";
import { Link } from "lucide-react";
import LinkProject from "./LinkProject";

const PreviewImageProject = ({ project }: { project: Project }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    className="
            relative 
            rounded-lg 
            overflow-hidden 
            group 
            cursor-pointer 
            transition-transform duration-300 hover:scale-[1.03]

            w-full           
            max-w-sm         
            mx-auto             
            sm:max-w-none 
        "
                >
                    <Image
                        src={project.src}
                        alt={project.alt}
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover border-2 border-[var(--accent-color)]"
                    />

                    <div
                        className="
                            absolute bottom-0 left-0 right-0
                            bg-black/60 backdrop-blur-sm
                            text-white text-center
                            py-2 px-3
                            text-sm font-medium
                            border-2 border-[var(--accent-color)] border-t-0
                        "
                        style={{ fontFamily: "var(--font-quantico)" }}
                    >
                        {project.name}
                    </div>
                </div>
            </DialogTrigger>

            {/* --- DIALOG CONTENT --- */}
            <DialogContent
                className="
        w-[95vw]
        max-w-[600px]
        sm:max-w-[800px]
        lg:max-w-3xl

        max-h-[85vh]         /* MOBILE scroll */
        overflow-y-auto      /* MOBILE scroll */

        lg:max-h-none        /* DESKTOP: no height limit */
        lg:overflow-visible  /* DESKTOP: no scroll */

        bg-black 
        border border-[var(--accent-color)]
        rounded-xl
        p-4
    "
                style={{ fontFamily: "var(--font-quantico)" }}
            >
                <DialogClose
                    className=" absolute top-4 right-4 rounded-full bg-black/60 backdrop-blur text-[var(--accent-color)] p-2 transition-transform duration-300 hover:rotate-180         border-none outline-none           /* remove border */
        focus:outline-none focus:ring-0    /* remove focus ring */
        active:outline-none                /* remove click outline */
    "
                >
                    <IoMdClose size={30} />
                </DialogClose>
                <Image
                    src={project.src}
                    alt={project.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg mt-12 border-4 border-[var(--accent-color)]"
                />

                <DialogHeader>
                    <DialogTitle className="text-[var(--accent-color)]">
                        {project.name}
                    </DialogTitle>
                </DialogHeader>

                {project.info && (
                    <p
                        className="text-muted-foreground mt-4"
                        dangerouslySetInnerHTML={{ __html: project.info }}
                    ></p>
                )}

                <TechStackProject project={project.techStack} />
                <div className="flex items-center justify-around">
                    {project.github.length > 0 && (
                        <GithubProject project={project.github} />
                    )}
                    {project.link && <LinkProject project={project.link} />}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PreviewImageProject;
