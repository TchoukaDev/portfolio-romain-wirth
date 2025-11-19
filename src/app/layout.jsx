import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: {
    default: "Romain WIRTH | Développeur Web FullStack",
    template: "%s | Portfolio de Romain WIRTH",
  },
  description:
    "Portfolio de Romain WIRTH, développeur web spécialisé en React, Next.js et JavaScript moderne. Découvrez mes projets, mes compétences et contactez-moi pour collaborer.",
  keywords: [
    "Romain WIRTH",
    "développeur web",
    "portfolio",
    "React",
    "Nextjs",
    "JavaScript",
    "freelance",
    "frontend",
    "WordPress",
  ],
  openGraph: {
    title: "Romain WIRTH | Développeur Web FullStack",
    description:
      "Découvrez mes projets et compétences en développement web moderne avec React et Next.js.",
    url: "https://romainwirth.fr",
    siteName: "Portfolio de Romain WIRTH",
    images: [
      {
        url: "https://romainwirth.fr/og-image.jpg", // ton image d’aperçu
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Romain WIRTH",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Romain Wirth | Développeur Web Front-End",
    description:
      "Portfolio de Romain Wirth, développeur web spécialisé en React et Nextjs.",
    creator: "@romainwirth",
    images: ["https://romainwirth.dev/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-primary text-blue-50 relative font-raleway min-h-screen cursor-default">
        {/* <Navbar /> */}
        <Header suspended />
        {/* {children} */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
