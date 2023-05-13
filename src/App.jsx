import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Glavnaa from './components/Glavnaa/Glavnaa'
import Vtoraa from './components/Vtoraa/Vtoraa'

function App() {
  const [count, setCount] = useState(0)

  return (
<Layout>
 <Routes>
  <Route path='/' element={<Glavnaa/>}/>
  <Route path='/admins' element={<Vtoraa/>}/>
 </Routes>
</Layout>
  )
}

export default App
