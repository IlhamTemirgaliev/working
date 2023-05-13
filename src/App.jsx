import './App.css'
import Rigistr from './components/registr/Rigistr'

import Layout from './components/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Glavnaa from './components/Glavnaa/Glavnaa'
import Vtoraa from './components/Vtoraa/Vtoraa'

function App() {

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
