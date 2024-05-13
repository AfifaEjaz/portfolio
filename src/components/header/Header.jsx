import React, { useState } from 'react'
import "./header.css"

function Header() {

  const[toggle, setShowMenu] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="/" className="logo">Abdullah Khan</a>

          <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
            <ul className="nav-list grid">
              <li className="nav-item">
                <a href="/" className="nav-link active-link">
                  <i className="uil uil-estate nav-icon"></i>Home
                </a>
              </li>

              <li className="nav-item">
                <a href="#about" className="nav-link">
                  <i className="uil uil-user nav-icon"></i>About
                </a>
              </li>

              <li className="nav-item">
                <a href="#skills" className="nav-link">
                  <i className="uil uil-file-alt nav-icon"></i>Skills
                </a>
              </li>

              <li className="nav-item">
                <a href="#services" className="nav-link">
                  <i className="uil uil-briefcase-alt nav-icon"></i>Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  <i className="uil uil-message nav-icon"></i>Contact
                </a>
              </li>
            </ul>
            <i onClick={()=>{setShowMenu(!toggle)}} className="uil uil-times nav-close"></i>
          </div>
          <div onClick={()=>{setShowMenu(!toggle)}} className="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>

        </nav>

      </header>
    </>
  )
}

export default Header