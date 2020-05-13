import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import Courses from "../components/Courses/Courses"
import Projects from "../components/Home/Projects"
import SEO from "../components/seo"
const IndexPage = ({ data }) => {
  const {
    allContentfulCourses: { courses },
    allContentfulProjects: { nodes },
  } = data
  return (
    <Layout>
      <SEO title="Home"></SEO>
      <HomeBanner></HomeBanner>
      <Courses title="courses" courses={courses}></Courses>
      <Projects title="latest projects" nodes={nodes}></Projects>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulCourses(sort: { fields: order, order: ASC }) {
      courses: nodes {
        id
        size
        title
        url
        info {
          info
        }
        image {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    allContentfulProjects(sort: { order: DESC, fields: updatedAt }, limit: 3) {
      nodes {
        completeProject
        starterFiles
        title
        url
        id
        info {
          info
        }
        technology
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        api
      }
    }
  }
`

export default IndexPage
