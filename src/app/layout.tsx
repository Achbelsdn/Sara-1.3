import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "La Réserve | Restaurant d'Exception",
  description:
    "Bienvenue à La Réserve, une expérience culinaire d'exception. Découvrez notre menu raffiné, réservez votre table et vivez des moments inoubliables.",
  keywords: ["restaurant", "La Réserve", "gastronomie", "réservation", "menu"],
  openGraph: {
    title: "La Réserve | Restaurant d'Exception",
    description:
      "Une expérience culinaire d'exception où chaque plat raconte une histoire.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1a1a1a",
              color: "#fdf9f0",
              border: "1px solid rgba(212, 152, 42, 0.2)",
            },
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
