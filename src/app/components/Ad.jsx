//Annonce komponent
import Image from "next/image";

export default function Ad({ imageSrc, altText = "Annonce" }) {
  return (
    <section className="relative w-full h-[125px] md:h-[200px] lg:h-[400px] flex justify-left">
      <h1 className="absolute z-10 text-xs lg:text-sm font-bold bg-black bg-opacity-50 text-white p-2">
        {altText}
      </h1>

      <div className="absolute inset-0">
      <Image
          src={imageSrc}
          alt={altText}
          layout="responsive"
          width={16}
          height={9}
          priority
          className="responsive-image"
        />
      </div>
    </section>
  );
}

