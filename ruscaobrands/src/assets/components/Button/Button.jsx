import React from 'react'
import ButtonWhite from './Style.js'
import { BsArrowRight } from "react-icons/bs"

const Button = ({text}) => {
  return (
    <ButtonWhite>{text} <BsArrowRight/></ButtonWhite>
  )
}

export default Button