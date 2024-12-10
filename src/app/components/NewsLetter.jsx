"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
//HeadersList for at få adgang til databasen i Supabase
async function FormSubmit(formData) {
  const headersList = {
    "Accept": "*/*",
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aGN2c2F3cnRuaW9yb3FscXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3ODg0NjQsImV4cCI6MjA0ODM2NDQ2NH0.vSHBY-_CVLINk2YnjqchDZ0JlaOMgAzYFB0n63sp61U",
    "prefer": "return=representation",
    "Content-Type": "application/json"
  };

  //Konvertere data til JSON streng
  const bodyContent = JSON.stringify(formData);

  //Sender post request
  try {
    let res = await fetch("https://kxhcvsawrtnioroqlqtz.supabase.co/rest/v1/NewsLetter", { 
      method: "POST",
      body: bodyContent,
      headers: headersList
    });

    //Hvis request fejler så vis fejlen
    if (!res.ok) {
      const errorDetail = await res.json();
      throw new Error(`Error: ${res.status} - ${res.statusText}: ${JSON.stringify(errorDetail)}`);
    }

    //Parser svaret som JSON
    const data = await res.json();
    
    //Returnere den parset data
    return data;
  } catch (error) {
    throw error;
  }
}

//Definere GuestForm funktionen
export default function NewsLetterForm() {
  const [state, setState] = useState({ message: '', pending: false });
  const router = useRouter();
  
  //Funktionen som sender dataen til databasen når submit knappen klikkes på
  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({ ...state, pending: true });

    //Dataen fra de input felter som skal sendes til databasen
    const formData = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
      
    };

    //Hvis det lykkedes at sende dataen, så vis 'Form submitted successfully!' og send kunden over på næste side i booking flowet
    try {
      const response = await FormSubmit(formData);
     
      
      
      //Hvis det fejler, så vis `Form submission failed`
    } catch (error) {
      setState({ message: `Form submission failed: ${error.message}`, pending: false });
    }
    
    
  };

  return (
    <section className="bg-Navyblue flex flex-col items-center py-4">

       <Image 
          src="/nyhedsbrevicon.svg" 
          alt="nyhedsbrev" 
        width={100}
        height={100}
           
        />
      <h2 className="text-White mb-2 font-bold text-2xl">TILMELD DIG VORES NYHEDSBREV</h2>
      <p className='text-White w-2/3'>Få vores ugentlige nyhedsbrev med de seneste nyheder og største historier om tech og startups direkte i indbakken hver torsdag!</p>

      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="text-md text-White py-2">
          {state.message}
        </div>
        

        <div className="flex flex-wrap mb-6">
          <div className="w-full mb-6 md:mb-0">
            <label>
              <span className='text-White'>Fulde navn</span><span className='text-White'> *</span>
              <input
                className="border-2 border-White p-2 w-full bg-Navyblue focus:outline-none focus:ring focus:ring-Red text-White"
                required
                type="text"
                placeholder="skriv dit fulde navn"
                name="fullname"
              />
            </label>
          
          <label>
            <span className='text-White'>Email</span><span className='text-White'> *</span>
            <input
              className="border-2 border-White p-2 w-full bg-Navyblue  focus:outline-none focus:ring focus:ring-Red text-White"
              required
              type="email"
              placeholder="Email"
              name="email"
            />
            
          </label>
          </div>
        </div>
          

        <div>
          <button
            aria-disabled={state.pending}
            type="submit"
            className="text-center p-2  bg-Red text-White text-xl font-bold border border-White w-96 sm:w-60"
          >
            TILMELD
          </button>
        </div>
      </form>
    </section>
  );
}