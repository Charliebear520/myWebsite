import { Button, Row, Col } from "antd";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./hero.module.css";
import {
  FacebookFilled,
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
  ArrowUpOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <AnimatePresence>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <Row className={styles.background}>
          <Col span={12}>
            <div className={styles.box}>
              <h4 className={styles.h4}>WEB DEVELOPER</h4>
              <motion.h1 className={styles.h1} variants={titleVariants}>
                Hello, My name is <br />
                KaiChun Huang
              </motion.h1>
              <p>
                Brief description with insights into myself, my vocational
                <br />
                journey, and what I engage in professionally.
              </p>
              <div className={styles.ButtonBox}>
                <motion.div
                  whileHover="hover" // 當 hover 到整個按鈕時，觸發內部動畫
                >
                  <Button
                    type="primary"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "20px",
                      backgroundColor: "#ff6f61",
                      borderColor: "#ff6f61",
                      color: "#ffffff",
                      padding: "20px 24px",
                    }}
                    className={styles.buttonbox}
                  >
                    {/* 按鈕文字 */}
                    Click Me
                    {/* 使用 Framer Motion 來控制箭頭的旋轉 */}
                    <motion.div
                      style={{ display: "inline-block", marginLeft: "8px" }}
                      variants={{
                        hover: { rotate: -45 }, // 定義 hover 狀態時旋轉角度
                      }}
                      initial={{ rotate: 45 }} // 初始角度為右上方
                      transition={{ duration: 0.3 }} // 動畫持續時間
                    >
                      <ArrowUpOutlined />
                    </motion.div>
                  </Button>
                </motion.div>
                <Button
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "20px",
                    backgroundColor: "#0d1b2a",
                    borderColor: "#0d1b2a",
                    color: "#ffffff",
                    padding: "20px 24px",
                  }}
                  className={styles.buttonbox}
                >
                  DownloadCV
                  <DownloadOutlined />
                </Button>
              </div>
              <div className={styles.infoBox}>
                <YoutubeFilled />
                <LinkedinFilled />
                <GithubFilled />
                <FacebookFilled />
                <InstagramFilled />
              </div>
            </div>
          </Col>
          <Col sapn={12} className={styles.col}>
            <div
              style={{
                position: "relative",
                width: "480px",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              {/* 底層圖片 */}
              <img
                src="/hero/shape-2-light.svg"
                alt="Background"
                style={{
                  width: "480px",
                  height: "100%",
                  position: "absolute",
                  zIndex: 1,
                }}
              />

              {/* 上層疊加圖片 */}
              <img
                src="/hero/shape-1.svg"
                alt="Overlay"
                style={{
                  width: "480px",
                  height: "100%",
                  position: "absolute",
                  bottom: "10px",
                  right: "16px",
                  zIndex: 2,
                }}
              />
              {/* 第三層圖片（疊加在 overlay-image.png 之上） */}
              <img
                src="/hero/me.png"
                alt="Third Layer"
                style={{
                  width: "auto",
                  height: "140%",
                  position: "absolute",
                  zIndex: 3,
                }}
              />
            </div>
          </Col>
        </Row>
      </motion.section>
    </AnimatePresence>
  );
};

export default Hero;
