import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "any2any",
  description: `Unleash your creativity with any2any – the ultimate online tool for
  unlimited and free multimedia conversion. Transform images, audio, and
  videos effortlessly, without restrictions. Start converting now and
  elevate your content like never before!`,
  creator: "ABDULRAZAK",
  keywords: "any2any, image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark"]}
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl">
                <div className="flex items-center justify-center min-h-[60vh] sm:min-h-[50vh] md:min-h-[40vh]">
                  {children}
                </div>
              </div>
            </main>

            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}