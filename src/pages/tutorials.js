import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Tutorials from "../components/Tutorials"
const TutorialsPage = ({ data }) => {
  const {
    allContentfulTutorials: { nodes },
  } = data

  return (
    <Layout>
      <SEO title="Tutorials" />
      <Tutorials nodes={nodes} title="tutorials" />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulTutorials(sort: { fields: order, order: ASC }) {
      nodes {
        title
        size
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        id
        slug
      }
    }
  }
`
export default TutorialsPage
