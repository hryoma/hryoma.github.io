import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import PageLayout, {Container} from "../components/layout"

import "../styles/markdown.css"


const MarkdownWrapper = styled.div`
  & p {
    margin-bottom: 1.25rem;
  }
`

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <PageLayout title={post.frontmatter.title}>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <MarkdownWrapper dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="back-link" style={{ marginTop: "2rem" }}>
          <Link to="/blog/">Back to All Posts</Link>
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
