/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// Add fields to nodes.
exports.onCreateNode = ({ node, getNode, actions }) => {
  // Add the slug field to the MarkdownRemark nodes.
  if (node.internal.type === `MarkdownRemark`) {
    const { createNodeField } = actions
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark (
        filter: { frontmatter: { visibility: {eq: "post"} } }
      ) {
        edges {
          node {
            frontmatter {
              title
              role
              start_date
              end_date
              desc
              github_link
              external_link
              tags_type
              tags_framework
              tags_language
              tags_tech
            }
            fields {
              slug
            }
            fileAbsolutePath
            excerpt
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/components/template-project.js"),
      context: {
        slug: node.fields.slug,
        title: node.title,
      },
    })
  })
}
