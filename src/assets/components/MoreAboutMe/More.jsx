import React, { useContext } from 'react'
import { LangContext } from '../../../Context/LangProvider.jsx'
import StyledMore from './Style.js'
import me from '/Bruno.png'

const More = () => {
  const langContext = useContext(LangContext)
  return (
    <StyledMore>
        <img src={me}/>
        <div className='content'>
            <h3>{langContext.texts.AboutMePag.more[langContext.lang][0]}</h3>
            <h3>{langContext.texts.AboutMePag.more[langContext.lang][1]}</h3>
        </div>
        <div className='content'>
            <h3>{langContext.texts.AboutMePag.more[langContext.lang][2]}</h3>
            <h3 className='strong'>{langContext.texts.AboutMePag.more[langContext.lang][3]}</h3>
        </div>
    </StyledMore>
  )
}

export default More