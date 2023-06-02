import { cheesecake } from "@/mock/cheesecake";
import styles from "./index.module.scss";
import { GiCakeSlice } from "react-icons/gi";

const SectionOne = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.div}>
        <a href="https://www.giallozafferano.it/ricette-cat/Dolci-e-Desserts/Cheesecakes/">
          <GiCakeSlice className={styles.icon} />
        </a>
      </div>
      <div className={styles.section}>
        <main className={styles.main}>
          {cheesecake.map((food) => (
            <div key={food.id} className={styles.divCheesecake}>
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

export default SectionOne;
