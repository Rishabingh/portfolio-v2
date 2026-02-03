import ProjectCard from "./ProjectCard"

export default function Project() {
  return (
    <div className="w-[75vw] mx-auto pt-32">
      <div className="text-2xl font-poppins text-blue-500">Projects</div>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        <ProjectCard
        imagePath="project-placeholder.webp"
        title="this is the proj"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium beatae accusantium ratione, ducimus saepe ullam porro odio, quasi fugit quidem adipisci unde."
        githubLink="https://github.com/"
        liveLink="https://rishab.online"
        caseStudyPath="/project/placeholder"
        technology={['Nextjs', 'react', 'tailwind', 'jwt auth', 'expressjs', 'razory pay', 'Oauth', 'multer']}
        />
        <ProjectCard
        imagePath="project-placeholder.webp"
        title="this is the project"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium beatae accusantium ratione, ducimus saepe ullam porro odio, quasi fugit quidem adipisci unde."
        githubLink="https://github.com/"
        liveLink="https://rishab.online"
        caseStudyPath="/project/placeholder"
        technology={['Nextjs', 'react', 'tailwind', 'jwt auth', 'expressjs', 'razory pay', 'Oauth', 'multer']}
        />
        <ProjectCard
        imagePath="project-placeholder.webp"
        title="this is the proj"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium beatae accusantium ratione, ducimus saepe ullam porro odio, quasi fugit quidem adipisci unde."
        githubLink="https://github.com/"
        liveLink="https://rishab.online"
        caseStudyPath="/project/placeholder"
        technology={['Nextjs', 'react', 'tailwind', 'jwt auth', 'expressjs', 'razory pay', 'Oauth', 'multer']}
        />
      </div>
    </div>
  )
}