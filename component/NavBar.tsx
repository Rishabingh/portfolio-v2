"use client";
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

export default function NavBar() {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState(false);
  // ${scrolled ? "backdrop-blur-md bg-black/30 py-3" : "bg-transparent py-8"}

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`fixed left-0 right-0 top-0 z-40 ${scrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'} transition-all duration-200 ease-in-out`}>
        <nav
          className={`flex justify-between lg:justify-around w-full items-center font-inter transition-all duration-300 px-8`}
        >
          <div>
            <Link href="/">
              <Image
                src="/logo-160.webp"
                alt="rishab logo"
                priority
                className="rounded-lg shadow-lg lg:w-20 lg:h-20 h-12 w-12"
                width={160}
                height={160}
                sizes="80px"
                placeholder="blur"
                blurDataURL="data:image/png;base64,..."
              />
            </Link>
          </div>
          <ul className="gap-12 items-center hidden lg:flex">
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

          <button
            className="block lg:hidden"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            {sidebarOpen ? <IoMdClose className="text-xl font-bold text-neutral-200" /> : <MdMenu className="text-xl font-bold text-neutral-200" />}
          </button>
        </nav>
      </div>

      <Sidebar
        className={`px-3 pb-3 pt-22 bg-black/30 backdrop-blur-md fixed top-11 right-0 bottom-0 ${sidebarOpen ? "translate-x-0" : "translate-x-full"} w-2xs z-30 transition-transform duration-300 `}
      />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
