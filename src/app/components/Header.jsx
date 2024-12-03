import Link from 'next/link';

export default async function Header() {

  return (
    <>
     <nav className="sticky bg-Darkblue text-White px-2 py-4 2xl:py-2 items-center md:px-10 flex justify-end">
  <ul className="flex gap-4 md:gap-16">
  <li>
  <Link
    href="/"
    prefetch={false}
    className="font-bold text-sm md:text-xl 2xl:text-xl text-White hover:underline active:underline"
  >
    Academy
  </Link>
</li>

    <li>
      <Link
        href="/"
        prefetch={false}
        className="font-bold text-sm md:text-xl 2xl:text-xl text-White hover:underline active:underline"
      >
        Agency
      </Link>
    </li>
    <li>
      <Link
        href="/"
        prefetch={false}
        className="font-bold text-sm md:text-xl 2xl:text-xl text-White hover:underline active:underline"
      >
        Community+
      </Link>
    </li>
  </ul>
</nav>


      <nav className="sticky flex justify-between bg-Navyblue text-White px-2 py-4 2xl:py-2 items-center md:px-10">
        <ul className="flex gap-2">
          <li>
            <Link
              href="/"
              prefetch={false}
            >
               <img src="/logo.svg" alt="Techsavvys logo" height={115} width={300}/>
            </Link>
          </li>
        </ul>

        <ul className="flex items-center gap-4 md:gap-16">
          <li>
            <Link
              href="/Nyheder"
              prefetch={false}
            className="font-bold text-sm md:text-xl 2xl:text-xl hover:underline active:underline"
            >
              Nyheder
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-sm md:text-xl 2xl:text-xl hover:underline active:underline"
              href="/Lokalt"
              prefetch={false}
            >
              Lokalt
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-sm md:text-xl 2xl:text-xl hover:underline active:underline"
              href="/MånedensTema"
              prefetch={false}
            >
              Månedens Tema
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-sm md:text-xl 2xl:text-xl hover:underline active:underline"
              href="/Magasiner"
              prefetch={false}
            >
              Magasiner
            </Link>
            </li>
        </ul>
      </nav>
    </>
  );
}
