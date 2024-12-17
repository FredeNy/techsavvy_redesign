//Følg med komponent
"use client"
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

export default function SoMeContent() {
  const articles = [
    {
      image: "/SoMe1.png",
      title: "Finalisterne til Nordic PropTech Awards 2025 offentliggjort",
    },
    {
      image: "/SoMe2.png",
      title: "For få dage siden skrev de under med EIFO",
    },
    {
      image: "/SoMe3.png",
      title: "Et brag af en åbningsfest med bajere og band",
    },
    {
      image: "/SoMe4.webp",
      title: "Fynsk robotgigant åbner første udenlandske produktionsanlæg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  const handleNext = () => {
    if (activeIndex < articles.length - 1) setActiveIndex(activeIndex + 1);
  };

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  return (
    <section className="bg-White pb-6">
      <div className="flex pb-6 md:pl-6 pt-6 pl-4">
        <h2 className="font-openSans text-xl md:text-2xl font-bold">FØLG MED</h2>
        <Image
          src="/playicon.svg"
          alt="play icon i følg med sektionen"
          width={22}
          height={22}
          priority
          className="ml-2"
        />
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden" {...handlers}>
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${activeIndex * (100 / 2.1)}%)`,
          }}
        >
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2 md:px-4"
              style={{
                flex: "0 0 calc(30% - 6px)",
                marginRight: "0%", 
              }}
            >
              <div className="w-full">
                <Image
                  src={article.image}
                  alt={`Artikel ${index + 1}`}
                  width={400}
                  height={500}
                  className=""
                  priority
                />
                <h3 className="font-openSans mt-2 text-sm md:text-base">{article.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indikatorer */}
      <div className="flex space-x-2 my-4 justify-center">
        {articles.map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 rounded-full border border-Navyblue bg-White"
          />
        ))}
      </div>
    </section>
  );
}

