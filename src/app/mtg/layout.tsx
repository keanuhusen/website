import type { Metadata } from "next";
import Script from 'next/script';
// import "/globals.css";

export const metadata: Metadata = {
  title: "MTG Cards for HC/COTH",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-M088S0GK9S" />
      <Script id="google-analytics">
        {'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "G-M088S0GK9S");'}
      </Script>
      <body
        className={`font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
