import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import { gentiumPlus, butterChicken, montserrat } from "./css/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gentiumPlus.variable} ${montserrat.variable} ${butterChicken.variable}  antialiased`}
      >
              <Header/>

        {children}
        <Footer/>
      </body>
    </html>
  );
}
