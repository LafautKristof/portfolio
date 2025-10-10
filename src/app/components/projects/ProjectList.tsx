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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Video bovenaan */}
                        <div className="md:col-span-2 order-1">
                            <Video
                                project={project.src}
                                picture={project.picture}
                            />
                        </div>

                        {/* InfoProject rechts op desktop, onder video op mobiel */}
                        <div className="md:col-span-1 order-2">
                            <InfoProject project={project.info} />
                        </div>

                        {/* Tech stack altijd onderaan */}
                        <div className="md:col-span-3 order-3">
                            <TechStackProject project={project.techStack} />
                        </div>
                    </div>

                    <div className="flex flex-row  justify-center md:justify-around gap-4 mt-6">
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
