import Link from "next/link";
import {
    MdOutlineHome,
    MdOutlinePermContactCalendar,
    MdOutlineCode,
    MdOutlineMarkunread,
} from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import { RiGithubLine } from "react-icons/ri";

type NavItemProps = {
    href: string;
    label: string;
    icon: React.ReactNode;
    external?: boolean;
};

const NavItem = ({ href, label, icon, external }: NavItemProps) => {
    const classes =
        "text-2xl cursor-pointer hover:text-blue-400 hover:scale-110 transition-transform duration-200";

    return (
        <div className="relative group">
            {external ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes}
                >
                    {icon}
                </a>
            ) : (
                <Link href={href} className={classes}>
                    {icon}
                </Link>
            )}
            <span className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-sm bg-gray-800 text-white rounded whitespace-nowrap">
                {label}
            </span>
        </div>
    );
};

const NavBar = () => {
    return (
        <div className="flex justify-center mt-20">
            <nav className="mb-2 inline-flex items-center gap-8 p-4 text-white bg-black border rounded-full">
                <NavItem href="#home" label="Home" icon={<MdOutlineHome />} />
                <NavItem
                    href="#about"
                    label="About"
                    icon={<MdOutlinePermContactCalendar />}
                />
                <NavItem
                    href="#projects"
                    label="Projects"
                    icon={<MdOutlineCode />}
                />
                <NavItem
                    href="#contact"
                    label="Contact"
                    icon={<MdOutlineMarkunread />}
                />
                <NavItem
                    href="https://linkedin.com/in/jouwprofiel"
                    label="LinkedIn"
                    icon={<LiaLinkedinIn />}
                    external
                />
                <NavItem
                    href="https://github.com/jouwgithub"
                    label="GitHub"
                    icon={<RiGithubLine />}
                    external
                />
            </nav>
        </div>
    );
};

export default NavBar;

//font-[var(--font-quantico)]
