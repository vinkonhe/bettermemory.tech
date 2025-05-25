/* eslint-disable prefer-const */
import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

import { JetBrains_Mono } from "next/font/google";
import Logo from "./components/logo";

const JetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: "BETTERMEMORY EdTech",
    description: "a education technology company",
    openGraph: {
        title: "BETTERMEMORY EdTech",
        description: "just a education technology company",
        url: baseUrl,
        siteName: "BETTERMEMORY Dot EdTech",
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cx(
                "text-black bg-[#F5F4EF] dark:text-black dark:bg-[#F5F4EF]",
                JetBrainsMono.className,
            )}
        >
            <body className="max-w-3xl h-full mx-4 lg:mx-auto">
                <main className="flex flex-col h-full selection:bg-black selection:text-white bg-[#F5F4EF] pt-[48px] justify-center">
                    <Logo />
                    {children}
                    <div className="bg-black my-[16px] h-[1px]"></div>
                    <Navbar />
                    {/* <Footer /> */}
                    <Analytics />
                    <SpeedInsights />
                </main>
            </body>
        </html>
    );
}
