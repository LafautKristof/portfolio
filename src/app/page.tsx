import Eager from "./components/home/Eager";
import TagLine from "./components/home/TagLine";
import Connect from "./components/home/Connect";
import MyResume from "./components/home/MyResume";
import Title from "./components/about/Title";
import Picture from "./components/about/Picture";
import InfoAbout from "./components/about/InfoAbout";
import Living from "./components/about/Living";
import Education from "./components/about/Education";
import Experience from "./components/about/Experience";
import TechStack from "./components/about/TechStack";
import ContactMe from "./components/contact/ContactMe";
import InfoContact from "./components/contact/InfoContact";
import Video from "./components/projects/Video";
import InfoProject from "./components/projects/InfoProject";
import TitleProject from "./components/projects/TitleProject";
import TechStackProject from "./components/projects/TechStackProject";
import GithubProject from "./components/projects/GithubProject";
import LinkProject from "./components/projects/LinkProject";

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
                        <InfoAbout />
                        <Living />
                    </div>

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
                <div className="border p-4">
                    <TitleProject />

                    <div className="grid grid-cols-3  gap-6 max-w-6xl mx-auto">
                        <div className="col-span-2 flex items-center">
                            <Video />
                        </div>
                        <div className="col-span-1 gap-6">
                            <InfoProject />
                        </div>
                        <div className="col-span-3 gap-6">
                            <TechStackProject
                                stack={[
                                    "React",
                                    "Next.js",
                                    "Tailwind",
                                    "TypeScript",
                                    "MongoDB",
                                    "VsCode",
                                    "Vercel",
                                ]}
                            />
                        </div>
                    </div>
                    <div className="flex justify-around mt-6">
                        <GithubProject
                            link={"https://github.com/LafautKristof/pokedex"}
                        />
                        <LinkProject
                            link={"https://pokedex-dusky-theta-61.vercel.app"}
                        />
                    </div>
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
