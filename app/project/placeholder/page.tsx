import ProjectHero from "@/app/project/(components)/ProjectHero";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { MdNorthEast } from "react-icons/md";
import { Metadata } from "next";

export default function PlaceHolder() {
  return (
    <div>
      {/*project hero section title links and description*/}
      <ProjectHero
        title="TaskFlow - Project Management Platform"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia magnam accusantium aliquid tempora consequuntur veniam odit dignissimos necessitatibus adipisci, eum animi ea."
        gitHubLink="https://github.com"
        liveLink="https://rishab.online"
        year={2026}
        type="Full Stack Application"
      />
      {/*small objective*/}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Objective</h2>
        <div>
          To demonstrate the ability to build a production-style LMS+Course
          selling platform with authentication, payments, admin workflows, and
          role-based access control.
        </div>
      </div>

      {/*tech stack*/}
      <div className="mt-20">
        <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-medium mb-2">Frontend</h3>
            <ul>
              <li>- Next.js (App Router)</li>
              <li>- TypeScript</li>
              <li>- TailwindCSS</li>
              <li>- Redux Toolkit</li>
              <li>- Axios</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Backend</h3>
            <ul>
              <li>- Next.js (API Routes)</li>
              <li>- JWT Authentication</li>
              <li>- Passport.js</li>
              <li>- MongoDB & Mongoose</li>
              <li>- Nodemailer</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">
              Infrastructure & Services
            </h3>
            <ul>
              <li>- Vercel (Deployment)</li>
              <li>- MongoDB Atlas (Database)</li>
              <li>- Cloudinary (Media Storage)</li>
              <li>- Payment Gateway (Razorpay)</li>
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
            Role-Based Admin Dashboard & Analytics
          </h3>

          <p className="text-sm text-gray-400 max-w-3xl">
            A secure, role-based admin panel that provides real-time insights
            into course sales, user engagement, and platform performance through
            interactive charts and reports.
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
            <li>Role-based access control for Admin, Instructor, and User</li>
            <li>
              Visual analytics for course sales, revenue, and user activity
            </li>
            <li>Protected admin routes with server-side authorization</li>
            <li>Scalable dashboard architecture for future metrics</li>
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
            Designed and implemented a scalable LMS-style platform with clear
            separation between public, authenticated, and admin-only routes.
          </li>

          <li>
            <span className="font-medium text-neutral-100">
              Secure authentication & authorization:
            </span>{" "}
            Implemented JWT-based authentication and role-based access control
            to protect sensitive admin workflows.
          </li>

          <li>
            <span className="font-medium text-neutral-100">
              Real-world business features:
            </span>{" "}
            Integrated payments, course management, and transactional emails to
            simulate a real SaaS product environment.
          </li>

          <li>
            <span className="font-medium text-neutral-100">
              Performance-focused frontend:
            </span>{" "}
            Built with Next.js App Router, optimized images, and responsive
            layouts for strong performance and user experience.
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
          href="https://rishab.online"
          className="flex gap-2 items-center bg-blue-950 rounded-md p-1 hover:bg-blue-900"
        >
          <MdNorthEast className="text-xl" /> <span>View Live Website</span>
        </a>
        <a
          href="https://github.com"
          className="flex gap-2 items-center bg-neutral-700 rounded-md p-1 hover:bg-neutral-800"
        >
          <IoLogoGithub className="text-xl" /> <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Project- placeholder",
  description: "case study of project name placeholder",
};