import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aryan Mehta — Full Stack Developer, London",
    template: "%s | Aryan Mehta",
  },
  description:
    "Full Stack Developer with frontend expertise. React, TypeScript, Node, and PostgreSQL — scalable frontend architecture and full-stack product thinking.",
  openGraph: {
    title: "Aryan Mehta — Full Stack Developer",
    description:
      "React, TypeScript, Node, and PostgreSQL — from interface to database.",
    url: "https://aryanmehta.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
