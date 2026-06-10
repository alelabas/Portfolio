import type { Metadata, Viewport } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import { site } from "@/data/content";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Product-minded Full Stack Engineer based in Buenos Aires, moving into AI Engineering. I ship enterprise software at Accenture and have launched a cross-platform mobile product end-to-end — React / React Native frontends, .NET backends and GCP infrastructure.",
  keywords: [
    "Alejandro Labastie",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineering",
    "React",
    "React Native",
    ".NET",
    "TypeScript",
    "Buenos Aires",
  ],
  authors: [{ name: site.fullName, url: site.github }],
  creator: site.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.role}`,
    description:
      "Product-minded Full Stack Engineer moving into AI Engineering. React / React Native, .NET and Google Cloud.",
    images: [{ url: "/projects/portfolio.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description:
      "Product-minded Full Stack Engineer moving into AI Engineering. React / React Native, .NET and Google Cloud.",
    images: ["/projects/portfolio.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  sameAs: [site.github, site.linkedin, site.instagram],
  knowsAbout: ["React", "React Native", ".NET", "C#", "TypeScript", "Google Cloud", "AI Engineering"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${grotesk.variable}`}>
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScroll>
          <Preloader>
            <ScrollProgress />
            <Navbar />
            {children}
          </Preloader>
        </SmoothScroll>
        <Cursor />
        <Analytics />
      </body>
    </html>
  );
}
