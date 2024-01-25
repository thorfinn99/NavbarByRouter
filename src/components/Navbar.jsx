import React from 'react'
import {Link, NavLink} from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/" >Website</Link>
        <ul>
            <li>
                <Link to="/about" >About</Link>
            </li>
            <li>
                <Link to="/services" >Services</Link>
            </li>
            <li>
                <Link to="/contact" >Contact</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}
