import Link from 'next/link';

export default async function Header() {

  return (
    <>
      <nav className="sticky flex justify-between bg-Navyblue text-White px-2 py-4 2xl:py-2 items-center md:px-10">
        <ul className="flex gap-2">
          <li>
            <Link
              className={`font-bold text-sm sm:text-2xl 2xl:text-xl hover:text-Red`}
              href="/"
              prefetch={false}
            >
              TechSavvy
            </Link>
          </li>
        </ul>

        <ul className="flex items-center gap-4 md:gap-16">
          <li>
            <Link
              href="/Nyheder"
              prefetch={false}
            className="font-bold text-sm md:text-mg 2xl:text-xl hover:text-Red"
            >
              Nyheder
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-sm md:text-mg 2xl:text-xl hover:text-Red"
              href="/Lokalt"
              prefetch={false}
            >
              Lokalt
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-sm md:text-mg 2xl:text-xl hover:text-Red"
              href="/MånedensTema"
              prefetch={false}
            >
              Månedens Tema
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-sm md:text-mg 2xl:text-xl hover:text-Red"
              href="/Magasiner"
              prefetch={false}
            >
              Magasiner
            </Link>
            </li>
            <li>
            <Link
              className="font-bold text-sm md:text-mg 2xl:text-xl hover:text-Red"
              href="/Trends"
              prefetch={false}
            >
              Trends
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
