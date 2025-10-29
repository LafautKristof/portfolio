import Education from "./Education";
import Experience from "./Experience";
import InfoAbout from "./InfoAbout";
import Living from "./Living";
import Picture from "./Picture";
import TechStack from "./TechStack";
import Title from "./Title";

const AboutList = () => {
    return (
        <>
            <div className="flex justify-center sm:flex-row mt-6 mb-12">
                <Title title="A Little About Me" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="flex flex-col gap-6 md:border-r-2 border-r-0 sm:pr-4 px-4 md:px-4 lg:px-10">
                    <Picture />
                    <InfoAbout />
                    <Living />
                </div>

                <div className="col-span-2 flex flex-col gap-6 px-4 md:px-4 lg:px-10">
                    <Education />
                    <Experience />
                    <TechStack />
                </div>
            </div>
        </>
    );
};
export default AboutList;
