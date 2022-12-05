import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LangContext } from '../../../Context/LangProvider.jsx'
import ButtonB from '../Button/ButtonB.jsx'
import StyledContact from "./Style.js"

const Contact = ({setInHome}) => {
  const langContext = useContext(LangContext)
  const navigate = useNavigate()
  return (
    <StyledContact>
        <div className='main'>
            <h3>{langContext.texts.AboutMePag.contact.title[langContext.lang]}</h3>
            <h4>{langContext.texts.AboutMePag.contact.sub[langContext.lang]}</h4>
        </div>
        <div className='btn'>
            <ButtonB nav={() => {
              setInHome(true)
              navigate('/')
              }} text={langContext.texts.AboutMePag.contact.btn[langContext.lang]}/>
        </div>
    </StyledContact>
  )
}

export default Contact