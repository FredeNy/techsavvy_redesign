"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LatestNewsArticles() {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        articles ? (prevIndex + 1) % articles.length : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [articles]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!articles) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-White text-Black">
      <div className="relative overflow-hidden">
        {/* Carousel */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {articles.map((article, index) => (
            <div className="min-w-full" key={article.id}>
              <Link href={`/${article.slug}`} prefetch={false}>
                <div className="relative aspect-[33/9] w-full">
                  <Image
                    alt={article.Heading}
                    src={
                      article.ImageEdited.startsWith("http")
                        ? article.ImageEdited.trim()
                        : `https://kxhcvsawrtnioroqlqtz.supabase.co/storage/v1/object/public/images/${article.Image.trim()}`
                    }
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute -bottom-4 md:left-0 text-sm md:text-base bg-Red font-inter text-White px-4 py-1 mx-4 md:mx-6 whitespace-nowrap overflow-hidden text-ellipsis">
                    {article.Category}
                  </div>
                </div>
                <div className="mx-4 md:mx-6 pt-6">
                  <h2 className="md:text-2xl font-openSans">
                    {article.Heading.split(":").map((part, index) => (
                      <span key={index} className={index > 0 ? "block" : ""}>
                        {part}
                        {index === 0 && ":"}
                      </span>
                    ))}
                  </h2>
                  <p className="text-md hidden sm:block">
                    {article.Subheading}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex space-x-2 mt-4 mb-6 justify-center">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full border border-Navyblue ${
                index === activeIndex ? "bg-Navyblue" : "bg-White"
              }`}
              aria-label={`Gå til artikel ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

