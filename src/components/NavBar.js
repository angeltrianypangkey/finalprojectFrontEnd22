import React from 'react'

function NavBar() {
  return (
    <div className="navbar fixed-top">
        <nav id="navbar" className="navbar">
            <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link  scrollto" href="#portfolio">Gallery</a></li>
            <li><a className="nav-link  scrollto" href="#journal">Blog</a></li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
        <i className="bi bi-list mobile-nav-toggle" />
        </nav>
    </div>
    
  )
}

export default NavBar
