import React, { useContext } from 'react'
import me from '/me.png'
import AboutMeStyle from './Style.js'
import Button from '../Button/Button.jsx'
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../../../Context/LangProvider.jsx';

const AboutMe = ({setInHome}) => {
  const langContext = useContext(LangContext)
  const navigate = useNavigate();
  return (
    <AboutMeStyle id='aboutme'>
        <div className='textAboutMe'>
            <h3>{langContext.texts.AboutMe.title[langContext.lang]}</h3>
            <h2>{langContext.texts.AboutMe.HowIDo[langContext.lang]}</h2>
            <Button nav={() => {
              setInHome(false)
              navigate('/aboutme')
              window.scrollTo(0,0)
              }} text={langContext.texts.AboutMe.Btn[langContext.lang]}/>
        </div>
        <div>
            <img src={me} alt="" />
        </div>
    </AboutMeStyle>
  )
}

export default AboutMe