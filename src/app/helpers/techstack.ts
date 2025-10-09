export type TechItem = {
    name: string;
    icon: string;
    variant?: "light" | "dark" | "grayscale";
};
export const techStack: TechItem[] = [
    {
        name: "React",
        icon: "react",
    },
    {
        name: "Next.js",
        icon: "nextjs",
        variant: "dark",
    },
    {
        name: "Tailwind CSS",
        icon: "tailwindcss",
    },
    {
        name: "TypeScript",
        icon: "typescript",
    },
    {
        name: "JavaScript",
        icon: "js",
    },
    {
        name: "HTML",
        icon: "html5",
    },
    {
        name: "CSS",
        icon: "css3",
    },
    { name: "Redux", icon: "redux" },
    { name: "Git", icon: "git" },
    { name: "Github", icon: "github", variant: "dark" },
    { name: "Vercel", icon: "vercel", variant: "dark" },
    { name: "Python", icon: "python" },
    { name: "Flask", icon: "flask", variant: "dark" },
    { name: "PHP", icon: "php" },
    { name: "Laravel", icon: "laravel" },
    { name: "MySQL", icon: "mysql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgresql" },

    { name: "Prisma", icon: "prisma", variant: "dark" },
    {
        name: "Nodejs",
        icon: "nodejs",
    },
    { name: "AWS", icon: "aws" },
    { name: "Docker", icon: "docker" },
    { name: "Bootstrap", icon: "bootstrap5" },
    { name: "Figma", icon: "figma" },
    { name: "Shadcn UI", icon: "shadcnui", variant: "dark" },
    { name: "Vite", icon: "vitejs", variant: "dark" },
    { name: "VsCode", icon: "vscode", variant: "dark" },
    { name: "Supabase", icon: "supabase" },
    { name: "Express.js", icon: "expressjs", variant: "dark" },
];
