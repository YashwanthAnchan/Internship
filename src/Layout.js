import React from 'react'
import {Link} from "react-router-dom"


function Layout() {
  return (
    <div>
    <nav>
      
    <ul><Link to='/Home'>Home</Link></ul>
    <ul><Link to='/Contact'>Contact</Link></ul>
    <ul><Link to='/Blogs'>Blogs</Link></ul>
    <ul><Link to='/NoPage'>NoPage</Link></ul>
    </nav>
    </div>
  )
}

export default Layout