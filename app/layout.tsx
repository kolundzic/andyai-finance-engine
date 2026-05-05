import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AndyAI Finance Engine",
  description:
    "AI-assisted financial modeling with human truth verification."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
