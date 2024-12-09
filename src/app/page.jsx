// Forside / Landingpage
import NewsArticle from "@/app/components/ArticleCard";
import SenesteNytArticle from "@/app/components/SenesteNyt";
import SoMeContent from "./components/SoMeContent";
import UgensStartup from "./components/UgensStartup"
import Debat from "./components/Debat"
import Annonce from "./components/Annonce"
import NewsLetter from "./components/NewsLetter";
import JobAnnonce from "@/app/components/JobAnnonce";

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
       <div className="md:grid grid-cols-2">
       <JobAnnonce/>
       <NewsLetter/>
       </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
