import { Col, Row } from "antd";
import styles from "./about.module.css";
import AboutItem from "../AboutItem";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.h1box}>
        <h1>About me</h1>
      </div>
      <Row className={styles.row}>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          xxl={{ span: 12 }}
        >
          {/* <img src="/about/me.png" alt="Me" className={styles.me} /> */}
          This is image place.
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
