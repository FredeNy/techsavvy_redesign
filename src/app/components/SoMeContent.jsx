
import Image from "next/image";

export default function SoMeContent() {

  return (
    <section className="bg-White p-8">
    <div className="flex pb-8">
    <h2 className="text-2xl font-bold">Følg med</h2>
    <Image 
        src="/playicon.svg" 
        alt="play icon i følg med sektionen"
        width={29} 
        height={29}
        priority 
        className="ml-2"
              />
              </div>
<div className="grid grid-cols-2 md:grid-cols-4">
    <div className="">
      <Image 
        src="/SoMe1.png" 
        alt="Link til SoMe video" 
        width={250} 
        height={400}
        className=""
        priority 
      />
<h3 className="w-2/3">Finalisterne til Nordic PropTech Awards 2025 offentliggjort</h3>
    </div>
    <div className="">
      <Image 
        src="/SoMe2.png" 
        alt="Link til SoMe video" 
        width={250} 
        height={400}
        priority 
      />
<h3 className="w-2/3">For få dage siden skrev de under med EIFO. Nu er Ugens Startup klar til at rydde miner i krigen Ukraine</h3>
    </div>
    <div className="">
      <Image 
        src="/SoMe3.png" 
        alt="Link til SoMe video" 
        width={250} 
        height={400}
        priority 
      />
<h3 className="w-2/3">Et brag af en åbningsfest med bajere og band</h3>
    </div>
    <div className="">
      <Image 
        src="/SoMe4.webP" 
        alt="Link til SoMe video" 
        width={250} 
        height={400}
        priority 
      />
<h3 className="w-2/3">Fynsk robotgigant åbner første udenlandske produktionsanlæg</h3>
    </div>
    </div>
  </section>
  );
}