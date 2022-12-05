import React from 'react'
import Routes from "./assets/Routes/Routes.jsx";
import LangProvider from './Context/LangProvider'

const App = () => {
  return (
    <LangProvider>
      <Routes />
    </LangProvider>
  )
}

export default App