"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function NewsArticles() {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const headersList = {
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aGN2c2F3cnRuaW9yb3FscXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3ODg0NjQsImV4cCI6MjA0ODM2NDQ2NH0.vSHBY-_CVLINk2YnjqchDZ0JlaOMgAzYFB0n63sp61U",
        
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

        // Filtrer artikler med Popularity === 100 og vælg de første 3
        const filteredArticles = data.filter((article) => article.Location === "København").slice(0, 9);
        setArticles(filteredArticles);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArticles();
  }, []);
console.log(articles);
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!articles) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-Navyblue text-White p-8">
  <h1 className="text-2xl font-bold">København</h1>

  <div className="text-Black md:grid grid-cols-3 gap-6">
    {articles.map((article) => (
      <div className="bg-White" key={article.id}>
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
      <div className="mx-6">
        <h2 className="bg-Red text-White px-2 py-1 inline-block">
          {article.Category}
        </h2>
        <p className="text-xl font-semibold">{article.Heading}</p>
        </div>
      </div>
    ))}
  </div>
</section>
  );
}
