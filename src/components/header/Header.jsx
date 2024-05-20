import React, { useState } from 'react'
import { Link } from 'react-scroll';
import "./header.css"

function Header() {

  const [toggle, setShowMenu] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="/" className="logo">Abdullah Khan</a>

          <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
            <ul className="nav-list grid">
              <li className="nav-item">
                <Link
                  to="home"
                  smooth={true}
                  duration={200}
                  className="nav-link"
                  onClick={() => setShowMenu(false)}
                >
                  <i className="uil uil-estate nav-icon"></i>Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="about"
                  smooth={true}
                  duration={200}
                  className="nav-link"
                  onClick={() => setShowMenu(false)}
                >
                  <i className="uil uil-user nav-icon"></i>About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to='skill'
                  smooth={true}
                  duration={200}
                  className="nav-link"
                  onClick={() => setShowMenu(false)}>
                  <i className="uil uil-file-alt nav-icon"></i>Skills
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="projects"
                  smooth={true}
                  duration={200}
                  className="nav-link"
                  onClick={() => setShowMenu(false)}
                >
                  <i className="uil uil-briefcase-alt nav-icon"></i>Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={200}
                  className="nav-link"
                  onClick={() => setShowMenu(false)}
                >
                  <i className="uil uil-message nav-icon"></i>Contact
                </Link>
              </li>
            </ul>
            <i onClick={() => { setShowMenu(!toggle) }} className="uil uil-times nav-close"></i>
          </div>
          <div onClick={() => { setShowMenu(!toggle) }} className="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header