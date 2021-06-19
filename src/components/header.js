import * as React from "react"
import { Link } from "gatsby"

import "../styles/header.css"

import iconEmail from "../assets/icons/icon-email.png"
import iconGithub from "../assets/icons/icon-github.png"
import iconLinkedIn from "../assets/icons/icon-linkedin.png"

const Header = () => (
  <header id="navbar">
    <nav className="nav-wrapper">
      <div className="nav-left">
          <div>
            <Link className="nav-brand" to="/">
              <span className="text-green">ryoma</span>
              <span className="text-white">:</span>
              <span className="text-magenta">~</span>
              <span className="text-white">$</span>
            </Link>
          </div>
          <div className="nav-menu">
            <p>ls</p>
            <Link className="nav-link" to="/portfolio/">portfolio/</Link>
          </div>
      </div>
      <div className="nav-right">
        <a target="_blank" rel="noopener noreferrer" href="mailto:ryomah@seas.upenn.edu">
          <img className="nav-icon" src={iconEmail} alt="email"/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/hryoma">
          <img className="nav-icon" src={iconGithub} alt="github"/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ryomah/">
          <img className="nav-icon" src={iconLinkedIn} alt="linkedin"/>
        </a>
      </div>
    </nav>
  </header>
)

export default Header
