import styles from "./index.module.scss";
import { TbCookieMan } from "react-icons/tb";

const Footer = () => {
  return (
    <div className={styles.div}>
      <TbCookieMan style={styles.icon} />
      <TbCookieMan style={styles.icon} />
      <TbCookieMan style={styles.icon} />
    </div>
  );
};

export default Footer;
