"use client";
import Link from "next/link";
import {
    MdOutlineHome,
    MdOutlinePermContactCalendar,
    MdOutlineCode,
    MdOutlineMarkunread,
} from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import { RiGithubLine } from "react-icons/ri";

import { useEffect, useState } from "react";
import { LuSettings } from "react-icons/lu";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { CiSettings } from "react-icons/ci";

type NavItemProps = {
    href: string;
    label?: string;
    icon: React.ReactNode;
    external?: boolean;
};

const themes = [
    { name: "blue", color: "#3b82f6" },
    { name: "red", color: "#ef4444" },
    { name: "purple", color: "#a855f7" },
    { name: "orange", color: "#f97316" },
    { name: "green", color: "#22c55e" },
    { name: "yellow", color: "#FFDF20" },
    { name: "pink", color: "#ec4899" },
    { name: "lightblue", color: "#74D4FF" },
    { name: "brown", color: "#82181A" },
    { name: "lightgreen", color: "#9AE630" },
] as const;
const NavItem = ({ href, label, icon, external }: NavItemProps) => {
    const classes =
        "text-2xl cursor-pointer hover:text-[var(--accent-color)] hover:scale-110 transition-transform duration-200";

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
            <span className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-sm text-white rounded whitespace-nowrap">
                {label}
            </span>
        </div>
    );
};

const NavBar = () => {
    const [theme, setTheme] = useState("blue");
    const [open, setOpen] = useState(false);

    const handleThemeChange = (color: string) => {
        setTheme(color);
        document.documentElement.setAttribute("data-theme", color);
        setOpen(false); // ✅ sluit popover na klik
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, []);
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
                    href="https://linkedin.com/in/kristof-lafaut-061171206"
                    label="LinkedIn"
                    icon={<LiaLinkedinIn />}
                    external
                />
                <NavItem
                    href="https://github.com/LafautKristof"
                    label="GitHub"
                    icon={<RiGithubLine />}
                    external
                />
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <button
                            className="text-3xl text-white hover:text-[var(--accent-color)] transition-transform hover:rotate-90 duration-300 z-10"
                            title="Change Theme"
                        >
                            <CiSettings />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-52 bg-neutral-900 text-white border border-gray-700 rounded-xl p-4 z-10">
                        <div className="grid grid-cols-5 gap-4">
                            {themes.map((t) => (
                                <button
                                    key={t.name}
                                    onClick={() => handleThemeChange(t.name)}
                                    style={{ backgroundColor: t.color }}
                                    className={`w-8 h-8 rounded-full hover:scale-110 transition-transform border-2 ${
                                        theme === t.name
                                            ? "border-white"
                                            : "border-transparent"
                                    }`}
                                />
                            ))}
                        </div>
                    </PopoverContent>
                </Popover>
            </nav>
        </div>
    );
};

export default NavBar;

//font-[var(--font-quantico)]
