import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pratham Patadiya | AI & Full Stack Developer",
  description: "Portfolio of Pratham Patadiya - AI Engineer, DSA Enthusiast, and Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}