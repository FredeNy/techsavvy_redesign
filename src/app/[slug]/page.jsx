import React from 'react'
import Image from "next/image";
import ArticleCard from "@/app/components/ArticleCard"
const supabaseUrl = "https://kxhcvsawrtnioroqlqtz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aGN2c2F3cnRuaW9yb3FscXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3ODg0NjQsImV4cCI6MjA0ODM2NDQ2NH0.vSHBY-_CVLINk2YnjqchDZ0JlaOMgAzYFB0n63sp61U";

export async function generateStaticParams() {
  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/Articles?select=slug`, {
      headers: {
        apikey: supabaseKey,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error('Failed to fetch articles');

    const articles = await res.json();

    return articles.map((article) => ({
      slug: article.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function Page({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(
      `${supabaseUrl}/rest/v1/Articles?slug=eq.${slug}`,
      {
        headers: {
          apikey: supabaseKey,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) throw new Error('Failed to fetch article');

    const articles = await res.json();

    if (!articles.length) {
      return <div>404 - Artikel ikke fundet</div>;
    }

    const article = articles[0];

    return (
      <section className="bg-EggWhite text-White md:px-16 py-4">
        <div className="text-Black ">
          <div className="bg-White" key={article.id}>
            <div className='p-6'>
          <p className="text-2xl font-semibold">{article.Heading.split(":").map((part, index) => (
    <span key={index} className={index > 0 ? "block" : ""}>
      {part}{index === 0 && ":"}
    </span>
  ))}</p>
          <p className="text-md font-medium">{article.Subheading}</p>
          </div>
            <Image
              alt={article.Heading}
              src={
                article.Image.startsWith("http")
                  ? article.Image.trim()
                  : `${supabaseUrl}/storage/v1/object/public/images/${article.Image.trim()}`
              }
              width={1000}
              height={800}
              className=" w-full"
            />
            <div className="mx-6">
              <h2 className="bg-Red text-White px-2 py-1 inline-block">
                {article.Category}
              </h2>
             
              <p className="text-xl font-normal py-6">{article.Imagetext}</p>
              <div className='border-t border-b border-EggWhite py-6'>
              <p className="text-xl font-medium">Af {article.Author}<span className=''> {article.Date} </span></p>
              </div>
              <p className="text-xl font-medium py-4">{article.Bodytext}</p>
            </div>
            <div>
              <ArticleCard/>
              </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return <div>Error: Could not load article</div>;
  }
}

