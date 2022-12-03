import React from 'react'
import Intro from '../../assets/components/IntroAboutMe/Intro.jsx'
import Contact from '../../assets/components/MoreAboutContact/Contact.jsx'
import More from '../../assets/components/MoreAboutMe/More.jsx'
import StyledAbout from './Style.js'

const About = () => {
  return (
    <StyledAbout>
        <Intro/>
        <More/>
        <Contact/>
    </StyledAbout>
  )
}

export default About