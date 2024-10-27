import React, { useState, useRef, useEffect } from "react";
import styles from "./navbar.module.css";

export default function NavBar({ onCategoryChange }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sliderStyle, setSliderStyle] = useState({});
  const navRef = useRef(null);

  const handleClick = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  useEffect(() => {
    if (navRef.current) {
      const activeButton = navRef.current.querySelector(`.${styles.navItemActive}`);
      if (activeButton) {
        setSliderStyle({
          width: `${activeButton.offsetWidth}px`,
          left: `${activeButton.offsetLeft}px`,
        });
      }
    }
  }, [activeCategory]);

  return (
    <div className={styles.navBar}>
      <div className={styles.tabContainer} ref={navRef}>
        {["all", "web", "app", "design"].map((category) => (
          <button
            key={category}
            onClick={() => handleClick(category)}
            className={`${styles.navItem} ${
              activeCategory === category ? styles.navItemActive : ""
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
        <div className={styles.slider} style={sliderStyle}></div>
      </div>
    </div>
  );
}
