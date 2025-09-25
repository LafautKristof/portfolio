import Image from "next/image";
import Eager from "./components/home/Eager";
import TagLine from "./components/home/TagLine";
import Connect from "./components/home/Connect";
import MyResume from "./components/home/MyResume";
import Title from "./components/about/Title";
import Picture from "./components/about/Picture";
import Info from "./components/about/Info";
import Living from "./components/about/Living";
import Education from "./components/about/Education";
import Experience from "./components/about/Experience";
import TechStack from "./components/about/TechStack";
import ContactMe from "./components/contact/ContactMe";
import { Separator } from "@/components/ui/separator";
import InfoContact from "./components/contact/InfoContact";

export default function Home() {
    return (
        <>
            <section className="flex flex-col gap-20 mt-10" id="home">
                <div className="flex justify-center mt-6">
                    <Eager />
                </div>
                <div className="flex justify-center mt-6">
                    <TagLine
                        title="From Concept to Deployment — Full-Stack Done Right"
                        text="Hey, I’m Kristof Lafaut, a Full-Stack Developer passionate about crafting scalable apps with clean code and great UX."
                    />
                </div>
                <div className="flex justify-center gap-3 mt-6">
                    <Connect />
                    <MyResume />
                </div>
            </section>
            <section id="about" className="mt-40">
                <div className="flex justify-center mt-6 mb-12">
                    <Title title="A Little About Me" />
                </div>
                <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto ">
                    <div className="flex flex-col gap-6 border-r-2 pr-4">
                        <Picture />
                        <Info />
                        <Living />
                    </div>

                    {/* Kolommen 2 en 3 */}
                    <div className="col-span-2 flex flex-col gap-6">
                        <Education />
                        <Experience />
                        <TechStack />
                    </div>
                </div>
            </section>{" "}
            <section id="projects" className="mt-40">
                <div className="flex justify-center mt-6">
                    <Title title="A Few Projects" />
                </div>
                <div className="flex flex-col items-center mt-10 text-center text-gray-400">
                    <span className="text-6xl mb-4">🚧</span>
                    <p className="text-lg">
                        This section is under construction. Stay tuned!
                    </p>
                </div>
            </section>
            <section id="contact" className="mt-200">
                <div className="flex justify-center mt-6">
                    <Title title="Contact Me" />
                </div>
                <div className="flex flex-col justify-center gap-3 mt-6">
                    <InfoContact />
                    <ContactMe />
                </div>
            </section>
        </>
    );
}
