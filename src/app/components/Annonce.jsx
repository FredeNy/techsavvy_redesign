import Image from "next/image";

export default function Annonce() {
  return (
    <section className="relative md:w-full h-[400px]">
      <h1 className="text-2xl font-bold">Annonce</h1>

      <div className="absolute inset-0">
        <Image 
          src="/techsavvy_ad_red.webp" 
          alt="Techsavvys logo" 
          layout="fill" 
          objectFit="cover" 
          priority 
        />
      </div>
    </section>
  );
}
