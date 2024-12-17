//Nyhedsbrev komponent
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// HeadersList for at få adgang til databasen i Supabase
async function FormSubmit(formData) {
  const headersList = {
    "Accept": "*/*",
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aGN2c2F3cnRuaW9yb3FscXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3ODg0NjQsImV4cCI6MjA0ODM2NDQ2NH0.vSHBY-_CVLINk2YnjqchDZ0JlaOMgAzYFB0n63sp61U",
    "prefer": "return=representation",
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify(formData);

  try {
    let res = await fetch("https://kxhcvsawrtnioroqlqtz.supabase.co/rest/v1/NewsLetter", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    if (!res.ok) {
      const errorDetail = await res.json();
      throw new Error(`Error: ${res.status} - ${res.statusText}: ${JSON.stringify(errorDetail)}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Formular komponent
export default function NewsLetterForm() {
  const [state, setState] = useState({ message: '', pending: false });
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({ ...state, pending: true });

    const formData = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
    };

    try {
      await FormSubmit(formData);
      setState({ message: 'Tak for tilmeldingen!', pending: false });
    } catch (error) {
      setState({ message: `Noget gik galt, prøv igen: ${error.message}`, pending: false });
    }
  };

  return (
    <section className="bg-Navyblue flex flex-col items-center justify-center">
      <div className="text-center p-6 max-w-md w-full">
        {/* Header */}
        <Image 
          src="/nyhedsbrevicon.svg"
          alt="nyhedsbrev"
          width={75}
          height={75}
          className="mx-auto mb-4"
        />

        <h2 className="font-openSans text-White mb-2 font-bold text-xl md:text-2xl md:whitespace-nowrap">
          TILMELD DIG VORES NYHEDSBREV
        </h2>

        <p className="hidden md:block text-left text-White mb-6 text-sm md:text-md lg:text-lg">
  Få vores ugentlige nyhedsbrev med de seneste nyheder og største historier om tech og startups direkte i indbakken hver torsdag!
</p>

        {/* Formular */}
        <form 
          onSubmit={handleSubmit}
          className="py-2 w-full"
        >
          <div className="text-center mb-2 text-sm text-White">
            {state.message}
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {/* Fulde navn input */}
            <input
              className="border-2 p-3 w-full bg-Navyblue text-White focus:outline-none focus:ring-2 focus:ring-Red"
              required
              type="text"
              placeholder="Dit fulde navn"
              name="fullname"
            />

            {/* Email input */}
            <input
              className="border-2  p-3 w-full bg-Navyblue text-White focus:outline-none focus:ring-2 focus:ring-Red"
              required
              type="email"
              placeholder="Din email"
              name="email"
            />
          </div>

          {/* Submit button */}
          <button
            aria-disabled={state.pending}
            type="submit"
            className="border-2 font-openSans w-full mt-4 bg-Red hover:bg-hoverbtn text-White p-3 text-xl transition-all duration-200"
          >
            TILMELD
          </button>
        </form>
      </div>
    </section>
  );
}
