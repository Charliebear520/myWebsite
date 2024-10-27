import React from "react";
import { Timeline, ConfigProvider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import workData from "../../json/work.json";
import styles from "./work.module.css";

export default function Works() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
        Experience
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
          {workData.map((work) => (
            <Timeline.Item key={work.id} color="#ff6f61">
              <div className={styles.timelineContent}>
                <div>
                  <h3>{work.company}</h3>
                  <p>{work.job}</p>
                </div>
                <div>
                  <p className={styles.period}>
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className={styles.calendarIcon}
                    />
                    {work.period}
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
