import { Project } from "@/types/project";
import Image from "next/image";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";

import TechStackProject from "./TechStackProject";
import { IoMdClose } from "react-icons/io";
import GithubProject from "./GithubProject";

import LinkProject from "./LinkProject";

const PreviewImageProject = ({ project }: { project: Project }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="relative w-full mx-auto sm:max-w-none rounded-lg border-2 border-[var(--accent-color)] overflow-hidden">
                    <div className="group cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
                        <div className="overflow-hidden rounded-t-lg h-[300px]">
                            <Image
                                src={project.src}
                                alt={project.alt}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div
                            className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-white text-center py-2 px-3 text-sm font-medium border-t-2 border-[var(--accent-color)]"
                            style={{ fontFamily: "var(--font-quantico)" }}
                        >
                            {project.name}
                        </div>
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent
                className="w-[95vw] max-w-[600px] sm:max-w-[800px] lg:max-w-3xl max-h-[85vh] overflow-y-auto lg:max-h-none lg:overflow-visible bg-black border border-[var(--accent-color)] rounded-xl p-4"
                style={{ fontFamily: "var(--font-quantico)" }}
            >
                <DialogClose className=" absolute top-4 right-4 rounded-full bg-black/60 backdrop-blur text-[var(--accent-color)] p-2 transition-transform duration-300 hover:rotate-180 border-none outline-none focus:outline-none focus:ring-0active:outline-none">
                    <IoMdClose size={30} />
                </DialogClose>
                <DialogTitle className="text-[var(--accent-color)] mb-6 mt-6">
                    {project.name}
                </DialogTitle>

                <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <Image
                        src={project.src}
                        alt={project.alt}
                        width={500}
                        height={500}
                        className="w-full max-w-[350px] h-auto rounded-lg border-4 border-[var(--accent-color)] mx-auto"
                    />

                    <TechStackProject project={project.techStack} />
                </div>

                {project.info && (
                    <p
                        className="text-muted-foreground mt-4"
                        dangerouslySetInnerHTML={{ __html: project.info }}
                    ></p>
                )}

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
