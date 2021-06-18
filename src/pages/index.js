import * as React from "react"
import { Link } from "gatsby"
import resumePdf from "../assets/RyomaHarris.pdf"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 className="home-title"><span className="typewriter-text">Ryoma Harris</span></h1>
    <a className="resume-btn" target="_blank" rel="noopener noreferrer" href={resumePdf}>Resume</a>
  </Layout>
)

export default IndexPage
