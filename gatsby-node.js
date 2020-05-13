/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      tutorials: allContentfulTutorials {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.tutorials.nodes.forEach(product => {
    createPage({
      path: `/tutorials/${product.slug}`,
      component: path.resolve(`src/templates/tutorial-template.js`),
      context: {
        slug: product.slug,
      },
    })
  })
}
