import Link from "next/link";

export default function Sidebar({className, activeSection}: {className: string, activeSection: string}) {

  const navLinkClass = (section: string) =>
  activeSection === section
    ? "text-blue-500 font-semibold"
    : "text-neutral-200";
  return (
    <nav className={className}>
      <ul className="gap-12 items-center flex flex-col">
        <li>
          <Link href="#hero" className={navLinkClass('hero')}>Home</Link>
        </li>

        <li>
          <Link href="#project" className={navLinkClass('project')}>Projects</Link>
        </li>

        <li>
          <Link href="#skill" className={navLinkClass('skill')}>Skills</Link>
        </li>

        <li>
          <Link href="#about" className={navLinkClass('about')}>About-Me</Link>
        </li>

        <li>
          <Link href="#contact" className={navLinkClass('contact')}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
