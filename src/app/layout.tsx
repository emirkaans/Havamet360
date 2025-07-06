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
      <body>
        <div className="flex flex-col items-center w-full bg-white">
          <div className="max-w-[1800px] w-full">
            <Header />
            <main className="min-h-screen flex flex-col justify-center overflow-hidden">
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
