import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import PageLayout, {Container} from "./layout"

import "../styles/markdown.css"


const MarkdownWrapper = styled.div`
  & p {
    margin-bottom: 1.25rem;
  }
`

export default function TemplateProject({ data }) {
  const project = data.markdownRemark

  return (
    <PageLayout title={project.frontmatter.title}>
      <Container>
        <h1>{project.frontmatter.title}</h1>
        <MarkdownWrapper dangerouslySetInnerHTML={{ __html: project.html }} />
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
