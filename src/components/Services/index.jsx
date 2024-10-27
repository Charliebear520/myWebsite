import { Col, Row } from "antd";
import styles from "./service.module.css";
import ServiceItem from "../ServiceItem";

export default function Services({ services }) {
  return (
    <div className={styles.container}>
      <div className={styles.h1box}>
      <img src="/svg/dots-light.svg" alt="Shape" />
        <h1>Services</h1>
      </div>
      <Row>
        {services.map((service) => (
          <Col
            key={service.id}
            sm={{ span: 24 }}
            lg={{ span: 8 }}
            xl={{ span: 8 }}
            xxl={{ span: 8 }}
            className={styles.h1box}
          >
            <ServiceItem service={service} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
