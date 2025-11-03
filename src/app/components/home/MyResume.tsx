import { FaLongArrowAltRight } from "react-icons/fa";

const MyResume = () => {
    return (
        <a
            href="/Kristof_Lafaut_CV_Full-Stack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 flex justify-center items-center px-6 py-3 text-white border rounded-full shadow-md transition-all duration-300 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] hover:scale-105"
            style={{ fontFamily: "var(--font-quantico)" }}
        >
            <span className="text-lg flex items-center gap-2">
                Resume <FaLongArrowAltRight />
            </span>
        </a>
    );
};
export default MyResume;
