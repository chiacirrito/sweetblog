import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <li className={styles.li}>
        <h1>Sweet Blog</h1>
      </li>
    </div>
  );
};

export default Navbar;
