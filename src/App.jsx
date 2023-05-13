import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rigistr from './components/registr/Rigistr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Rigistr/>
    </div>
    
  )
}

export default App
