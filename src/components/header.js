import * as React from "react"
import { Link } from "gatsby"

import "../styles/header.css"

const Header = ({ navBrand }) => (
  <header>
    <div className="navbar-wrapper">
      <h1 className="navbar-title">
        <Link className="navbar-home-link" to="/">{navBrand}</Link>
      </h1>
    </div>
  </header>
)

export default Header
