import React from "react"
import { graphql } from "gatsby"

import PageLayout, {Container, GridLayout} from "../components/layout"
import ProjectCard from "../components/project-card"


const ProjectsPage = ({ data }) => {
  return (
    <PageLayout title="Projects">
      <Container wide>
        <h1>Projects</h1>
      </Container>

      <Container superwide>
        <GridLayout childWidth={535}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <ProjectCard node={node} />
          ))}
        </GridLayout>
      </Container>
    </PageLayout>
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

export default ProjectsPage
