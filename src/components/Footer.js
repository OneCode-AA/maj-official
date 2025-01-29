import { LinkedIn, Mail } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
   <footer className="w-full flex justify-evenly p-4 min-h-7 bg-slate-200">
    <p className="">&copy; 2025</p>
    <nav className="">
        <ul className="flex items-center gap-3">
            {/* <Link href="href"><LinkedIn/></Link> */}
           <p className="">Contact Me</p> <Link href="mailto:fjamal04@gmail.com"><Mail className='hover:text-emerald-600'/></Link>
            {/* <Link href="href"></Link> */}
        </ul>
    </nav>
   </footer>
  )
}

export default Footer