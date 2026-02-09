import react from 'react'
import NavBar from '@/component/NavBar'

export default function ProjectLayout({children}: {children: react.ReactNode}) {
  return (
    <>
      <NavBar />
      {children} 
    </>
  )
}