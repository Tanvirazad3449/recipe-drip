import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/shared/layout/Header";
import Footer from "./components/shared/layout/Footer";
import { gentiumPlus, montserrat } from "./styles/fonts";
import { AuthProvider } from "./contexts/UserContext";

export const metadata: Metadata = {
  title: "RecipeDrip",
  description: "Cooking made easy, life made delicious.",
  openGraph: {
    title: "RecipeDrip",
    description: "Cooking made easy, life made delicious.",
    images: [
      {
        url: "/meta.jpg", // Path to your image
        width: 1200,
        height: 630,
        alt: "RecipeDrip Banner Image",
      },
    ],
    siteName: "RecipeDrip",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/meta.jpg", // Path to your image
        alt: "RecipeDrip Twitter Image",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gentiumPlus.variable} ${montserrat.variable} antialiased`}>
        <AuthProvider>
        <Header />
        {children}
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
