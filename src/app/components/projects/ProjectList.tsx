import { projects } from "@/app/helpers/project";

import Title from "../about/Title";
import { Project } from "@/types/project";

import { text, title } from "@/app/helpers/projectVars";
import PreviewImageProject from "./PreviewImageProject";

const ProjectList = () => {
    return (
        <>
            <div className="flex flex-col justify-center mt-6 mb-12 gap-4">
                <Title title={title} />
                <p
                    className="max-w-2xl mx-auto text-center text-lg sm:text-xl text-gray-300 "
                    dangerouslySetInnerHTML={{ __html: text }}
                    style={{ fontFamily: "var(--font-quantico)" }}
                ></p>
            </div>
            <div
                className="
        w-screen 
        relative left-1/2 -translate-x-1/2
        overflow-hidden
        px-4          
        sm:px-6       
        lg:px-10        
    "
            >
                <div
                    className="
        grid 
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6 
        py-6
        max-w-[2000px]
        mx-auto
    "
                >
                    {projects.map((project: Project, index) => (
                        <PreviewImageProject key={index} project={project} />
                    ))}
                </div>
            </div>
        </>
    );
};
export default ProjectList;
