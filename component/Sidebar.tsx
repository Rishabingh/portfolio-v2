import Link from "next/link";

export default function Sidebar({className}: {className: string}) {
  return (
    <nav className={className}>
      <ul className="gap-12 items-center flex flex-col">
        <li>
          <Link href="#hero">Home</Link>
        </li>

        <li>
          <Link href="#project">Projects</Link>
        </li>

        <li>
          <Link href="#skill">Skills</Link>
        </li>

        <li>
          <Link href="#about">About-Me</Link>
        </li>

        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
