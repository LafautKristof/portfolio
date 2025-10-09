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
                <div className="flex flex-col gap-6 border-r-2 pr-4">
                    <Picture />
                    <InfoAbout />
                    <Living />
                </div>

                <div className="col-span-2 flex flex-col gap-6">
                    <Education />
                    <Experience />
                    <TechStack />
                </div>
            </div>
        </>
    );
};
export default AboutList;
