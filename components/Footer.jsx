import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";
import twitter from "../public/twitter.png";
import linked from "../public/linked.png";
import insta from "../public/insta.png";
import facebook from "../public/facebook.png";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.section1}>
        <h1>RENGEB</h1>
        <p>
          Hey guys, have a look at my work anddesigns on my website.<br></br>
          Don't forget to look into my previous project.
        </p>
        <div className={styles.socialLinks}>
          <div className={styles.images}>
            <Image src={facebook} width={50} height={50} margin={100} />
          </div>
          <div className={styles.images}>
            <Image src={linked} width={50} height={50} margin={100} />
          </div>
          <div className={styles.images}>
            <Image src={twitter} width={50} height={50} margin={100} />
          </div>
          <div className={styles.images}>
            <Image src={insta} width={50} height={50} margin={100} />
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <h2>SERVICES</h2>
        <ul className={styles.serviceList}>
          <li>Renovation</li>
          <li>Roofing</li>
          <li>Masonary</li>
          <li>Flooring</li>
          <li>Plastering</li>
        </ul>
      </div>
      <div className={styles.section3}>
        <h2>QUICK LINKS</h2>
        <div className={styles.quickLinks}>
          <Link href="/contact">Contact</Link>
          <Link href="/about">Portfolio</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
