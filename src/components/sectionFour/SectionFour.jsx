import { cupcake } from "@/mock/cupcake";
import styles from "./index.module.scss";
import { GiCupcake } from "react-icons/gi";

const SectionFour = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.div}>
        <a href="https://www.giallozafferano.it/ricerca-ricette/le+migliori+ricette+di+cupcake+golosi/">
          <GiCupcake className={styles.icon} />
        </a>
      </div>
      <div className={styles.section}>
        <main className={styles.main}>
          {cupcake.map((food) => (
            <div key={food.id} className={styles.divCupcake}>
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

export default SectionFour;
