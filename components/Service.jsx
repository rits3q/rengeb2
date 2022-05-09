import styles from "./Service.module.scss";
import ReactPlayer from "react-player";
import Image from "next/image";

const Service = () => {
  return (
    <div className={styles.ourservices}>
      <div className={styles.service}>
        <h1>OUR SERVICES</h1>
        <h5 id={styles.abt}> WHAT WE CAN DO FOR YOU </h5>
        <div id={styles.abt2}>
          <h3>
            Hey guys, have a look at my work and designs on my website.
            <br />
            Don't forget to look into my previous project.
          </h3>
          <h5>
            We basically provide five types of services i.e., Renovation,
            Plastering ,Masonry ,Flooring and Roofing. We are proud to deliver
            projects which meets the present day needs for housing and
            infrastructurewithout compromising the ability of future
            generations.
            <br />
            We believe each commercial building renovation project must be
            planned and executed carefully.
          </h5>
          <h5>
            We basically provide five types of services i.e., Renovation,
            Plastering ,Masonry ,Flooring and Roofing. We are proud to deliver
            projects which meets the present day needs for housing and
            infrastructurewithout compromising the ability of future
            generations.
            <br />
            We believe each commercial building renovation project must be
            planned and executed carefully.
          </h5>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <ReactPlayer
          className={styles.videoplayer}
          url="https://www.youtube.com/watch?v=GwXjdZNkCR0"
          width="100%"
          height="100%"
        />
      </div>
      <div className={styles.contactus}>
        <h3>
          Do you want to renovate <br /> your house or offices ?
        </h3>
        <div className={styles.cbutton}>
          <button>Contact Us</button>
        </div>
      </div>
      {/* Services Section */}

      <div className={styles.services}>
        <div className={styles.renovation}>
          <Image src={"/renovation.jpg"} layout={"fill"} />
          <div className={styles.content1}>
            <h1>01 </h1>
            <h1> RENOVATION</h1>
            <h2>
              means the process of returning something to good state of repair.
            </h2>
          </div>
        </div>
        <div className={styles.roofing}>
          <Image src={"/roofing.jpg"} layout={"fill"} />
          <div className={styles.content2}>
            <h1>02 </h1>
            <h1> ROOFING</h1>
            <h2>
              means the process of putting roofs on new buildings or repairing
              damaged roofs.
            </h2>
          </div>
        </div>
        <div className={styles.flooring}>
          <Image src={"/flooring.jpg"} layout={"fill"} />
          <div className={styles.content3}>
            <h1>03 </h1>
            <h1> FLOORING</h1>
            <h2>
              It is the general term for a permanent covering of a floor, or for
              the work of installing such a floor covering.
            </h2>
          </div>
        </div>
        <div className={styles.masonry}>
          <Image src={"/renovation.jpg"} layout={"fill"} />
          <div className={styles.content4}>
            <h1>04 </h1>
            <h1> MASONRY</h1>
            <h2>
              means the parts of a building that are made of stones,bricks
            </h2>
          </div>
        </div>
        <div className={styles.plastering}>
          <Image src={"/plastering.jpg"} layout={"fill"} />
          <div className={styles.content5}>
            <h1>05</h1> <h1> PLASTERING</h1>
            <h2>
              means to cover a wall with plaster to make the surface smooth.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
