import { projects } from "@/app/helpers/project";
import TitleProject from "./TitleProject";
import Video from "./Video";
import InfoProject from "./InfoProject";
import TechStackProject from "./TechStackProject";
import GithubProject from "./GithubProject";
import LinkProject from "./LinkProject";
import Title from "../about/Title";
const ProjectList = () => {
    return (
        <>
            <div className="flex justify-center mt-6 mb-12">
                <Title title="A Few Projects" />
            </div>
            {projects.map((project, index) => (
                <div className="border p-4 mb-8" key={index}>
                    <TitleProject project={project.name} />

                    <div className="grid grid-cols-3  gap-6 max-w-6xl mx-auto">
                        <div className="col-span-2 flex items-center">
                            <Video project={project.src} />
                        </div>
                        <div className="col-span-1 gap-6">
                            <InfoProject project={project.info} />
                        </div>
                        <div className="col-span-3 gap-6">
                            <TechStackProject project={project.techStack} />
                        </div>
                    </div>
                    <div className="flex justify-around mt-6">
                        <GithubProject project={project.github} />
                        <LinkProject project={project.link} />
                    </div>

                    {/* second project */}
                </div>
            ))}
        </>
    );
};
export default ProjectList;
