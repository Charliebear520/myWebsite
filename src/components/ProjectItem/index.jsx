import styles from "./projectitem.module.css";
import { Card, Typography } from "antd";
import { UpOutlined, DownOutlined, LinkOutlined, GithubOutlined } from "@ant-design/icons";
import { useState, useRef, useEffect } from "react";

const { Paragraph } = Typography;

export default function ProjectItem({ project }) {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (descriptionRef.current) {
        const isOverflowing = descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
        setIsOverflowing(isOverflowing);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [project.description]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const getIcons = () => {
    const icons = [];
    if (project.link) {
      icons.push(
        <a key="link" href={project.link} target="_blank" rel="noopener noreferrer">
          <LinkOutlined className={styles.icon} />
        </a>
      );
    }
    if (project.github) {
      icons.push(
        <a key="github" href={project.github} target="_blank" rel="noopener noreferrer">
          <GithubOutlined className={styles.icon} />
        </a>
      );
    }
    return icons;
  };

  return (
    <div className={styles.container}>
      <Card
        hoverable
        className={styles.card}
        size="small"
        cover={
          <div className={styles.imageContainer}>
            <img alt={project.name} src={project.image} className={styles.cardImage} />
            <div className={styles.overlay}>
              <div className={styles.iconContainer}>
                {getIcons()}
              </div>
            </div>
          </div>
        }
      >
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{project.name}</h3>
          {isOverflowing && (
            <div className={styles.iconContainer} onClick={toggleExpand}>
              {expanded ? <UpOutlined /> : <DownOutlined />}
            </div>
          )}
        </div>
        <Paragraph 
          ellipsis={expanded ? false : { rows: 2 }}
          className={`${styles.description} ${expanded ? styles.expanded : ''}`}
          ref={descriptionRef}
        >
          {project.description}
        </Paragraph>
        <div className={styles.skillsContainer}>
          {project.skills.map((skill, index) => (
            <span key={index} className={styles.skillTag}>
              #{skill}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}
