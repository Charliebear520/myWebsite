import { Col, Row } from "antd";
import styles from "./about.module.css";
import AboutItem from "../AboutItem";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.h1box}>
        <img src="/svg/dots-light.svg" alt="Shape" />
        <h1>About me</h1>
      </div>
      <Row className={styles.row}>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          xxl={{ span: 12 }}
          className={styles.col}
        >
          <div
            style={{
              position: "relative",
              width: "480px",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden", // 确保超出部分被隐藏
              backgroundImage: 'url("/about/shape-light.svg")', // 背景图片
              backgroundSize: "contain", // 使背景图片适应容器
              backgroundPosition: "center", // 将背景图片居中
              backgroundRepeat: "no-repeat", // 不重复背景图片
            }}
          >
            <img
              src="/about/me.png"
              alt="Me"
              style={{
                width: "50%", // 设置为100%以适应容器
                height: "auto", // 自动调整高度以保持比例
                objectFit: "contain", // 确保图片在容器内保持比例
              }}
            />
          </div>
        </Col>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          xxl={{ span: 12 }}
        >
          <AboutItem />
        </Col>
      </Row>
    </div>
  );
}
