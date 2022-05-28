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
      value: `/blog${slug}`,
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              summary
              categories
              tags
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
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: node.fields.slug,
        title: node.title,
      },
    })
  })
}
