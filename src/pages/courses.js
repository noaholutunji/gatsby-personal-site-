import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Courses from "../components/Courses/Courses"
import SEO from "../components/seo"

const courses = ({ data }) => {
  const {
    allContentfulCourses: { courses },
  } = data
  return (
    <Layout>
      <SEO title="Courses" />
      <Courses title="all courses" courses={courses} />
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
  }
`

export default courses
