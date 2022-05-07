import styles from "./Service.module.scss";
import ReactPlayer from "react-player";

const Service = () => {
  return (
    <div className={styles.ourservices}>
                   
    <div className={styles.service}>
     <h1>OUR SERVICES</h1>
     <h5 id={styles.abt}> WHAT WE CAN DO FOR YOU </h5>
     <div id={styles.abt2}>
     <h3>Hey guys, have a look at my work and designs on my website.<br/>Don't forget to look into my previous project.
      </h3>
     <h5>We basically provide five types of services i.e., Renovation, Plastering ,Masonry ,Flooring and Roofing.
         We are proud to deliver projects which meets the present day needs for housing
         and infrastructurewithout compromising the ability of future generations.
     <br/>We believe each commercial building renovation project must be planned and executed carefully.
     </h5>
     <h5>We basically provide five types of services i.e., Renovation, Plastering ,Masonry ,Flooring and Roofing.
         We are proud to deliver projects which meets the present day needs for housing
          and infrastructurewithout compromising the ability of future generations.
     <br/>We believe each commercial building renovation project must be planned and executed carefully.
     </h5>
     </div>
   </div>
<div className={styles.videoContainer}>
 <ReactPlayer className={styles.videoplayer} url='https://www.youtube.com/watch?v=GwXjdZNkCR0' />
</div>
</div>
  )
};

export default Service;
