import { metadataContent } from "@/libs/metadata";
import "./globals.css";
import Header from "@/components/Header/Header";
import LayoutClientWrapper from "@/components/LayoutClientWrapper/LayoutClientWrapper";

export function generateMetadata({ params }) {
  // const locale = params?.locale || "fr";
  return metadataContent["fr"];
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0d1325] text-blue-50 relative font-raleway min-h-screen cursor-default antialiased">
        <LayoutClientWrapper />
        <Header />
        {children}
      </body>
    </html>
  );
}
