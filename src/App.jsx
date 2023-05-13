


import Layout from './components/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Glavnaa from './components/Glavnaa/Glavnaa'
import Vtoraa from './components/Vtoraa/Vtoraa'
import Auf from './components/Auf/Auf'
import Registr from './components/registr/Registr'



function App() {

  return (




<Layout>
 <Routes>
  <Route path='/' element={<Glavnaa/>}/>
  <Route path='/admins' element={<Vtoraa/>}/>
<Route path='/Auf' element={<Auf/>}/>
<Route path='/Reg' element={<Registr/>}/>
 </Routes>
</Layout>





  )
}

export default App
