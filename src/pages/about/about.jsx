import React, { useEffect } from 'react'
import Intro from '../../assets/components/IntroAboutMe/Intro.jsx'
import Contact from '../../assets/components/MoreAboutContact/Contact.jsx'
import More from '../../assets/components/MoreAboutMe/More.jsx'
import StyledAbout from './Style.js'

const About = ({setInHome}) => {
  useEffect(() => {
    setInHome(false)
  }, [])
  return (
    <StyledAbout>
        <Intro/>
        <More/>
        <Contact setInHome={setInHome} />
    </StyledAbout>
  )
}

export default About