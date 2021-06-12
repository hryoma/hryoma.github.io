import * as React from "react"

import "../styles/footer.css"

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <h1 className="footer-title">
        Ryoma © {new Date().getFullYear()}
      </h1>
      <a className="socials-link"
            href="https://github.com/hryoma"
            target="_blank"
            rel="noopener noreferrer">
        GitHub
      </a>
      <a className="socials-link"
            href="https://linkedin.com/in/ryomah"
            target="_blank"
            rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  </footer>
)

export default Footer
