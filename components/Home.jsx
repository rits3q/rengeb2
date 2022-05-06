import styles from "./Home.module.scss";
import Image from "next/image";
import heroImage from "../public/Subtract.png";
import Footer from "./Footer";
import pic1 from "../public/service1.jpg";
import pic2 from "../public/service2.jpg";
import pic3 from "../public/service3.jpg";

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
          <div>
            <button className={styles.button}>Contact Us</button>
            <button className={styles.button2}>Portfolio</button>
          </div>
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

      {/* About us Section */}
      <div className={styles.aboutSection}>
        <h1 className={styles.heading}>ABOUT US</h1>

        <div className={styles.maincolumn}>
          <div className={styles.cardcolumn}>
            <p>
              <span>350+</span> Trusted Clients
            </p>
            <p>
              <span>215+</span>Finished Project
            </p>
            <p>
              <span>15+</span> Years Of Experience
            </p>
          </div>
          <div className={styles.aboutcolumn}>
            <h3>WHO WE ARE</h3>
            <h2>
              Hey guys, have a look at my work and designs on my website.
              <br />
              Don't forget to look into my previous project.
            </h2>
            <p>
              We basically provide five types of services i.e., Renovation,
              Plastering ,Masonry ,Flooring and Roofing. We are proud to deliver
              projects which meets the present day needs for housing
              <br /> and infrastructurewithout compromising the ability of
              future generations.
              <br />
              We believe each commercial building renovation project must be
              planned and executed carefully.
            </p>
            <button className={styles.button}>READ MORE</button>
          </div>
        </div>
      </div>
      {/* Our Service Section */}
      <div className={styles.services}>
        <h1 className={styles.heading}>our services</h1>
        <h5 style={{ textAlign: "center" }}>WHAT WE CAN DO FOR YOU</h5>

        <div className={styles.imageSection}>
          <div className={styles.image}>
            <Image src={pic1} width="400" height="900" />
            <h1>
              <span>01</span>RENNOVATION
            </h1>
          </div>
          <div className={styles.image}>
            <Image src={pic2} width="400" height="900" />
            <h1>
              <span>02</span>ROOFING
            </h1>
          </div>
          <div className={styles.image}>
            <Image src={pic3} width="400" height="900" />
            <h1>
              <span>03</span>FLOORING
            </h1>
          </div>
          {/* <div className={styles.image4}>
            <Image 
             src={pic1}
             width="400"
             height="900"/>
            </div>
            <div className={styles.image5}>
            <Image 
             src={pic1}
             width="400"
             height="900"/>
            </div> */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
