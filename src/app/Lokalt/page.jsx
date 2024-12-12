// Lokalt
import Image from "next/image";
import NewsArticleslokalt from "../components/Lokalkbh";
import Annonce from "../components/Annonce"
import NewsLetter from "../components/NewsLetter";

export default function Lokalt() {
  return (
    <div>
      <main className="bg-EggWhite">

        <div className="md:px-16 pb-4">
       <NewsArticleslokalt/>
       <Annonce/>
       <NewsLetter/>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
