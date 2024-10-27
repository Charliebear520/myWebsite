import React, { useState, useRef, useEffect } from "react";
import styles from "./about.module.css";
import Personal from "../PersonalInfo";
import Qualification from "../Education";
import Skills from "../Works";

const AboutItem = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [sliderStyle, setSliderStyle] = useState({});
  const tabRef = useRef(null);

  const items = [
    { key: "1", label: "Personal Info", component: <Personal /> },
    { key: "2", label: "Education", component: <Qualification /> },
    { key: "3", label: "Experience", component: <Skills /> },
  ];

  useEffect(() => {
    if (tabRef.current) {
      const activeButton = tabRef.current.querySelector(`.${styles.tabItemActive}`);
      if (activeButton) {
        setSliderStyle({
          width: `${activeButton.offsetWidth}px`,
          left: `${activeButton.offsetLeft}px`,
        });
      }
    }
  }, [activeTab]);

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer} ref={tabRef}>
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveTab(item.key)}
            className={`${styles.tabItem} ${
              activeTab === item.key ? styles.tabItemActive : ""
            }`}
          >
            {item.label}
          </button>
        ))}
        <div className={styles.slider} style={sliderStyle}></div>
      </div>
      <div className={styles.tabContent}>
        {items.find((item) => item.key === activeTab)?.component}
      </div>
    </div>
  );
};

export default AboutItem;
