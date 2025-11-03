import { projects } from "@/app/helpers/project";
import TitleProject from "./TitleProject";

import InfoProject from "./InfoProject";
import TechStackProject from "./TechStackProject";
import GithubProject from "./GithubProject";
import LinkProject from "./LinkProject";
import Title from "../about/Title";
import { Project } from "@/types/project";
import PreviewProject from "./PreviewProject";

const ProjectList = () => {
    return (
        <>
            <div className="flex justify-center mt-6 mb-12">
                <Title title="A Few Projects" />
            </div>
            {projects.map((project: Project, index) => (
                <div
                    className="border border-[var(--accent-color)] p-4 mb-8"
                    key={index}
                >
                    <TitleProject project={project.name} />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="md:col-span-2 order-1">
                            <PreviewProject
                                src={project.src}
                                alt={project.alt}
                                link={project.link}
                            />
                        </div>

                        <div className="md:col-span-1 order-2">
                            <InfoProject project={project.info} />
                        </div>

                        <div className="md:col-span-3 order-3">
                            <TechStackProject project={project.techStack} />
                        </div>
                    </div>

                    <div className="flex flex-row  justify-center md:justify-around gap-4 mt-6">
                        <GithubProject project={project.github} />
                        <LinkProject project={project.link} />
                    </div>
                </div>
            ))}
        </>
    );
};
export default ProjectList;
