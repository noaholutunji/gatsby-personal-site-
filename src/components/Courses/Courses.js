import React from "react"
// import Course from ./Course
import Course from "./Course"
import styles from "../../css/courses.module.css"
import Title from "../Title"

const Courses = ({ courses, title }) => {
  return (
    <section className={styles.courses}>
      <Title title={title}></Title>
      <div className="center">
        {courses.map(item => {
          return <Course key={item.id} {...item}></Course>
        })}
      </div>
    </section>
  )
}

export default Courses
