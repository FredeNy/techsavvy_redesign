// Forside / Landingpage
import NewsArticle from "@/app/components/ArticleCard";
import SenesteNytArticle from "@/app/components/SenesteNyt";
import SoMeContent from "./components/SoMeContent";
import UgensStartup from "./components/UgensStartup"
import Debat from "./components/Debat"
import Annonce from "./components/Annonce"

export default function Home() {
  return (
    <div>
      <main className="bg-EggWhite">

        <div className="md:px-16 py-4">
      <SenesteNytArticle />
       <NewsArticle />
       <Annonce/>
       <UgensStartup/>
       <SoMeContent />
       <Debat/>
       <Annonce/>
       
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
