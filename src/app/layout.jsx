import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechSavvy",
  description: "Danmarks størtste startup medie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
