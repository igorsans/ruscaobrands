import React from 'react'
import CasesStyle from './Style.js'
import { BsArrowRight } from "react-icons/bs"

const Cases = () => {
  return (
    <CasesStyle>
        <h2>CASES</h2>
        <hr />
        <div className='cases'>
            <img className='casesImg' src="/Biggies.jpg" alt="" />
            <img className='casesImg' src="/Biggies.jpg" alt="" />
            <img className='casesImg' src="/Biggies.jpg" alt="" />
            <img className='casesImg' src="/Biggies.jpg" alt="" />
            <img className='casesImg' src="/Biggies.jpg" alt="" />
            <img className='casesImg' src="/Biggies.jpg" alt="" />
        </div>
        <button className='seeAll'>See All <BsArrowRight/></button>
    </CasesStyle>
  )
}

export default Cases