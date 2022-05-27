import * as React from "react"
import { Link } from "gatsby"

import Brand from "./brand";
import "../styles/header.css"

const Navbar = () => (
  <header id="navbar">
    <div className="nav-wrapper">
      <Brand/>
      <div className="nav-menu">
        <p>ls</p>
        <Link className="nav-link" to="/portfolio/">portfolio/</Link>
      </div>
    </div>
  </header>
)

export default Navbar
