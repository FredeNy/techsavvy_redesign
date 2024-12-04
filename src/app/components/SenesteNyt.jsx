"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LatestNewsArticles() {
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

        // Sorter artikler efter dato (nyeste først) og tag de første 4
        const sortedArticles = data
          .sort((a, b) => new Date(b.Date) - new Date(a.Date))
          .slice(0, 4);

        setArticles(sortedArticles);
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
    <section className="bg-White text-Black p-8">

      <div className="text-Black">
        {articles.map((article) => (
          <div className="" key={article.id}>
            <Image
              alt={article.Heading}
              src={
                article.Image.startsWith("http")
                  ? article.Image.trim()
                  : `https://kxhcvsawrtnioroqlqtz.supabase.co/storage/v1/object/public/images/${article.Image.trim()}`
              }
              width={1000}
              height={800}
              className=" w-full"
            />
            <h2 className="bg-Red text-White mx-6 px-4 py-1 inline-block">
              {article.Category}
            </h2>
            <div className="mx-6">
            <p className="text-2xl font-semibold">{article.Heading}</p>
            <p className="text-md font-normal">{article.Subheading}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
