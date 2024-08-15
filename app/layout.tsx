import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { space } from "postcss/lib/list";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Frontend Mentor - Interactive card details form challenge",
  description:
    "This is a solution to the Interactive card details form challenge on Frontend Mentor at https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw. Frontend Mentor challenges help you improve your coding skills by building realistic projects. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space_grotesk.variable} font-sans`}>{children}</body>
    </html>
  );
}
