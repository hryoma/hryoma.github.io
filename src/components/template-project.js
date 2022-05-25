import { graphql, Link } from "gatsby"
import React from "react"
import Seo from "./seo"
import Layout, {Container} from "./layout"
import "../styles/markdown.css"

export default function TemplateProject({ data }) {
  const project = data.markdownRemark

  return (
    <Layout className="template-project project-node">
      <Seo title={project.frontmatter.title} />
      <Container>
        <h1>{project.frontmatter.title}</h1>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: project.html }} />
        <div className="back-link" style={{ marginTop: "2rem" }}>
          <Link to="/portfolio/">Back to Portfolio</Link>
        </div>
      </Container>
    </Layout>
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
