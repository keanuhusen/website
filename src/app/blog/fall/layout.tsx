import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spring is Coming",
  description: "Blog post for Spring.",
  authors: {
    name: "Keanu Husen"
  },
};

export default function GotchaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      {children}
    </section>
  );
}
