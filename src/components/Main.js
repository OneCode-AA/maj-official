import React from 'react'
import Hero from './Hero'
import Gallery from './Gallery'

function Main() {
  return (
    <main className="flex flex-col gap-9">
        <Hero/>
        <Gallery/>
    </main>
  )
}

export default Main