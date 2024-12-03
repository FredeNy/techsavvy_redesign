import React from 'react';

export default function Footer() {
  return (
    <section className='md:py-2 bg-Navyblue'>
      <div className='pt-2 md:px-2 mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 mb-8'>
        
      <div className='order-4 md:order-1'>
      <img src="/logo.svg" alt="Techsavvys logo"height={115} width={300}/>
        </div>

        <div className='order-2 md:order-2'>
          <h2 className='text-White font-bold text-3xl mb-2'>Kontakt</h2>
          <p className='text-md md:text-lg text-White hover:underline active:underline'>Nannasgade 28</p>
          <p className='text-md md:text-lg text-White hover:underline active:underline'>2200, København N</p>
          <p className='text-md md:text-lg text-White hover:underline active:underline'>editorial@techsavvy.media</p>
         
        </div>

        <div className='order-3 md:order-3'>
          <h2 className='text-White font-bold text-3xl mb-2'>Om os</h2>
          <p className='text-md md:text-lg text-White hover:underline active:underline'>Events</p>
          <p className='text-md md:text-lg text-White hover:underline active:underline'>Jobs</p>
        </div>


        <div className='order-3 md:order-4'>
          <h2 className='text-White font-bold text-3xl mb-2'>Startup</h2>
          <p className='text-md md:text-lg text-White hover:underline active:underline'>Startup ordbog</p>
          <p className='text-md md:text-lg text-White hover:underline active:underline'>Investeringer</p>
        </div>

        <div className='order-3 md:order-5'>
          <h2 className='text-White font-bold text-3xl mb-2'>Følg med</h2>
          <div className='flex gap-2'>
          <img src="/facebook.svg" alt="Link til Techsavvys Facebook profil"/>
          <img src="/instagram.svg" alt="Link til Techsavvys Instagram profil"/>
          <img src="/linkedin.svg" alt="Link til Techsavvys LinkedIn profil"/>
          <img src="/x.svg" alt="Link til Techsavvys X profil"/>
          </div>
          
        </div>

      </div>
      <section className='p-6 md:p-2 bg-Darkblue'>
      <div className='mx-auto grid grid-cols-2 md:grid-cols-2 my-2'>
        
        <div className='flex gap-4 text-sm md:text-xl'>
          <p className='text-White font-bold hover:underline active:underline'>Cookie- og Privatslivpolitik</p>
          <span className='text-White'>|</span>
          <p className='text-White font-bold hover:underline active:underline'>Partnerskaber og annoncering</p>      
        </div>

      </div>
    </section>
    </section>
    
  );
}
