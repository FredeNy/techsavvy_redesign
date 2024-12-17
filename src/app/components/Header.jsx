"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState({
    lokalt: false,
    tema: false,
    magasiner: false,
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
    <header className='sticky top-0 z-50'>
    <nav className="font-openSans font-extrabold bg-Darkblue text-White p-4 flex justify-between items-center">

        {/* Sekundær navigation */}
        <Link href="/">

          <Image
      src="/logo.svg"
      alt="Techsavvys logo"
      width={250}
      height={250}
      className="md:hidden" 
      
    />
        </Link>
        <ul className="hidden md:flex gap-8 items-center mx-4">
          <li>
            <Link href="https://techsavvy.academy/" className="text-sm md:text-md hover:underline">
              Academy
            </Link>
          </li>
          <li>
            <Link href="https://techsavvy.agency/" className=" text-sm md:text-md hover:underline">
              Agency
            </Link>
          </li>
          <li>
            <Link href="/" className="font-bold text-sm md:text-md hover:underline">
              Community+
            </Link>
          </li>
        </ul>

        {/* Burgermenu knap */}
        <button
          className="text-White md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="square" strokeLinejoin="square" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </nav>

      {/* Primær navigation */}
      <nav className="font-openSans sticky top-0 z-50 hidden md:flex justify-between bg-Navyblue text-White p-2 border-y border-White">
      <Link href="/">

          <Image
      src="/logo.svg"
      alt="Techsavvys logo"
      width={250}
      height={250}
      className="h-16" 
      
    />
        </Link>
        <ul className="flex gap-8 items-center mx-4">
          
          <li>
            <Link href="/" className="text-sm md:text-lg hover:underline">
              Nyheder
            </Link>
          </li>
          <li className="relative group">
            <button className="text-sm md:text-lg hover:underline flex items-center">
              Lokalt
              <Image
      src="/dropdownicon.svg"
      alt="Dropdown icon"
      width={250}
      height={250}
      className="w-4 h-4 ml-2" 
      
    />
            </button>
            <ul className="absolute hidden group-hover:block bg-Red text-White mt-2">
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="">Aalborg</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="">Aarhus</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="/Lokalt">København</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="">Odense</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button className="text-sm md:text-lg hover:underline flex items-center">
              Månedens Tema
              <Image
      src="/dropdownicon.svg"
      alt="Dropdown icon"
      width={250}
      height={250}
      className="w-4 h-4 ml-2" 
      
    />
            </button>
            <ul className="absolute hidden group-hover:block bg-Red text-White mt-2">
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="">Krypto & Blockchain</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="">Tech for the planet</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="">Inkluderende innovation</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="">Fremtidens arbejdsliv</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button className="text-sm md:text-lg hover:underline flex items-center">
              Magasiner
              <Image
      src="/dropdownicon.svg"
      alt="Dropdown icon"
      width={250}
      height={250}
      className="w-4 h-4 ml-2" 
      
    />
            </button>
            <ul className="absolute hidden group-hover:block bg-Red text-White mt-2 shadow-lg">
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="">From University to Unicorn</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="">The Startup Bible</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="">The Guide</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      </header>

     {/* Mobilmenu */}
{menuOpen && (
  <div className="font-openSans bg-Red text-White fixed inset-x-0 top-0 z-50 border border-White max-h-screen overflow-auto">
    <button
      className="text-White absolute top-2 right-2"
      onClick={() => setMenuOpen(false)}
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="square" strokeLinejoin="square" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <ul className="mt-12">
      <li>
        <Link 
          href="/" 
          className="py-4 pl-2 block text-lg border-y border-White hover:bg-Hoverbtn"
          onClick={() => setMenuOpen(false)} // Lukker menuen
        >
          Nyheder
        </Link>
      </li>
      <li>
      <button
  className="flex items-center py-4 pl-2 text-lg w-full text-left border-b border-White hover:bg-Hoverbtn"
  onClick={() => toggleDropdown('lokalt')}
>
  Lokalt
  <Image
    src="/dropdownicon.svg"
    alt="Dropdown icon"
    width={250}
    height={250}
    className="w-4 h-4 ml-2" 
  />
</button>

        {dropdownOpen.lokalt && (
          <ul className="font-inter border-b border-White bg-Hoverbtn">
            <li className='py-4 pl-4 border-b border-White'><Link href="" onClick={() => setMenuOpen(false)}>Aalborg</Link></li>
            <li className='py-4 pl-4 border-b border-White'><Link href="" onClick={() => setMenuOpen(false)}>Aarhus</Link></li>
            <li className='py-4 pl-4 border-b border-White'><Link href="/Lokalt" onClick={() => setMenuOpen(false)}>København</Link></li>
            <li className='py-4 pl-4 order-b border-White'><Link href="" onClick={() => setMenuOpen(false)}>Odense</Link></li>
          </ul>
        )}
      </li>
      <li>
        <button
          className="flex items-center py-4 pl-2 text-lg w-full text-left border-b border-White hover:bg-Hoverbtn"
          onClick={() => toggleDropdown('tema')}
        >
          Månedens Tema
          <Image
    src="/dropdownicon.svg"
    alt="Dropdown icon"
    width={250}
    height={250}
    className="w-4 h-4 ml-2" 
  />
        </button>
        {dropdownOpen.tema && (
         <ul className="font-inter border-b border-White bg-Hoverbtn">
            <li className='py-4 pl-4 border-b border-White'><Link href="" onClick={() => setMenuOpen(false)}>Krypto & Blockchain</Link></li>
            <li className='py-4 pl-4 border-b border-White'><Link href="" onClick={() => setMenuOpen(false)}>Tech for the planet</Link></li>
            <li className='py-4 pl-4 border-b border-White'><Link href="" onClick={() => setMenuOpen(false)}>Inkluderende innovation</Link></li>
            <li className='py-4 pl-4 border-b border-White'><Link href="" onClick={() => setMenuOpen(false)}>Fremtidens arbejdsliv</Link></li>
          </ul>
        )}
      </li>
      <li>
        <button
          className="flex items-center py-4 pl-2 text-lg w-full text-left border-b border-White hover:bg-Hoverbtn"
          onClick={() => toggleDropdown('magasiner')}
        >
          Magasiner
          <Image
    src="/dropdownicon.svg"
    alt="Dropdown icon"
    width={250}
    height={250}
    className="w-4 h-4 ml-2" 
  />
        </button>
        {dropdownOpen.magasiner && (
          <ul className="font-inter border-b border-White bg-Hoverbtn">
            <li className='py-4 pl-4 border-b border-White'><Link href="" onClick={() => setMenuOpen(false)}>From University to Unicorn</Link></li>
            <li className='py-4 pl-4 border-b border-White'><Link href="" onClick={() => setMenuOpen(false)}>The Startup Bible</Link></li>
            <li className='py-4 pl-4 border-b border-White'><Link href="" onClick={() => setMenuOpen(false)}>The Guide</Link></li>
          </ul>
        )}
      </li>
      <li>
        <Link 
          href="https://techsavvy.academy/" 
          className="py-4 pl-2 block text-lg border-b border-White hover:bg-Hoverbtn"
          onClick={() => setMenuOpen(false)} // Lukker menuen
        >
          Academy
        </Link>
      </li>
      <li>
        <Link 
          href="https://techsavvy.agency/" 
          className="py-4 pl-2 block text-lg border-b border-White hover:bg-Hoverbtn"
          onClick={() => setMenuOpen(false)} // Lukker menuen
        >
          Agency
        </Link>
      </li>
      <li>
        <Link 
          href="/" 
          className="py-4 pl-2 block text-lg border-b border-White hover:bg-Hoverbtn"
          onClick={() => setMenuOpen(false)} // Lukker menuen
        >
          Community+
        </Link>
      </li>
    </ul>
  </div>
)}

    </>
  );
}