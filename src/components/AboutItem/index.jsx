import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import Personal from "../PersonalInfo";
import Qualification from "../Education";
import Skills from "../Works";

const AboutItem = () => {
  const [activeTab, setActiveTab] = useState("1");

  const items = [
    { key: "1", label: "Personal Info", component: <Personal /> },
    { key: "2", label: "Education", component: <Qualification /> },
    { key: "3", label: "Experience", component: <Skills /> },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        {items.map((item) => (
          <motion.button
            key={item.key}
            onClick={() => setActiveTab(item.key)}
            className={`${styles.tabItem} ${activeTab === item.key ? styles.tabItemActive : ""}`}
            whileHover={{ scale: 1.05 }} // 鼠标悬停时放大
            whileTap={{ scale: 0.95 }} // 点击时缩小
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.label}
          </motion.button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }} // 初始状态
        animate={{ opacity: 1 }} // 动画状态
        exit={{ opacity: 0 }} // 退出状态
        transition={{ duration: 0.5 }} // 动画持续时间
      >
        {items.find(item => item.key === activeTab).component}
      </motion.div>
    </div>
  );
};

export default AboutItem;
