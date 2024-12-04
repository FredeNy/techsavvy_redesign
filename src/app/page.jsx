// Forside / Landingpage
import NewsArticle from "@/app/components/ArticleCard";
import SenesteNytArticle from "@/app/components/SenesteNyt";
import SoMeContent from "./components/SoMeContent";

export default function Home() {
  return (
    <div>
      <main className="bg-EggWhite">

        <div className="md:px-16 py-4">
      <SenesteNytArticle />
       <NewsArticle />
       <SoMeContent />
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
