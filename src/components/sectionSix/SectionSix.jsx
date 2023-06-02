import { cookies } from "@/mock/cookies";
import styles from "./index.module.scss";
import { RxCookie } from "react-icons/rx";

const SectionSix = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.div}>
        <a href="https://www.giallozafferano.it/ricerca-ricette/cookies/">
          <RxCookie className={styles.icon} />
        </a>
      </div>
      <div className={styles.section}>
        <main className={styles.main}>
          {cookies.map((food) => (
            <div key={food.id} className={styles.divCookies}>
              <a href={food.link}>
                <img
                  id="img"
                  src={food.img}
                  alt={food.titolo}
                  width={250}
                  height={150}
                  className={styles.img}
                />
                <h4 className={styles.h4}>{food.text}</h4>
              </a>
              <div className={styles.titolo}>{food.titolo}</div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default SectionSix;
