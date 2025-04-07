'use client'
import Image from "next/image";
import profile from "@/assets/images/profile.jpg";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaCopy } from "react-icons/fa6";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

function Profile() {
    const email = "franjaresc@hotmail.com";

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/francisco-javier-restrepo-casta%C3%B1eda-737b1b209/",
            label: "LinkedIn Francisco Restrepo",
            icon: <FaLinkedin className="text-4xl" />,
        },
        {
            href: "https://github.com/franjaresc",
            label: "GitHub Francisco Restrepo",
            icon: <FaGithub className="text-4xl" />,
        },
        {
            href: `mailto:${email}`,
            label: "Email Francisco Restrepo",
            icon: <FaEnvelope className="text-4xl" />,
        },
    ];

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        toast("Email copied to clipboard!");
    };

    return (
        <article
            className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8"
            aria-labelledby="profile-heading"
        >
            <Image
                src={profile}
                alt="Foto de perfil de Francisco Restrepo"
                className="rounded-full w-60 h-60 lg:w-70 lg:h-70"
                priority
            />
            <div className="flex flex-col gap-4">
                <h1
                    id="profile-heading"
                    className="text-4xl text-primary font-bold text-center lg:text-left"
                >
                    Francisco Restrepo
                </h1>
                <p className="text-lg text-primary-foreground text-center lg:text-left">
                    Hi!👋 I&apos;m a software developer and I love to learn new things!💻
                </p>
                <div className="flex gap-1 items-center justify-center lg:justify-start">
                    <p
                        className="text-primary-foreground"
                        aria-label="Correo electrónico de Francisco Restrepo"
                    >
                        {email}
                    </p>
                    <Button
                        variant="ghost"
                        onClick={handleCopyEmail}
                        aria-label="Copiar correo electrónico de Francisco Restrepo"
                        className="text-primary"
                    >
                        <FaCopy className="text-2xl" />
                    </Button>
                </div>
                <Toaster />
                <div
                    className="flex gap-4 justify-center lg:justify-start items-center"
                    aria-label="Enlaces sociales"
                >
                    {socialLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="text-primary"
                        >
                            {link.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default Profile;