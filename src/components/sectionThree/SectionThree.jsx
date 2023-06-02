import { plumcake } from "@/mock/plumcake";
import styles from "./index.module.scss";
import { BiCake } from "react-icons/bi";

const SectionThree = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.div}>
        <a href="https://www.giallozafferano.it/ricerca-ricette/plumcake+le+migliori+ricette/">
          <h4>Plumcake</h4>
          <BiCake className={styles.icon} />
        </a>
      </div>
      <div className={styles.section}>
        <main className={styles.main}>
          {plumcake.map((food) => (
            <div key={food.id} className={styles.divPlumcake}>
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

export default SectionThree;
