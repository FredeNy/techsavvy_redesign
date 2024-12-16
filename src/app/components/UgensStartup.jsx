"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
        const filteredArticles = data.filter((article) => article.Category === "Deeptech").slice(0, 3);
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
    <section className="bg-Navyblue text-White">
      <h2 className="font-openSans text-xl md:text-2xl font-bold pt-6 pl-6">UGENS STARTUP</h2>
  
      <div className=" sm:w-full text-Black md:grid md:grid-cols-3 md:gap-10 md:pt-6 md:px-6 pt-6 md:p-12">
        {articles.map((article) => (
          <div className="bg-White relative" key={article.id}>
            <Link href={`/${article.slug}`} prefetch={false}>
              <div>
                <div className="grid grid-cols-[150px_1fr] md:grid-cols-1 mb-2">
                  <Image
                    alt={article.Heading}
                    src={
                      article.Image.startsWith("http")
                        ? article.Image.trim()
                        : `https://kxhcvsawrtnioroqlqtz.supabase.co/storage/v1/object/public/images/${article.Image.trim()}`
                    }
                    width={500}
                    height={300}
                    className="w-auto self-stretch object-cover"
                  />
                  <div>
                  <div className="text-sm md:text-base font-inter flex col md:ml-6 sm:left-4 bg-Red text-White px-4 py-1 md:translate-y-[-50%] w-fit">
                    {article.Category}
                  </div>
                
                <div className="mx-6 my-4 md:mt-0">
                  <p className="md:text-xl font-openSans">
                    {article.Heading.split(":").map((part, index) => (
                      <span key={index} className={index > 0 ? "block" : ""}>
                        {part}
                        {index === 0 && ":"}
                      </span>
                    ))}
                  </p>
                  </div>
                </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
