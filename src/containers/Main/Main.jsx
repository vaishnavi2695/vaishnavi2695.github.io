import React from 'react'
import Home from '../Home/Home'
import Header from '../Header/Header'
import LoadiingScreen from '../LoadingScreen/LoadiingScreen'
import Skills from '../Skills/Skills'
import Qualifications from '../Qualifications/Qualifications'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Achivements from '../Achivements/Achivements'
import SocialMedia from '../Social Media/SocialMedia'

function Main() {
  return (
    <div>
      <LoadiingScreen />
      <Home />
      <Header />
      <Skills />
      <Qualifications />
      <Projects />
      <About />
      <SocialMedia />
      <Achivements />
    
    </div>
  )
}

export default Main