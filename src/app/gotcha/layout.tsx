import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";

const molengo = localFont({
  src: [
    {
      path: '../fonts/molengo/molengo-regular.woff2',
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-molengo',
});

const angel = localFont({
  src: [
    {
      path: '../fonts/angel-club/angel-club-regular.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-angel',
});

export const metadata: Metadata = {
  title: "Gotcha",
  description: "You have been got!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${angel.variable} ${molengo.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
