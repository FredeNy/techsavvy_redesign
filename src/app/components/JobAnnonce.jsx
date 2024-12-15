import Image from "next/image";

export default function JobAnnonce() {

  return (
    <section className="bg-White text-Black">
  <h1 className="font-openSans md:text-2xl font-bold py-8 px-6">JOBANNONCER</h1>

  <div className="text-Black border-t border-b border-EggWhite p-4">
  
  <div className="flex items-center space-x-4">
    <Image 
      src="/logoudenskrift.svg" 
      alt="TechSavvy logo" 
      width={75}
      height={75}
    />
    <h2 className="font-openSans text-lg font-bold md:w-72">Netværkschef - med næse for salg, udvikling og relationer</h2>
  </div>

  <div className="flex flex-wrap mt-2 space-x-4">
    <span className="text-sm text-gray-600">TechSavvy</span>
    <span className="text-sm text-gray-600">Fastansættelse</span>
    <span className="text-sm text-gray-600">København</span>
  </div>
</div>


<div className="text-Black border-t border-b border-EggWhite p-4">
  
  <div className="flex items-center space-x-4">
    <Image 
      src="/logoudenskrift.svg" 
      alt="TechSavvy logo" 
      width={75}
      height={75}
    />
    <h2 className="font-openSans text-lg font-bold md:w-72">Medie konsulent til Danmarks største startupmedie</h2>
  </div>

  <div className="flex flex-wrap mt-2 space-x-4">
    <span className="text-sm text-gray-600">TechSavvy</span>
    <span className="text-sm text-gray-600">Fastansættelse</span>
    <span className="text-sm text-gray-600">København</span>
  </div>
</div>

<div className="text-Black border-t border-b border-EggWhite p-4">
  
  <div className="flex items-center space-x-4">
    <Image 
      src="/logoudenskrift.svg" 
      alt="TechSavvy logo" 
      width={75}
      height={75}
    />
    <h2 className="font-openSans text-lg font-bold">Grafisk designer</h2>
  </div>

  <div className="flex flex-wrap mt-2 space-x-4">
    <span className="text-sm text-gray-600">TechSavvy</span>
    <span className="text-sm text-gray-600">Fastansættelse</span>
    <span className="text-sm text-gray-600">København</span>
  </div>
</div>

</section>
  );
}