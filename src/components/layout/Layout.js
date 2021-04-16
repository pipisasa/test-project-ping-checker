import React from 'react'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar/>
      <main id="main" className="layout__body">
        {children}
      </main>
    </div>
  )
}

export default Layout
