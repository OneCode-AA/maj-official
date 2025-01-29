import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import React from 'react'

function page() {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default page