"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";

import emailjs from "@emailjs/browser";
import InfoContact from "./InfoContact";
const ContactMe = () => {
    const [form, setForm] = useState({
        email: "",
        name: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const handleEmailClick = () => {
        window.location.href = "mailto:kristof.lafaut@gmail.com";
    };

    const handleWhatsAppClick = () => {
        window.open("https://wa.me/32496929750", "_blank");
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                {
                    email: form.email,
                    name: form.name,
                    subject: form.subject,
                    message: form.message,
                    time: new Date().toLocaleString(),
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            );

            alert("Email sent successfully!");
            setForm({ email: "", name: "", subject: "", message: "" });
        } catch (error) {
            console.error(error);
            alert("Failed to send email. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-4 border rounded-3xl min-w-full p-8">
            <div className="flex gap-4">
                <Button
                    onClick={handleEmailClick}
                    className="flex-1 py-6 text-white rounded-xl border shadow-md hover:transition-transform hover:scale-105"
                    style={{ fontFamily: "var(--font-quantico)" }}
                >
                    Send Me an Email
                </Button>

                <Button
                    onClick={handleWhatsAppClick}
                    className="flex-1 py-6 text-white rounded-xl border shadow-md hover:transition-transform hover:scale-105"
                    style={{ fontFamily: "var(--font-quantico)" }}
                >
                    WhatsApp Me
                </Button>
            </div>
            <div
                className="text-white flex justify-center text-sm pt-8 pb-8"
                style={{ fontFamily: "var(--font-quantico)" }}
            >
                or send me a message
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                        <Input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="text-gray-500  bg-gray-900"
                        />
                        <Input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="text-gray-500  bg-gray-900"
                        />
                        <Input
                            type="text"
                            name="subject"
                            placeholder="subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                            className="text-gray-500  bg-gray-900"
                        />
                        <Textarea
                            name="message"
                            placeholder="Your message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="text-gray-500 h-50 bg-gray-900"
                        />
                        <Button
                            className="flex-1 py-2 text-white rounded-xl border shadow-md hover:transition-transform hover:scale-105"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default ContactMe;
