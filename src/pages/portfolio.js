import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectCard from "../components/project-card"

import "../styles/portfolio.css"


const PortfolioPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Portfolio" />
      <div className="container-wide">
        <h1>Portfolio</h1>
        <div className="grid-layout">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="card-wrapper">
              <ProjectCard node={node} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___start_date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/projects/.+md$/" },
                frontmatter: { visibility: {ne: "none"} }
      }
    ) {
      edges {
        node {
          frontmatter {
            cover_image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                )
              }
            }
            title
            role
            start_date(formatString: "MMM YYYY")
            end_date(formatString: "MMM YYYY")
            desc
            github_link
            external_link
            tags_type
            tags_framework
            tags_language
            tags_tech
            visibility
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
