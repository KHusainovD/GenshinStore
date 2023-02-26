import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <nav className="#1e88e5 blue darken-1">
          <div className="nav-wrapper container">
            <Link to={`/`} className="brand-logo">Srenshin Infarkt store</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to={`/`}>Catalog</Link></li>
              <li><Link to={`cart`}>Cart</Link></li>
            </ul>
          </div>
        </nav>
    </header>
  )
}
