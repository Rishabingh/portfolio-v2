import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

const About = () => {

  return (
    <div className='w-[75vw] mx-auto pt-32' id='about'>
      <h1 className='text-2xl font-poppins text-blue-500'>About Me</h1>
      <div className='flex gap-8 md:flex-row flex-col justify-center mx-auto pt-10'>
        <div className='flex-1 flex flex-col'>
          <span className='text-6xl font-poppins font-medium flex gap-3 flex-col'><span>Hello again, I&apos;m</span><span className='text-[#3b82f6]'>Rishab Singh</span></span>
          <ul className='my-4 text-gray-400 flex flex-col gap-4'>
            <li className='flex gap-1.5 items-center'> <FaLocationDot /> Delhi, India</li>
            <li className='flex gap-1.5 items-center'> <FaCode />  Full Stack Developer</li>
            <li className='flex gap-1.5 items-center'> <IoMail />  <a href="mailto:rishabsiingh@outlook.com">rishabsiingh@outlook.com</a></li>
          </ul>
            <span className='leading-8'>
             I&apos;m a full-stack developer from Delhi who builds web apps that are simple, fast, and easy to use. Working across frontend and backend helps me think in terms of complete systems, not just isolated components.
            </span>

        </div>
        <div className='flex-1'>
          <h2 className='text-lg text-gray-400 font-medium'>Education</h2>
          <ul className='flex gap-3 mt-3 flex-wrap list-disc'>
            <li className=''>Bachelor&apos;s In Computer Application (from Ignou) - ongoing</li>
            <li className=''>12th Class(Physics, Chemistry, Math) (from Government Boys Senior Secondary School Badarpur No1, Delhi) - 2024</li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default About