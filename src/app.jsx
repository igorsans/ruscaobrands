import React from 'react'
import Routes from "./assets/Routes/Routes.jsx";
import LangProvider from './Context/LangProvider.jsx'

const App = () => {
  return (
    <LangProvider>
      <Routes />
    </LangProvider>
  )
}

export default App