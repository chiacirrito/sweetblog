import { muffin } from "@/mock/muffin";
import styles from "./index.module.scss";
import { RiCake3Line } from "react-icons/ri";

const SectionTwo = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.div}>
        <a href="https://www.giallozafferano.it/ricerca-ricette/muffin/">
          <h4>Muffin</h4>
          <RiCake3Line className={styles.icon} />
        </a>
      </div>
      <div className={styles.section}>
        <main className={styles.main}>
          {muffin.map((food) => (
            <div key={food.id} className={styles.divMuffin}>
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

export default SectionTwo;
