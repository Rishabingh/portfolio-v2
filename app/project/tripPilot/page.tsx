import ProjectHero from "@/app/project/(components)/ProjectHero";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { MdNorthEast } from "react-icons/md";
import { Metadata } from "next";

export default function page() {
  return (
    <div>
      {/*project hero section title links and description*/}
      <ProjectHero
        title="Trip Pilot - AI Travel Planning Platform"
        description="Trip Pilot was born from a simple frustration: planning trips shouldn't be harder than the trips themselves. This platform utilizes generative AI to instantly create personalized, intelligent travel itineraries, saving users hours of research and spreadsheet management."
        gitHubLink="https://github.com/Rishabingh/trip-pilot"
        liveLink="https://rishab.online"
        year={2026}
        type="Full Stack Application"
      />
      {/*small objective*/}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Objective</h2>
        <div>
          To demonstrate the ability to build a production-ready, AI-integrated
          web application featuring custom authentication, server-side data
          fetching, and dynamic UI rendering.
        </div>
      </div>

      {/*tech stack*/}
      <div className="mt-20 overflow-x-scroll">
        <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-medium mb-2">Frontend</h3>
            <ul>
              <li>- Next.js (App Router)</li>
              <li>- TypeScript</li>
              <li>- Tailwind CSS</li>
              <li>- React Icons & React Markdown</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Backend</h3>
            <ul>
              <li>- Next.js (Server Actions & API Routes)</li>
              <li>- JWT Authentication (jose)</li>
              <li>- bcrypt</li>
              <li>- MongoDB & Mongoose</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">
              Infrastructure & Services
            </h3>
            <ul>
              <li>- Vercel (Deployment)</li>
              <li>- MongoDB Atlas (Database)</li>
              <li>- Google Gemini API (Generative AI)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Walkthrough */}
      <div className="mt-20">
        <h2 className="text-xl font-semibold mb-6">Product Walkthrough</h2>

        {/* Feature Block */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            AI-Powered Itinerary Generation & Rendering
          </h3>

          <p className="text-sm text-gray-400 max-w-3xl">
           A seamless interface where users input their travel preferences, which are securely processed server-side via the Google Gemini API.
          </p>

          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop"
            alt="Admin dashboard showing analytics and reports"
            width={1200}
            height={750}
            sizes="(max-width: 768px) 100vw, 75vw"
            className="rounded-md w-full"
            priority
          />

          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
            <li>Prompt Engineering: Optimized prompts ensure consistent, structured Markdown responses from the AI.</li>
            <li>
              Dynamic Parsing: Transforms raw Markdown into a beautifully styled, highly readable itinerary using custom Tailwind typography configurations.
            </li>
            <li>Protected admin routes with server-side authorization</li>
            <li>Secure Architecture: API keys and database connections are strictly isolated in Next.js Server Actions, ensuring zero exposure to the client bundle.</li>
          </ul>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="mt-20">
        <h2 className="text-xl font-semibold mb-6">Key Takeaways</h2>

        <ul className="space-y-4 text-sm text-neutral-300">
          <li>
            <span className="font-medium text-neutral-100">
              Production-ready architecture:
            </span>{" "}
            Successfully utilized Next.js Server Actions to bridge the gap between frontend forms and backend database mutations without exposing API endpoints.
          </li>

          <li>
            <span className="font-medium text-neutral-100">
              Secure authentication & authorization:
            </span>{" "}
            Built a robust authentication flow from scratch using HTTP-only cookies, JWTs, and password hashing, proving a deep understanding of web security principles.
          </li>

          <li>
            <span className="font-medium text-neutral-100">
              AI Integration:
            </span>{" "}
            Gained practical experience integrating and managing responses from Large Language Models (LLMs) in a production environment.
          </li>

          <li>
            <span className="font-medium text-neutral-100">
              Advanced Styling:
            </span>{" "}
            Mastered Tailwind CSS v4 and fluid design principles to ensure a flawless user experience across mobile, tablet, and desktop devices
          </li>

          <li>
            <span className="font-medium text-neutral-100">
              End-to-end ownership:
            </span>{" "}
            Took the project from planning and architecture to deployment and
            documentation, focusing on maintainability and scalability.
          </li>
        </ul>
      </div>

      <div className="mt-7 flex gap-4">
        <a
          href="https://rishabs.online"
          className="flex gap-2 items-center bg-blue-950 rounded-md p-1 hover:bg-blue-900"
        >
          <MdNorthEast className="text-xl" /> <span>View Live Website</span>
        </a>
        <a
          href="https://github.com/Rishabingh/trip-pilot"
          className="flex gap-2 items-center bg-neutral-700 rounded-md p-1 hover:bg-neutral-800"
        >
          <IoLogoGithub className="text-xl" /> <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Trip Pilot",
  description: "Trip Pilot (SaaS Travel Planner)",
};
