import React from 'react'
import me from '/me.png'
import AboutMeStyle from './Style.js'
import Button from '../Button/Button.jsx'
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <AboutMeStyle>
        <div className='textAboutMe'>
            <h3>BRAND DESIGNER SPECIALIST.</h3>
            <h2>I help your brand stand out from your competitors by building an authentic connection with your audience.</h2>
            <Button nav={() => navigate('/aboutme')} text="MORE ABOUT ME"/>
        </div>
        <div>
            <img src={me} alt="" />
        </div>
    </AboutMeStyle>
  )
}

export default AboutMe