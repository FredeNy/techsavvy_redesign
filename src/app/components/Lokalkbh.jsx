//Lokale nyheder for København med filtering
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewsArticles() {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(9); // Start med 9 artikler

  useEffect(() => {
    const fetchArticles = async () => {
      const headersList = {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aGN2c2F3cnRuaW9yb3FscXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3ODg0NjQsImV4cCI6MjA0ODM2NDQ2NH0.vSHBY-_CVLINk2YnjqchDZ0JlaOMgAzYFB0n63sp61U",
      };

      try {
        const res = await fetch(
          "https://kxhcvsawrtnioroqlqtz.supabase.co/rest/v1/Articles",
          {
            method: "GET",
            headers: headersList,
          }
        );

        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        // Filtrer og sorter artikler
        const filteredArticles = data
          .filter((article) => article.Location === "København")
          .sort((a, b) => new Date(b.Date) - new Date(a.Date));

        const uniqueCategories = [
          "All",
          ...new Set(filteredArticles.map((article) => article.Category)),
        ];

        setCategories(uniqueCategories);
        setArticles(filteredArticles);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArticles();
  }, []);

  const loadMoreArticles = () => {
    setCurrentIndex((prevIndex) => prevIndex + 6);
  };

  const filteredArticles = articles
    ?.filter(
      (article) =>
        selectedCategory === "All" || article.Category === selectedCategory
    )
    .slice(0, currentIndex);

  const allArticlesLoaded = articles && currentIndex >= articles.length;

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!articles) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-Navyblue text-White pb-12 relative">
      {/* Overskrift og filter-knap */}
      <div className="md:flex justify-between px-4 md:px-6 md:pt-6 relative">
        <h2 className="font-openSans text-xl md:text-2xl py-4">NYHEDER - KØBENHAVN</h2>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-openSans p-2 px-10 bg-Red hover:bg-Hoverbtn text-White text-xl font-bold border border-White"
          >
            Filter
          </button>
          {isOpen && (
            <ul className="absolute mt-6 bg-Red text-White shadow-lg w-56 md:w-40 z-50">
              {categories.map((category) => (
                <li
                  key={category}
                  className="font-inter p-2 border border-White hover:bg-Hoverbtn"
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsOpen(false);
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
  
      {/* Artikler */}
      <div className="sm:w-full text-Black md:grid md:grid-cols-3 md:gap-10 md:pt-6 md:px-6 pt-6 md:p-12">
        {filteredArticles.map((article) => (
          <div className="bg-White relative z-10" key={article.id}>
            <Link href={`/${article.slug}`} prefetch={false}>
              <div className="grid grid-cols-[150px_1fr] md:grid-cols-1 mb-2">
                {/* Billede */}
                <Image
                  alt={article.Heading}
                  src={
                    article.Image.startsWith("http")
                      ? article.Image.trim()
                      : `https://kxhcvsawrtnioroqlqtz.supabase.co/storage/v1/object/public/images/${article.Image.trim()}`
                  }
                  width={500}
                  height={300}
                  className="w-auto self-stretch object-cover min-h-[100%]"
                />
                <div>
                  {/* Kategori */}
                  <div className="text-sm md:text-base font-inter flex col md:ml-6 sm:left-4 bg-Red text-White px-4 py-1 md:translate-y-[-50%] w-fit">
                    {article.Category}
                  </div>
                  {/* Overskrift */}
                  <div className="mx-2 md:mx-6 my-2 md:mt-0">
                    <h3 className="md:text-xl font-openSans">
                      {article.Heading.split(":").map((part, index) => (
                        <span key={index} className={index > 0 ? "block" : ""}>
                          {part}
                          {index === 0 && ":"}
                        </span>
                      ))}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
  
      {/* Indlæs flere knap */}
      <div className="mt-8 text-center">
        <button
          onClick={loadMoreArticles}
          disabled={allArticlesLoaded}
          className={`font-openSans p-2 md:p-4 px-10 md:text-xl font-bold border ${
            allArticlesLoaded
              ? "bg-Grey text-gray-700 border-gray-500"
              : "bg-Red text-White border-White hover:bg-Hoverbtn"
          }`}
        >
          {allArticlesLoaded ? "INGEN FLERE ARTIKLER" : "INDLÆS FLERE"}
        </button>
      </div>
    </section>
  );
  
  
}
