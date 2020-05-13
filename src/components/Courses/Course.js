import React from "react"
import styles from "../../css/single-course.module.css"
import Image from "gatsby-image"
const Course = ({ title, url, size, image, info }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="course-link"
    >
      <article className={styles.course}>
        <div className={styles.container}>
          <Image fluid={image.fluid} />
        </div>
        <div className={styles.footer}>
          <h4>{title}</h4>
          {size && <p className={styles.size}>{size} hours</p>}
        </div>
      </article>
    </a>
  )
}

export default Course
