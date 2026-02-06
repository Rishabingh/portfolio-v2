import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  // ${scrolled ? "backdrop-blur-md bg-black/30 py-3" : "bg-transparent py-8"}
  return (
    <div className="fixed left-0 right-0 top-0 z-40 hidden lg:block bg-neutral-400/30 backdrop-blur-md">
      <nav
        className={`flex justify-around w-full items-center font-inter transition-all duration-300 px-8`}
      >
        <div>
          <Link href="/">
            <Image
              src="/logo-160.webp"
              alt="rishab logo"
              priority
              className="rounded-lg shadow-lg w-20 h-20"
              width={160}
              height={160}
              sizes="80px"
              placeholder="blur"
              blurDataURL="data:image/png;base64,..."
            />
          </Link>
        </div>
        <ul className="flex gap-12 items-center">
          <li>
            <Link
              href="#hero"
            >
              Home
            </Link>
          </li>

          <li>
            <Link href="#project">Projects</Link>
          </li>

          <li>
            <Link href="#skill">Skills</Link>
          </li>

          <li>
            <Link
              href="#about"
            >
              About-Me
            </Link>
          </li>

          <li>
            <Link
              href="#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
