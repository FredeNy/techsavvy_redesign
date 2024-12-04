// Single page
import React from 'react'
import Image from "next/image";


export async function generateStaticParams() {
  const res = await fetch("https://kxhcvsawrtnioroqlqtz.supabase.co/rest/v1/Articles/");
  const pages = await res.json();

  // generer stier baseret på artiklens slug
  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export default async function Page({ params }) {
  const { slug } = params;
  const res = await fetch(
    `https://kxhcvsawrtnioroqlqtz.supabase.co/rest/v1/Articles/${slug}`,
    {
      headers: {
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aGN2c2F3cnRuaW9yb3FscXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3ODg0NjQsImV4cCI6MjA0ODM2NDQ2NH0.vSHBY-_CVLINk2YnjqchDZ0JlaOMgAzYFB0n63sp61U",
      },
    }
  );

  const articles = await res.json();

  if (!articles.length) {
    return <div>404 - Artikel ikke fundet</div>;
  }

  const article = articles[0];
  
  return (
      <section className="bg-Navyblue text-White p-8">
    
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
          <p className="text-xl font-semibold">{article.Subeading}</p>
          <p className="text-xl font-semibold">{article.Imagetext}</p>
          <p className="text-xl font-semibold">{article.Author}</p>
          <p className="text-xl font-semibold">{article.Date}</p>
          <p className="text-xl font-semibold">{article.Bodytext}</p>

          </div>
        </div>
      ))}
    </div>
  </section>
    );
}
