import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Brand from "./brand";

const Nav = styled.nav`
  font-family: var(--font-monospace);
  background-color: var(--c-bg-elevated);
  padding: 10px 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  align-items: center;
`

const NavWrapper = styled.div`
  height: 100%;
  margin: auto;
  display: flex;
`

const NavMenu = styled.div`
  height: auto;
`

const NavLink = styled(Link)`
  color: var(--c-bright-blue);
  transition: all ease-in-out 0.15s;

  &:hover {
    text-decoration: underline;
    filter: drop-shadow(0 0 1px var(--c-blue));
  }
`

const Navbar = () => (
  <Nav id="navbar">
    <NavWrapper>
      <Brand/>
      <NavMenu>
        <p>ls</p>
        <NavLink to="/projects/">projects/</NavLink>
      </NavMenu>
    </NavWrapper>
  </Nav>
)

export default Navbar
