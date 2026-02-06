import { ReactNode } from "react";
import Link from "next/link";
import { Metadata } from "next";

export default function ProjectLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="min-h-screen bg-neutral-900 text-neutral-200">
      {/* Top navigation */}
      <div className="mx-auto max-w-5xl px-6 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-3 py-1.5 text-base text-neutral-300 hover:border-neutral-700 hover:text-neutral-100 transition"
        >
          ← Back to home
        </Link>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        {children}
      </main>

      {/* Footer navigation */}
      <footer className="mx-auto max-w-5xl px-6 pb-12 text-sm text-neutral-500">
        <div className="border-t border-neutral-800 pt-8 flex items-center justify-between">
  
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-3 py-1.5 text-base text-neutral-300 hover:border-neutral-700 hover:text-neutral-100 transition"
        >
          ← Back to home
        </Link>

        <span>Case study · Written by Rishab</span>
        </div>
      </footer>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Project",
  description: "Portfolio showcasing projects, case studies, and frontend work",
};
