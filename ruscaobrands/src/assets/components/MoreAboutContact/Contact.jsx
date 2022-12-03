import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import ButtonB from '../Button/ButtonB.jsx'
import StyledContact from "./Style.js"

const Contact = () => {
  return (
    <StyledContact>
        <div className='main'>
            <h3>I want to listen to your story.</h3>
            <h4>We will work together on your brand strategy and make the world more beautiful through your newest yet strong brand.</h4>
        </div>
        <div className='btn'>
            <ButtonB text={"Contact"}/>
        </div>
    </StyledContact>
  )
}

export default Contact