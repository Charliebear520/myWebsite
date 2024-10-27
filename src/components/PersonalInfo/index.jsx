import styles from "./personal.module.css";
import { Divider, Row, Col } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
  HomeOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Personal() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Personal Info</h1>
        <p>
          I am a software engineer with a passion for creating innovative
          solutions to complex problems. I have a strong foundation in computer
          science and a passion for learning new technologies.
        </p>
      </div>
      <Row>
        <Col span={12} className={styles.info}>
          <UserOutlined style={{ fontSize: "16px", color: "#ff6f61" }} />
          <p>Kai Chun Huang</p>
        </Col>
        <Col span={12} className={styles.info}>
          <PhoneOutlined style={{ fontSize: "16px", color: "#ff6f61" }} />
          <p>(+886) 901300345</p>
        </Col>
        <Col span={12} className={styles.info}>
          <CalendarOutlined style={{ fontSize: "16px", color: "#ff6f61" }} />
          <p>2001/12/29</p>
        </Col>
        <Col span={12} className={styles.info}>
          <MailOutlined style={{ fontSize: "16px", color: "#ff6f61" }} />
          <p>50406s97116@gmail.com</p>
        </Col>
        <Col span={12} className={styles.info}>
          <FontAwesomeIcon
            icon={faGraduationCap}
            style={{ fontSize: "16px", color: "#ff6f61" }}
          />
          <p>Master on Digital Design</p>
        </Col>
        <Col span={12} className={styles.info}>
          <HomeOutlined style={{ fontSize: "16px", color: "#ff6f61" }} />
          <p>Taiwan, New Taipei City</p>
        </Col>
      </Row>
      <div className={styles.language}>
        <div className={styles.languagebox}>
          <GlobalOutlined style={{ fontSize: "16px" }} />
          <h2>Language Skill</h2>
        </div>
        <Divider style={{ margin: "0" }} />
        <p>English, Chinese, Japanese</p>
      </div>
    </div>
  );
}
