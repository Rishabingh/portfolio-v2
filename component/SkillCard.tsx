import { ReactNode } from "react"

export default function SkillCard({title, children}: {title: string, children: ReactNode}) {
  return (
    <div className="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 p-2">
      <div className="text-lg font-semibold">{title}</div>
      {children}
    </div>
  )
}