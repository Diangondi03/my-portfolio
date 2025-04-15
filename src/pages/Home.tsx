import Description from '../components/home/Description'
import PhotoSection from '../components/home/PhotoSection'
import React from 'react'
import Skills from '../components/home/Skills'
import LanguageSection from '../components/home/LanguageSection'

function Home() {

  return (
    <>
      <PhotoSection/>
      <Description/>
      <Skills/>
      <LanguageSection/>
    </>
  )
}

export default Home
