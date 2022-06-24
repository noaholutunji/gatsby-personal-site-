import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/Title"
import Video from "../components/Video"
const ComponentName = ({ data }) => {
  const {
    tutorial: { title, url, starter, source },
  } = data
  return (
    <Layout>
      <section className="section">
        <Title title={title}></Title>
        <div className="video-container">
          <Video src={url} title={title} />
          <div className="links-container">
            {starter && (
              <a href={starter} target="_blank" rel="noopener noreferrer">
                starter project
              </a>
            )}
            {source && (
              <a href={source} target="_blank" rel="noopener noreferrer">
                source code
              </a>
            )}
          </div>
        </div>

        <Link to="/tutorials" className="btn center-btn">
          tutorials
        </Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    tutorial: contentfulTutorials(slug: { eq: $slug }) {
      title
      url
      starter
      source
    }
  }
`

export default ComponentName
