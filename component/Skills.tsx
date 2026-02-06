import SkillCard from "./SkillCard"
import { FaReact, FaJs, FaNodeJs, FaGitSquare } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill, RiVercelFill } from "react-icons/ri";
import { SiRedux, SiReactquery, SiZod, SiTypescript, SiExpress, SiMongodb, SiWebauthn, SiRazorpay, SiPostman } from "react-icons/si";
import { IoCloudUpload } from "react-icons/io5";
import { MdStorage } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FiServer } from "react-icons/fi";
import { DiNginx } from "react-icons/di";



export default function Skills() {
  return (
    <div className="w-[75vw] mx-auto pt-14" id="skill">
      <div className="text-2xl font-poppins text-blue-500">Skills</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        <SkillCard title='frontend'>
          <div className="flex flex-col gap-3.5 pt-3.5">
            <div className="flex gap-3 items-center"><FaReact className="text-blue-500 text-3xl" /> <span>React</span></div>
            <div className="flex gap-3 items-center"><SiTypescript className="text-blue-500 text-3xl" /> <span>TypeScript</span></div>
            <div className="flex gap-3 items-center"><FaJs className="text-yellow-500 text-3xl" /> <span>JavaScript</span></div>
            <div className="flex gap-3 items-center"><RiTailwindCssFill className="text-blue-500 text-3xl" /> <span>TailwindCSS</span></div>
            <div className="flex gap-3 items-center"><SiRedux className="text-purple-500 text-3xl" /> <span>Redux Toolkit</span></div>
            <div className="flex gap-3 items-center"><SiReactquery className="text-yellow-500 text-3xl" /> <span>Tanstack(React) Query</span></div>
            <div className="flex gap-3 items-center"><SiZod className="text-blue-500 text-3xl" /> <span>React Hook Form + Zod</span></div>
            <div className="flex gap-3 items-center"><RiNextjsFill className="text-3xl" /> <span>Nextjs</span></div>
          </div>
        </SkillCard>

        <SkillCard title='Backend'>
          <div className="flex flex-col gap-3.5 pt-3.5">
            <div className="flex gap-3 items-center"><FaNodeJs className="text-green-500 text-3xl" /> <span>NodeJs</span></div>
            <div className="flex gap-3 items-center"><SiExpress className="text-3xl" /> <span>ExpressJs</span></div>
            <div className="flex gap-3 items-center"><SiMongodb className="text-green-500 text-3xl" /> <span>Database (MongodDb + Mongoose)</span></div>
            <div className="flex gap-3 items-center"><SiWebauthn className="text-3xl" /> <span>Auth (JWT, Oauth, PassportJs)</span></div>
            <div className="flex gap-3 items-center"><IoCloudUpload className="text-3xl" /> <span>File Uploads (Multer)</span></div>
            <div className="flex gap-3 items-center"><MdStorage className="text-3xl" /> <span>Media & Storage (AWS S3 + Cloudinary)</span></div>
            <div className="flex gap-3 items-center"><IoIosMail className="text-3xl" /> <span>Email (NodeMailer)</span></div>
            <div className="flex gap-3 items-center"><SiRazorpay className="text-3xl text-blue-500" /> <span>Payments (Razorpay)</span></div>
          </div>
        </SkillCard>

        <SkillCard title='Tools & Platforms'>
          <div className="flex flex-col gap-3.5 pt-3.5">
            <div className="flex gap-3 items-center"><FaGitSquare className="text-red-500 text-3xl" /> <span>Git & Github</span></div>
            <div className="flex gap-3 items-center"><RiVercelFill className="text-3xl" /> <span>Vercel (Deployment)</span></div>
            <div className="flex gap-3 items-center"><FiServer className="text-yellow-500 text-3xl" /> <span>Basic VPS Deployment</span></div>
            <div className="flex gap-3 items-center"><DiNginx className="text-3xl" /> <span>Nginx (basic)</span></div>
            <div className="flex gap-3 items-center"><SiPostman className="text-orange-500 text-3xl" /> <span>Postman (Api Testing)</span></div>
            <div className="flex gap-3 items-center"><SiMongodb className="text-green-500 text-3xl" /> <span>MongoDB Atlas</span></div>
          </div>
        </SkillCard>
      </div>
    </div>
  )

}