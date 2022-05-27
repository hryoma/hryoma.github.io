import { graphql, Link } from "gatsby"
import React from "react"
import PageLayout, {Container} from "./layout"
import "../styles/markdown.css"

export default function TemplateProject({ data }) {
  const project = data.markdownRemark

  return (
    <PageLayout title={project.frontmatter.title} className="template-project project-node">
      <Container>
        <h1>{project.frontmatter.title}</h1>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: project.html }} />
        <div className="back-link" style={{ marginTop: "2rem" }}>
          <Link to="/portfolio/">Back to Portfolio</Link>
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
