import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],

});

export const metadata = {
  title: "SkillTestHub",
  description: "An AI-Powered platform to check your skills by doing Interview with AI.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className}ntialiased pattern`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
