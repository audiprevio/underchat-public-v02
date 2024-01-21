import type { Metadata } from "next";
import localfont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import CreditsFooter from "@/components/CreditsFooter";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Undernet Chat",
  description: "Undernet Chat App - Chat with your monster friends",
};

const undertale = localfont({
  src: [
    {
      path: "../../public/fonts/DeterminationSansWebRegular-369X.ttf",
      weight: "400",
    },
  ],
  variable: "--font-undertale",
});

const undertalechat = localfont({
  src: [
    {
      path: "../../public/fonts/DeterminationSansWebRegular-369X.ttf",
      weight: "400",
    },
  ],
  variable: "--font-undertale",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[undertale.variable, undertalechat.variable].join(" ")}>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        <div className="flex justify-center">
          <div className="absolute bottom-2 md:bottom-10 bg-black w-full mt-4">
            <CreditsFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
