"use client";
import { useState } from 'react';
import Link from 'next/link';

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
      <nav className="sticky bg-Darkblue text-White p-4 flex justify-between items-center">
        {/* Sekundær navigation */}
        <Link href="/">
          <img src="/logo.svg" alt="Techsavvys logo" className=" h-12 md:hidden" />
        </Link>
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link href="https://techsavvy.academy/" className="font-bold text-sm md:text-lg hover:underline">
              Academy
            </Link>
          </li>
          <li>
            <Link href="https://techsavvy.agency/" className="font-bold text-sm md:text-lg hover:underline">
              Agency
            </Link>
          </li>
          <li>
            <Link href="/" className="font-bold text-sm md:text-lg hover:underline">
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
            <path strokeLinecap="straight" strokeLinejoin="straight" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </nav>

      {/* Primær navigation */}
      <nav className="sticky hidden md:flex justify-between bg-Navyblue text-White px-4 py-4 border-y border-White">
      <Link href="/">
          <img src="/logo.svg" alt="Techsavvys logo" className="h-20" />
        </Link>
        <ul className="flex gap-8 items-center">
          
          <li>
            <Link href="/" className="font-bold text-sm md:text-lg hover:underline">
              Nyheder
            </Link>
          </li>
          <li className="relative group">
            <button className="font-bold text-sm md:text-lg hover:underline flex items-center">
              Lokalt
              <img
                src="/dropdownicon.svg"
                alt="Dropdown icon"
                className="w-4 h-4 ml-2"
              />
            </button>
            <ul className="absolute hidden group-hover:block bg-Red text-White mt-2">
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="/Lokalt">Aalborg</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="/Lokalt">Aarhus</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="/Lokalt">København</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="/Lokalt">Odense</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button className="font-bold text-sm md:text-lg hover:underline flex items-center">
              Månedens Tema
              <img
                src="/dropdownicon.svg"
                alt="Dropdown icon"
                className="w-4 h-4 ml-2"
              />
            </button>
            <ul className="absolute hidden group-hover:block bg-Red text-White mt-2">
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="/">Krypto & Blockchain</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="/">Tech for the planet</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="/">Inkluderende innovation</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="/">Fremtidens arbejdsliv</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button className="font-bold text-sm md:text-lg hover:underline flex items-center">
              Magasiner
              <img
                src="/dropdownicon.svg"
                alt="Dropdown icon"
                className="w-4 h-4 ml-2"
              />
            </button>
            <ul className="absolute hidden group-hover:block bg-Red text-White mt-2 shadow-lg">
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="/">From University to Unicorn</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="/">The Startup Bible</Link>
              </li>
              <li className="p-2 hover:bg-gray-200 border border-White">
                <Link href="/">The Guide</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Mobilmenu */}
      {menuOpen && (
        <div className="bg-Red text-White fixed inset-x-0 top-0 z-50 border border-White max-h-screen overflow-auto">
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
              <Link href="/" className="py-4 pl-2 block font-bold text-lg border-y border-White hover:bg-Hoverbtn">
                Nyheder
              </Link>
            </li>
            <li>
              <button
                className="py-4 pl-2 block font-bold text-lg w-full text-left border-b border-White hover:bg-Hoverbtn"
                onClick={() => toggleDropdown('lokalt')}
              >
                Lokalt
              </button>
              {dropdownOpen.lokalt && (
                <ul className="pl-4 space-y-2 py-4 border-b border-White bg-Hoverbtn">
                  <li className=''><Link href="/Lokalt">Aalborg</Link></li>
                  <li className=''><Link href="/Lokalt">Aarhus</Link></li>
                  <li className=''><Link href="/Lokalt">København</Link></li>
                  <li className=''><Link href="/Lokalt">Odense</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button
                className="py-4 pl-2 block font-bold text-lg w-full text-left border-b border-White hover:bg-Hoverbtn"
                onClick={() => toggleDropdown('tema')}
              >
                Månedens Tema
              </button>
              {dropdownOpen.tema && (
                <ul className="pl-4 space-y-2 py-4 border-b border-White bg-Hoverbtn">
                  <li><Link href="/">Krypto & Blockchain</Link></li>
                  <li><Link href="/">Tech for the planet</Link></li>
                  <li><Link href="/">Inkluderende innovation</Link></li>
                  <li><Link href="/">Fremtidens arbejdsliv</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button
                className="py-4 pl-2 block font-bold text-lg w-full text-left border-b border-White hover:bg-Hoverbtn"
                onClick={() => toggleDropdown('magasiner')}
              >
                Magasiner
              </button>
              {dropdownOpen.magasiner && (
                <ul className="pl-4 space-y-2 py-4 border-b border-White bg-Hoverbtn">
                  <li className=''><Link href="/">From University to Unicorn</Link></li>
                  <li><Link href="/">The Startup Bible</Link></li>
                  <li><Link href="/">The Guide</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link href="https://techsavvy.academy/" className="py-4 pl-2 block font-bold text-lg border-b border-White hover:bg-Hoverbtn">
                Academy
              </Link>
            </li>
            <li>
              <Link href="https://techsavvy.agency/" className="py-4 pl-2 block font-bold text-lg border-b border-White hover:bg-Hoverbtn">
                Agency
              </Link>
            </li>
            <li>
              <Link href="/" className="py-4 pl-2 block font-bold text-lg border-b border-White hover:bg-Hoverbtn">
                Community+
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}