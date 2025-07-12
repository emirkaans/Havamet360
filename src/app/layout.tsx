import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Havamet 360 | İTÜ",
  description: "Havamet 360",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex-col flex">
        <div className="relative bg-white flex-1">
          <Header />
          <main className="-mt-20">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
