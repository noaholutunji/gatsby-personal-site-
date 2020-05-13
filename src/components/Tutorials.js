import React from "react"
import Title from "./Title"
import { Link } from "gatsby"
import Image from "gatsby-image"
const Tutorials = ({ title, nodes }) => {
  return (
    <section className="section">
      <Title title={title}></Title>
      <div className="section-center center">
        {nodes.map(item => {
          const { id, title, image = "", slug, size } = item
          console.log(size)

          return (
            <Link key={id} to={`/tutorials/${slug}`}>
              <article className="tutorial">
                {image && <Image fluid={image.fluid} />}
                <div className="tutorial-footer">
                  <h4>{title}</h4>
                  <p>{size} hours</p>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Tutorials
