"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <header className="sticky top-0 z-50">
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
              <Link href="https://techsavvy.agency/" className="text-sm md:text-md hover:underline">
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

        {/* Primær navigation med dropdown */}
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

            {/* Lokalt Dropdown Menu */}
            <li className="relative">
              <button
                className="text-sm md:text-lg flex items-center"
                onClick={() => toggleDropdown("lokalt")}
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
                <ul className="absolute bg-Red text-White mt-2">
                  <li className="p-2  border border-White">
                    <Link href="">Aalborg</Link>
                  </li>
                  <li className="p-2 border border-White">
                    <Link href="">Aarhus</Link>
                  </li>
                  <li className="p-2 border border-White">
                    <Link href="/Lokalt">København</Link>
                  </li>
                  <li className="p-2 border border-White">
                    <Link href="">Odense</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Månedens Tema Dropdown Menu */}
            <li className="relative">
              <button
                className="text-sm md:text-lg flex items-center"
                onClick={() => toggleDropdown("tema")}
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
                <ul className="absolute bg-Red text-White mt-2">
                  <li className="p-2 border border-White">
                    <Link href="">Krypto & Blockchain</Link>
                  </li>
                  <li className="p-2 border border-White">
                    <Link href="">Tech for the planet</Link>
                  </li>
                  <li className="p-2 border border-White">
                    <Link href="">Inkluderende innovation</Link>
                  </li>
                  <li className="p-2 border border-White">
                    <Link href="">Fremtidens arbejdsliv</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Magasiner Dropdown Menu */}
            <li className="relative">
              <button
                className="text-sm md:text-lg flex items-center"
                onClick={() => toggleDropdown("magasiner")}
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
                <ul className="absolute bg-Red text-White mt-2">
                  <li className="p-2 border border-White">
                    <Link href="">From University to Unicorn</Link>
                  </li>
                  <li className="p-2 border border-White">
                    <Link href="">The Startup Bible</Link>
                  </li>
                  <li className="p-2 border border-White">
                    <Link href="">The Guide</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}