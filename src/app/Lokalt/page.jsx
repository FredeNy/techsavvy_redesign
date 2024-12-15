// Lokalt
import Image from "next/image";
import NewsArticleslokalt from "../components/Lokalkbh";
import Ad from "../components/Ad"
import NewsLetter from "../components/NewsLetter";
import SenesteNytkbh from "@/app/components/SenesteNytkbh";

export default function Lokalt() {
  return (
    <div>
      <main className="bg-EggWhite">

        <div className="md:px-16 pb-4">
          <SenesteNytkbh/>
       <NewsArticleslokalt/>
       <Ad 
            imageSrc="/techsavvy_ad_white.webp" 
            altText="Annonce" 
          />
       <NewsLetter/>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
