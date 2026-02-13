import { useState } from 'react'
import './index.css'
import Timer from './components/Timer'
import Pomocounter from './components/Pomocounter'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Timer></Timer>
      <Pomocounter></Pomocounter>
    </>
  )
}

export default App
