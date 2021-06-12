import { graphql, Link } from "gatsby"
import React from "react"
import Seo from "./seo"
import Layout from "./layout"

export default function TemplateProject({ data }) {
  const project = data.markdownRemark

  return (
    <Layout className="template-project project-node">
      <Seo title={project.frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
      <div className="back-link" style={{ marginTop: "2rem" }}>
        <Link to="/portfolio/">Back to Portfolio</Link>
      </div>
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
