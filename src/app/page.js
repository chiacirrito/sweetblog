import Navbar from "@/components/navbar/Navbar";
import styles from "./index.module.scss";
import Footer from "@/components/footer/Footer";
import SectionOne from "@/components/sectionOne/SectionOne";
import SectionTwo from "@/components/sectionTwo/SectionTwo";
import SectionThree from "@/components/sectionThree/SectionThree";
import SectionFour from "@/components/sectionFour/SectionFour";
import SectionSix from "@/components/sectionSix/SectionSix";

export default function Home() {
  return (
    <body className={styles.body}>
      <Navbar />
      <main className={styles.main}>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionSix />{" "}
      </main>
      <Footer />
    </body>
  );
}
