import ProjectList from "./components/projects/ProjectList";
import HomeList from "./components/home/HomeList";
import AboutList from "./components/about/AboutList";
import ContactList from "./components/contact/ContactList";

export default function Home() {
    return (
        <>
            <section className="flex flex-col gap-20 mt-10" id="home">
                <HomeList />
            </section>
            <section id="about" className="mt-40">
                <AboutList />
            </section>{" "}
            <section id="projects" className="mt-40">
                <ProjectList />
            </section>
            <section id="contact" className="mt-200">
                <ContactList />
            </section>
        </>
    );
}
