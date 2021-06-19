import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectCard from "../components/project-card"

import "../styles/portfolio.css"


const PortfolioPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Portfolio" />
      <div className="container">
        <h1>Portfolio</h1>
        <div class="grid-layout">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="card-wrapper">
            <ProjectCard image={node.frontmatter.cover_image}
                         title={node.frontmatter.title}
                          role={node.frontmatter.role}
                     startDate={node.frontmatter.start_date}
                       endDate={node.frontmatter.end_date}
                          desc={node.frontmatter.desc}
                    githubLink={node.frontmatter.github_link}
                  externalLink={node.frontmatter.external_link}
                          tags={node.frontmatter.tags}
                    visibility={node.frontmatter.visibility}
                          slug={node.fields.slug} />
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
            cover_image
            title
            role
            start_date(formatString: "MMM YYYY")
            end_date(formatString: "MMM YYYY")
            desc
            github_link
            external_link
            tags
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
