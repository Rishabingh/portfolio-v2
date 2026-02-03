import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import { MdLaptopChromebook } from "react-icons/md";

interface IProjectCard {
  imagePath: string;
  title: string;
  description: string;
  technology: string[];
  githubLink: string;
  liveLink: string;
  caseStudyPath: string;
}

export default function ProjectCard({
  imagePath,
  title,
  description,
  technology,
  githubLink,
  liveLink,
  caseStudyPath,
}: IProjectCard) {
  return (
    <div className="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
      <div className="relative aspect-16/10">
        <Image
          src={`/${imagePath}`}
          alt="project-preview"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-neutral-400 mt-1">{description}</p>
        <div className="technology flex gap-2 flex-wrap pt-3">
          {technology?.map((tech) => (
            <div key={tech} className="rounded-md bg-neutral-700 p-0.5">
              {tech}
            </div>
          ))}
        </div>

        <div className="buttons pt-4 flex flex-col gap-4">
          <div className="flex gap-3 justify-between">
            <a
              href={githubLink}
              className="items-center border border-blue-500 rounded-md hover:bg-blue-500 cursor-pointer transition-all ease-in-out duration-300 text-blue-500 hover:text-black justify-center flex px-2 py-1 flex-1 gap-2.5"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={liveLink}
              className="items-center border border-blue-500 rounded-md hover:bg-blue-500 cursor-pointer transition-all ease-in-out duration-300 text-blue-500 hover:text-black justify-center flex px-2 py-1 flex-1 gap-2.5"
              rel="noopener noreferrer"
              target="_blank"
            >
              <CiGlobe /> Live Link
            </a>
          </div>

          <Link
            href={caseStudyPath}
            className="items-center border border-blue-500 rounded-md hover:bg-blue-500 cursor-pointer transition-all ease-in-out duration-300 text-blue-500 hover:text-black justify-center flex px-2 py-1 gap-2.5"
          >
            <MdLaptopChromebook /> Case Study
          </Link>
        </div>
      </div>
    </div>
  );
}
