import styles from "./styles.module.scss";
import { SocialMedia } from "./SocialMedia/";

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.copyText}>
        <p>© 2021 Problemong. All rights reserved</p>
      </div>
      <div className={styles.socialMediaContainer}>
        <SocialMedia />
        <SocialMedia />
        <SocialMedia />
        <SocialMedia />
      </div>
    </div>
  );
}
