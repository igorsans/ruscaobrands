import React from 'react'
import CaseComponent from './Style.js'
const CasePag = ({ cases }) => {
  console.log(cases)
  return (
    <CaseComponent>
      <h1>{cases.titulo}</h1>
    </CaseComponent>
  )
}

export default CasePag