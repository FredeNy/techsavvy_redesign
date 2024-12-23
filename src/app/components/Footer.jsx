//Footer komponent
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <section className='bg-Navyblue'>
      <div className='ml-8 md:ml-0 grid grid-cols-[200px_1fr] gap-4 md:flex py-4 md:p-4 my-6 sm:justify-around'>
        
      <div className='order-5 md:order-1'>
      <Image 
      src="/logo.svg" 
      alt="TechSavvy logo" 
      width={250}
      height={115}
      className='w-80 md:block'
    />
        </div>

        <div className='order-1 md:order-2'>
          <h2 className='text-White font-bold text-xl mb-2 font-openSans'>Kontakt</h2>
          <p className='text-sm md:text-md text-Grey'>Nannasgade 28</p>
          <p className='text-sm md:text-md text-Grey'>2200, København N</p>
          <p className='text-sm md:text-md text-Grey'>editorial@techsavvy.media</p>
         
        </div>

        <div className='order-4 md:order-3'>
          <h2 className='text-White font-bold text-xl mb-2 font-openSans'>Om os</h2>
          <p className='text-sm md:text-md text-Grey'>Events</p>
          <p className='text-sm md:text-md text-Grey'>Jobs</p>
        </div>


        <div className='order-3 md:order-4'>
          <h2 className='text-White font-bold text-xl mb-2 font-openSans'>Startup</h2>
          <p className='text-sm md:text-md text-Grey'>Startup ordbog</p>
          <p className='text-sm md:text-md text-Grey'>Investeringer</p>
        </div>
        <div className="order-2 md:order-5">
  <h2 className="text-White font-bold text-xl mb-2 font-openSans">Følg med</h2>
  <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-2">
    <Image
      src="/facebook.svg"
      alt="Link til Techsavvys Facebook profil"
      width={40}
      height={40}
     
    />
    <Image
      src="/instagram.svg"
      alt="Link til Techsavvys Instagram profil"
      width={40}
      height={40}
      
    />
    <Image
      src="/linkedin.svg"
      alt="Link til Techsavvys LinkedIn profil"
      width={40}
      height={40}
      
    />
    <Image
      src="/x.svg"
      alt="Link til Techsavvys X profil"
      width={40}
      height={40}
      
    />
  </div>
</div>

      </div>
      <section className='font-openSans p-4 md:p-2 bg-Darkblue border-t border-White'>
      <div className='mx-auto my-2'>
        
        <div className='text-White flex text-xs md:text-lg md:ml-16'>
          <p className=''>Cookie- og Privatslivpolitik</p>
          <span className='mx-2'>|</span>
          <p className='font-bold'>Partnerskaber og annoncering</p>      
        </div>

      </div>
      
    </section>
 
    </section>
    
  );
}
