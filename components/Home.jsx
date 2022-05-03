import styles from "./Home.module.scss";
import Image from "next/image";
import heroImage from "../public/Subtract.png";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        {/* text part */}
        <div className={styles.heroText}>
          <h1>
            Hello, I'm <span>Rengeb</span>
          </h1>
          <h3>Professional Renovator</h3>
          <p>
            Hey guys, have a look at my work and designs on my website.
            <br></br>
            Don't forget to look into my previous project
          </p>
        </div>
        {/* image part */}
        <div className={styles.imageSection}>
          <div
            // style={{ backgroundImage: `url(../public/Subtract.png)` }}
            className={styles.image}
          >
            {/* <Image src={heroImage} layout="fill"></Image> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
