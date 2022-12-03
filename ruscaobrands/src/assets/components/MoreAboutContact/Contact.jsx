import React, { useContext } from 'react'
import { LangContext } from '../../../Context/LangProvider.jsx'
import ButtonB from '../Button/ButtonB.jsx'
import StyledContact from "./Style.js"

const Contact = () => {
  const langContext = useContext(LangContext)
  return (
    <StyledContact>
        <div className='main'>
            <h3>{langContext.texts.AboutMePag.contact.title[langContext.lang]}</h3>
            <h4>{langContext.texts.AboutMePag.contact.sub[langContext.lang]}</h4>
        </div>
        <div className='btn'>
            <ButtonB text={langContext.texts.AboutMePag.contact.btn[langContext.lang]}/>
        </div>
    </StyledContact>
  )
}

export default Contact