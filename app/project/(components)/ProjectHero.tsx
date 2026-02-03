import { IoLogoGithub } from "react-icons/io";
import { MdNorthEast } from "react-icons/md";

interface props {
  title: string;
  description: string;
  gitHubLink: string;
  liveLink: string;
  year: number;
  type: string;
}

export default function ProjectHeader({title, description, gitHubLink, liveLink, year, type}: props) {
  return (
    <div className='border-b border-neutral-700 pb-20'>
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="text-neutral-400 mt-3.5">{description}</div>

      <div className="mt-7 flex gap-4">
        <a href={liveLink}
        className="flex gap-2 items-center bg-blue-950 rounded-md p-1 hover:bg-blue-900"
        ><MdNorthEast className="text-xl" /> <span>View Live Website</span></a>
        <a href={gitHubLink}
        className="flex gap-2 items-center bg-neutral-700 rounded-md p-1 hover:bg-neutral-800"
        ><IoLogoGithub className="text-xl" /> <span>View on GitHub</span></a>
      </div>

      <div className="mt-7 flex gap-12">
        <div className="flex flex-col gap-3">
          <span className="font-light text-neutral-400">YEAR</span>
          <span>{year}</span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-light text-neutral-400">Application Type</span>
          <span>{type}</span>
        </div>
      </div>
    </div>
  )
}