import { FaLongArrowAltLeft } from "react-icons/fa";

const Connect = () => {
    return (
        <a
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 flex justify-center items-center px-6 py-3 text-white border rounded-full shadow-md transition-all duration-300 hover:border-blue-600 hover:scale-105"
            style={{ fontFamily: "var(--font-quantico)" }}
        >
            <span className="text-lg flex items-center gap-2">
                <FaLongArrowAltLeft />
                Connect
            </span>
        </a>
    );
};

export default Connect;
