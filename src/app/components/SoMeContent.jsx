
import Image from "next/image";

export default function SoMeContent() {

  return (
    <section className="bg-White p-6 font-openSans">
    <div className="flex pb-8">
    <h2 className="text-2xl font-bold">FØLG MED</h2>
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
<h3 className="md:w-3/4">Finalisterne til Nordic PropTech Awards 2025 offentliggjort</h3>
    </div>
    <div className="">
      <Image 
        src="/SoMe2.png" 
        alt="Link til SoMe video" 
        width={250} 
        height={400}
        priority 
      />
<h3 className="md:w-3/4">For få dage siden skrev de under med EIFO. Nu er Ugens Startup klar</h3>
    </div>
    <div className="">
      <Image 
        src="/SoMe3.png" 
        alt="Link til SoMe video" 
        width={250} 
        height={400}
        priority 
      />
<h3 className="md:w-3/4">Et brag af en åbningsfest med bajere og band</h3>
    </div>
    <div className="">
      <Image 
        src="/SoMe4.webp" 
        alt="Link til SoMe video" 
        width={250} 
        height={400}
        priority 
      />
<h3 className="md:w-3/4">Fynsk robotgigant åbner første udenlandske produktionsanlæg</h3>
    </div>
    </div>
  </section>
  );
}