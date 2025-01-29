import { Handyman } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='w-full p-4 flex justify-evenly items-center text-xl '>
       <Link href="/"
       className='flex items-center justify-between gap-4 bg-emerald-600 text-white py-1 px-1 rounded-[3rem]'>
       <Handyman 
       className='rounded-[4rem] bg-white text-emerald-600 size-12 p-2 '/>
       <span className="ml-[-8px] pr-2">MAJ</span> 
       </Link>
       <nav className="flex gap-4 items-center">
        <Link href="#view-work" className='px-8 py-3 rounded-[3rem] hover:bg-emerald-200'>View My Work</Link>
        <Link href="mailto:fjamal04@gmail.com"
        className='px-8 py-3 rounded-[3rem] bg-emerald-600 hover:scale-[1.1] hover:bg-emerald-400 transition-all hover:transition-all ease-in-out text-white'>
        Contact
        </Link>
       </nav>
    </header>
  )
}

export default Header