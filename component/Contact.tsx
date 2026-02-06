"use client"

import { IoMail } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";

export default function Contact() {

  const [copy, setCopy] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.navigator.clipboard.writeText('rishabsiingh@outlook.com');
    setCopy(true);
    setTimeout(() => {
      setCopy(false)
    }, 2000)
  }
  return (
    <div className="w-[75vw] mx-auto pt-32" id="contact">
      <div className="text-2xl font-poppins text-blue-500">Contact</div>

      <div className="mx-auto w-fit text-2xl pt-10">
        I&apos;m open to opportunities and collaborations,
        Feel free to reach out.
      </div>

      <div className="w-xs mx-auto mt-10 flex flex-col items-center justify-center">
        <div className="flex gap-2 items-center">
          <a 
          href="mailto:rishabsiingh@outlook.com"
          className="bg-neutral-800 p-1 rounded-md flex items-center gap-1.5 justify-center hover:bg-neutral-700"
          ><IoMail className="text-xl" /> rishabsiingh@outlook.com</a>

          <button className={`px-2 py-1 cursor-pointer rounded-md ${copy ? "bg-blue-500 hover:bg-blue-500" : "bg-neutral-800 hover:bg-neutral-700"}`}
          onClick={(e) => handleClick(e)}
          >{copy ? "copied" : "copy"}</button>
          
          </div>
        <div className="flex gap-4 text-2xl w-fit mx-auto mt-6">
          <a href="https://x.com/rishabsiingh" 
            target="_blank"
            rel="noopener noreferrer"
           className="hover:text-blue-500"><FaSquareXTwitter /></a>

          <a 
          href="https://www.linkedin.com/in/rishabsingh2/" 
          className="hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
          ><FaLinkedin /></a>
        </div>
      </div>

    </div>
  )
}