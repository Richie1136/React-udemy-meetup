import React from 'react'
import Navigation from '../navigation/Navigation'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main className='main'>{children}</main>
    </div>
  )
}

export default Layout
