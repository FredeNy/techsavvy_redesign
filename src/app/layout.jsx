import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter, Open_Sans, PT_Sans } from "next/font/google";
import "./globals.css";

// Importér skrifttyper med Next.js' `next/font/google`
const inter = Inter({ subsets: ["latin"], weight: "400"});
const openSans = Open_Sans({ subsets: ["latin"], weight: "700"});
const ptSans = PT_Sans({ subsets: ["latin"], weight: "400"});


export const metadata = {
  title: "TechSavvy",
  description: "Danmarks største startup medie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${openSans.className} ${ptSans.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
