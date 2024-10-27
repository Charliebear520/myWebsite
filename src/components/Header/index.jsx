import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.css";
import { motion } from "framer-motion";
import logo from "/svg/logo.svg"; // 导入logo.svg

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [sliderStyle, setSliderStyle] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // 滚动到页面顶部
    } else {
      const element = document.getElementById(tab);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50); // 当滚动超过50px时，设置为已滚动状态

    // 检测当前可视区域的元素
    const sections = ["Home", "About", "Projects"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top >= 0 && top < window.innerHeight) {
          setActiveTab(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (navRef.current) {
      const activeButton = navRef.current.querySelector(`.${styles.active}`);
      if (activeButton) {
        setSliderStyle({
          width: `${activeButton.offsetWidth}px`,
          left: `${activeButton.offsetLeft}px`,
        });
      }
    }
  }, [activeTab]);

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}>
      <img src={logo} alt="Logo" className={styles.logo} /> {/* 使用logo.svg */}
      <nav className={styles.nav} ref={navRef}>
        <ul style={{ margin: 0 }}>
          {["Home", "About", "Projects"].map((tab) => (
            <li
              key={tab}
              className={activeTab === tab ? styles.active : ""}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
        <motion.div
          className={styles.slider}
          style={sliderStyle}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </nav>
    </div>
  );
};

export default Header;
