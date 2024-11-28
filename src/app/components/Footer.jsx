import React from 'react';

export default function Footer() {
  return (
    <section className='p-6 md:p-2 bg-Navyblue'>
      <div className='mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 mt-8 mb-8'>
        
      <div className='order-1 md:order-1'>
          <h2 className={`text-White font-bold text-2xl`}>TECHSAVVY</h2>
          <p className='text-lg text-White'>Danmarks største startup medie</p>
        </div>

        <div className='order-2 md:order-2'>
          <h2 className='text-White font-bold text-3xl mb-2'>Kontakt</h2>
          <p className='text-md md:text-lg text-White hover:text-Red'>Nannasgade 28</p>
          <p className='text-md md:text-lg text-White hover:text-Red'>2200, København N</p>
          <p className='text-md md:text-lg text-White hover:text-Red'>editorial@techsavvy.media</p>
         
        </div>

        <div className='order-3 md:order-3'>
          <h2 className='text-White font-bold text-3xl mb-2'>Om os</h2>
          <p className='text-md md:text-lg text-White'>Events</p>
          <p className='text-md md:text-lg text-White'>Jobs</p>
        </div>


        <div className='order-3 md:order-4'>
          <h2 className='text-White font-bold text-3xl mb-2'>Startup</h2>
          <p className='text-md md:text-lg text-White'>Startup ordbog</p>
          <p className='text-md md:text-lg text-White'>Investeringer</p>
        </div>

        <div className='order-3 md:order-5'>
          <h2 className='text-White font-bold text-3xl mb-2'>Følg med</h2>
          <p className='text-md md:text-lg text-White'>Facebook</p>
          <p className='text-md md:text-lg text-White'>Instagram</p>
          <p className='text-md md:text-lg text-White'>LinkedIn</p>
          <p className='text-md md:text-lg text-White'>X</p>
          
        </div>

      </div>
      <section className='p-6 md:p-2 bg-Darkblue'>
      <div className='mx-auto grid grid-cols-2 md:grid-cols-2 mt-2 mb-2'>
        
        <div className=''>
          <h2 className='text-White font-bold text-xl'>Cookie- og Privatslivpolitik</h2>
        </div>

        <div className=''>
          <h2 className='text-White font-bold text-xl'>Partnerskaber og annoncering</h2>      
        </div>

      </div>
    </section>
    </section>
    
  );
}
