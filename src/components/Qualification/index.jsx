import React from "react";
import { Timeline, ConfigProvider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import educationData from "../../json/education.json";
import styles from "./qualification.module.css";

export default function Qualification() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <FontAwesomeIcon icon={faGraduationCap} className={styles.icon} />
        Education
      </h2>
      <ConfigProvider
        theme={{
          components: {
            Timeline: {
              itemPaddingBottom: "0px",
            },
          },
          token: {
            /* here is your global tokens */
            fontSize: 16,
          },
        }}
      >
        <Timeline>
          {educationData.map((edu) => (
            <Timeline.Item key={edu.id} color="#ff6f61">
              <div className={styles.timelineContent}>
                <div>
                  <h3>{edu.school}</h3>
                  <p>{edu.department}</p>
                </div>
                <div>
                  <p className={styles.period}>
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className={styles.calendarIcon}
                    />
                    {edu.period}
                  </p>
                </div>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      </ConfigProvider>
    </div>
  );
}
