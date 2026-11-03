import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Personal Creative Archive",
  description: "Stories, symbols, systems, and things built since 2016.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
