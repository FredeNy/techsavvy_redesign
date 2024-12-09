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
    setCurrentIndex((prevIndex) => prevIndex + 9);
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
    <section className="bg-Navyblue text-White p-8">
      <div>
        <h1 className="text-2xl font-bold">Nyheder - København</h1>
      </div>

      <div className="flex justify-end mb-4">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-4 px-10 bg-Red text-White text-xl font-bold border border-White"
          >
            Filter
          </button>
          {isOpen && (
            <ul className="absolute right-0 mt-2 bg-Red text-White rounded shadow-lg w-48">
              {categories.map((category) => (
                <li
                  key={category}
                  className="p-2 border border-White"
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

      <div className="text-Black md:grid grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div className="bg-White" key={article.id}>
            <Link href={`/${article.slug}`} prefetch={false}>
              <Image
                alt={article.Heading}
                src={
                  article.Image.startsWith("http")
                    ? article.Image.trim()
                    : `https://kxhcvsawrtnioroqlqtz.supabase.co/storage/v1/object/public/images/${article.Image.trim()}`
                }
                width={500}
                height={300}
                className=""
              />
            </Link>
            <div className="mx-6">
              <h2 className="bg-Red text-White px-2 py-1 inline-block">
                {article.Category}
              </h2>
              <p className="text-xl font-semibold">{article.Heading}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={loadMoreArticles}
          disabled={allArticlesLoaded}
          className={`p-4 px-10 text-xl font-bold border ${
            allArticlesLoaded
              ? "bg-Grey text-gray-700 border-gray-500"
              : "bg-Red text-White border-White"
          }`}
        >
          {allArticlesLoaded ? "Alle artikler er indlæst" : "Indlæs flere"}
        </button>
      </div>
    </section>
  );
}
