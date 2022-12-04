import React, { useContext } from 'react'
import { LangContext } from '../../../Context/LangProvider.jsx'
import IntroDiv from './Style.js'

const Intro = () => {
  const langContext = useContext(LangContext)
  return (
    <IntroDiv>
        <div className='introImg'>
        </div>
        <div>
            <h3>{langContext.texts.intro.Local[langContext.lang]}</h3>
            <h1>{langContext.texts.intro.IDo[langContext.lang]}</h1>
        </div>
        <div>
            <p>{langContext.texts.intro.IAm[langContext.lang]}</p>
        </div>
    </IntroDiv>
  )
}

export default Intro