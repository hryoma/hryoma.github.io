import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import resumePdf from "../assets/RyomaHarris.pdf"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Ryoma Harris</h1>
    <p>Software Developer</p>
    <button className="resume-btn">
      <a href={resumePdf} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </button>
    <p>
      <Link to="/portfolio/">Portfolio</Link>
    </p>
  </Layout>
)

export default IndexPage
