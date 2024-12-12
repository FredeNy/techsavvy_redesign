
import Image from "next/image";

export default function SoMeContent() {

  return (
    <section className="bg-White">
    <h2 className="text-2xl font-bold">Følg med</h2>
<div className="grid grid-cols-3">
    <div className="">
      <Image 
        src="/techsavvy_ad_red.webp" 
        alt="Techsavvys logo" 
        width={250} 
        height={400}
        priority 
      />
<h3 className="w-2/3">Finalisterne til Nordic PropTech Awards 2025 offentliggjort</h3>
    </div>
    <div className="">
      <Image 
        src="/techsavvy_ad_red.webp" 
        alt="Techsavvys logo" 
        width={250} 
        height={400}
        priority 
      />
<h3 className="w-2/3">For få dage siden skrev de under med EIFO. Nu er Ugens Startup klar til at rydde miner i krigen Ukraine</h3>
    </div>
    <div className="">
      <Image 
        src="/techsavvy_ad_red.webp" 
        alt="Techsavvys logo" 
        width={250} 
        height={400}
        priority 
      />
<h3 className="w-2/3">Et brag af en åbningsfest med bajere og band</h3>
    </div>
    </div>
  </section>
  );
}