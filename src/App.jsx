import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Headcomp from './Components/Headcomp'
import Keyfeatures from './Components/Keyfeatures'
import { About1 } from './Components/About1'
import Contract from './Components/Contract'
import Bottom from './Components/Bottom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Headcomp />
      <Keyfeatures />
      <About1 />
      <Contract />
      <Bottom/>
    </div>
  )
}

export default App
