import React from 'react'
import '../styles/Header.css'
import {Link} from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to= "/contact">Contact</Link>
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}
    </nav>
  )
}

export default Header