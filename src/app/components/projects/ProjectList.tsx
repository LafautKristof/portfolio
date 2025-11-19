import { projects } from "@/app/helpers/project";

import Title from "../about/Title";
import { Project } from "@/types/project";

import { text, title } from "@/app/helpers/projectVars";
import PreviewImageProject from "./PreviewImageProject";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
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
                className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden px-4 sm:px-6 lg:px-10        
    "
            >
                <Carousel>
                    <CarouselContent>
                        {projects.map((project: Project, index) => (
                            <CarouselItem key={index} className="basis-1/3">
                                <PreviewImageProject
                                    key={index}
                                    project={project}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/60 backdrop-blur text-[var(--accent-color)] p-2 rounded-full border-none outline-none focus:outline-none focus:ring-0 active:outline-none hover:scale-110 transition-transform">
                        ‹
                    </CarouselPrevious>
                    <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/60 backdrop-blur text-[var(--accent-color)] p-2 rounded-full border-none outline-none focus:outline-none focus:ring-0 active:outline-none hover:scale-110 transition-transform">
                        ›
                    </CarouselNext>
                </Carousel>
            </div>
        </>
    );
};
export default ProjectList;
