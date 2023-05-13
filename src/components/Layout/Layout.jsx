import React from 'react'
import Navbar from '../navbar/Navbar'

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div><Navbar/>
    <main>{children}</main>
    </div>
  )
}

export default Layout