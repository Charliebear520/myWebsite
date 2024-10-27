import styles from "./project.module.css";
import { Col, Row } from "antd";
import ProjectItem from "../ProjectItem";
import NavBar from "../NavBar";

export default function Projects({projects, handleCategoryChange}) {
  return (
    
    <div className={styles.container}>
      <div className={styles.h1box}>
        <h1>Projects</h1>
      </div>
      <NavBar onCategoryChange={handleCategoryChange} />
      <Row className={styles.row}>
        {projects.map((project) => (
          <Col
            key={project.id}
            sm={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            xxl={{ span: 6 }}
            className={styles.h1box}
          >
            <ProjectItem project={project} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
