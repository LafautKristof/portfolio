import type { Metadata } from "next";
import { Geist, Geist_Mono, Quantico } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Kristof's portfolio",
    description: "Portfolio full stack developer",
};
const quantico = Quantico({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-quantico",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${quantico.variable} antialiased w-full relative mt-6 bg-black text-black`}
            >
                <div className="fixed inset-0 z-0">
                    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:20px_20px]"></div>
                </div>
                <NavBar />
                <main className="px-4 mx-auto max-w-4xl relative">
                    {children}
                </main>
            </body>
        </html>
    );
}
