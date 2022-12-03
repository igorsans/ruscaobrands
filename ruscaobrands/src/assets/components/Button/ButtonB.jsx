import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import StyledButton from './StyleB.js'

const ButtonB = ({text,nav}) => {
  return (
    <StyledButton>
        {text} <BsArrowRight/>
    </StyledButton>
  )
}

export default ButtonB