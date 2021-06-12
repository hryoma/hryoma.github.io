import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/portfolio.css"

const PortfolioPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Some notes and articles" />
      <h1>Portfolio</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="project">
          <div className="image">Image</div>
          <div className="content">
            <h2>{node.frontmatter.title}</h2>
            <div className="desc">{node.frontmatter.desc}</div>
            <div className="tags">
              {node.frontmatter.tags.map( ( tag ) => (
                <span className="tag">{tag}</span>
              ))}
            </div>
            <div className="read-more">
              <Link to={node.fields.slug}>Read More</Link>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___start_date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/projects/.+md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            cover_image
            desc
            start_date
            end_date
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default PortfolioPage
