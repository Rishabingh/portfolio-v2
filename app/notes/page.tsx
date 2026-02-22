import Link from "next/link";
import { notes } from "@/data/notes";

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Notes</h1>

      <ol className="list-decimal pl-6 space-y-2">
        {notes.map((note) => (
          <li key={note.slug}>
            <a
              href={note.slug}
              className="underline underline-offset-4 hover:text-neutral-400"
            >
              {note.title}
            </a>
            <p className="text-sm text-neutral-500">
              {note.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

