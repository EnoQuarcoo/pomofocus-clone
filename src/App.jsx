import { useState } from 'react'
import './index.css'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Timer></Timer>
    </>
  )
}

export default App
