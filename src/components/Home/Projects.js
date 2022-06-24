import React from "react"
import styles from "../../css/projects.module.css"
import Project from "./Project"
import Title from "../Title"
import SelectInput from "./SelectInput"
// projects center

const Projects = ({ nodes, title, page }) => {
  const [projects, setProjects] = React.useState(nodes)
  const [type, setType] = React.useState("all")

  React.useEffect(() => {
    let tempProjects = [...nodes]
    if (type !== "all") {
      tempProjects = tempProjects.filter(item => {
        return item.technology === type
      })
    }
    setProjects(tempProjects)
  }, [type])
  const handleChange = e => {
    setType(e.target.value)
  }
  return (
    <section className={styles.projects}>
      <Title title={title}></Title>
      {page && (
        <SelectInput type={type} handleChange={handleChange} projects={nodes} />
      )}
      <div className="center">
        {projects.map(item => {
          return <Project key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Projects
