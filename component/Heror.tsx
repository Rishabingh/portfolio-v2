import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";


export default function Hero() {
  return (
    <>
      <section className="relative h-[85vh] w-full">
        <Image
          src="/bg-portfolio.webp"
          alt="hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="relative z-10 flex h-full items-center justify-center text-neutral-300">

          <div className="max-w-xs pt-50">


            <div>
              <div className="text-sm text-neutral-400 tracking-wide">Hey, there I am</div>
              <div className='font-poppins text-7xl text-blue-500 font-bold'>Rishab</div>
              <div>
                <div className="flex gap-2.5">
                  <div className="text-7xl text-blue-500 font-poppins">Singh</div>

                  <Image
                    src="/myphoto-300.webp"
                    alt="my-photo"
                    width={300}
                    height={300}
                    className="grayscale-100 w-20 hover:grayscale-0 transition-all ease-in-out duration-200"
                  />
                </div>
              </div>
            </div>

            <div className="text-wrap pt-5 leading-relaxed">
              I’m Based in Delhi, I build full-stack web applications using React, Next.js, Express.js, and MongoDB, with a focus on clean, scalable, and maintainable code.
            </div>

            <div className="flex flex-col pt-5 gap-4">
              <div className="flex gap-2 items-center border-2 border-blue-500 rounded-2xl py-2 px-4 hover:bg-blue-500 cursor-pointer transition-all ease-in-out duration-300 text-blue-500 hover:text-white w-44">
                Download CV
                <MdOutlineFileDownload className="text-2xl" />
              </div>
              <div className="flex gap-2">
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-center border-2 border-blue-500 rounded-full hover:bg-blue-500 cursor-pointer transition-all ease-in-out duration-300 text-blue-500 hover:text-black h-12 w-12 justify-center flex"

                >
                  <MdOutlineEmail className="text-2xl" />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-center border-2 border-blue-500 rounded-full hover:bg-blue-500 cursor-pointer transition-all ease-in-out duration-300 text-blue-500 hover:text-black h-12 w-12 justify-center flex"

                >
                  <FiGithub className="text-2xl" />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-center border-2 border-blue-500 rounded-full hover:bg-blue-500 cursor-pointer transition-all ease-in-out duration-300 text-blue-500 hover:text-black h-12 w-12 justify-center flex"

                >
                  <LuLinkedin className="text-2xl" />
                </a>
              </div>
            </div>


          </div>

        </div>
      </section>
    </>
  );
}
