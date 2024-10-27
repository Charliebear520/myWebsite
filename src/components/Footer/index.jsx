import styles from "./footer.module.css";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  MailFilled,
  YoutubeFilled,
} from "@ant-design/icons";

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.contactInfo}>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <YoutubeFilled style={{ color: "#ff6f61" }} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <InstagramFilled style={{ color: "#ff6f61" }} />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FacebookFilled style={{ color: "#ff6f61" }} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <LinkedinFilled style={{ color: "#ff6f61" }} />
                </a>
                <a href="50406s97116@gmail.com">
                    <MailFilled style={{ color: "#ff6f61" }} />
                </a>
            </div>
            <div className={styles.copyright}>
                © 2024 KAICHUNHUANG. All rights reserved.
            </div>
        </div>
    )
}
