import styles from "./About.module.scss";
import pic from "../public/img1.jpg";
import pic2 from "../public/planning.jpg";

import Image from "next/image";
const About = () => {
  return (
    <div className={styles.aboutcontainer}>
                       
        <div className={styles.aboutus}> 
          <h1>ABOUT US </h1>
          <h5 id={styles.abt3}> WHO WE ARE </h5>
          <div className={styles.abouttxt}> 
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
          
          <button className={styles.button}>View Our Services</button> 
          </div>
        </div>
        {/* Experience Section */}
        <div className={styles.column2}>
  
              <Image  
                    src={pic}
                    className={styles.image}
                    width={500}
                    height={250}
                    layout="responsive"
                    
                priority
                />
        
           <div className={styles.row}> 
              
                <div>
                  <h1>350+</h1>
                  <h4>Trusted Clients</h4>
                </div>
                <div >
                  <h1>215+</h1>
                  <h4>Finished Project</h4>
                </div>
                <div >
                  <h1>15+</h1>
                  <h4>Years Of Experience</h4>
                </div>
          
          </div>
        </div>

        {/* Social Section */}

       <div className={styles.social}>
               <div className={styles.thought}>
                  <p>With Destruction <br/>Comes<a>RENOVATION</a></p>
                  <span>"Willy Lamb"</span>
               </div>

          <div className={styles.followus}>

             <h3>Follow us on</h3>
             
           <div className={styles.Sicons}>
                <a href="#" class="fa fa-facebook" id={styles.fa}></a>
                <a href="#" class="fa fa-instagram" id={styles.fa}></a>
                <a href="#" class="fa fa-linkedin" id={styles.fa}></a>
                <a href="#" class="fa fa-twitter" id={styles.fa}></a> 
            </div>

          </div>
       </div>
       {/* Contact Us Section */}

      
               <div className={styles.heading}>
                  <h4>CONTACT</h4>
                <p>KEEP IN TOUCH</p>
                </div>
                <h3>LET'S START A FRUITFUL CONVERSATION.</h3>
      <div className={styles.contact}>
      <div className={styles.connect}>
      
            <div className={styles.cicon}>
                  
                  <i class="fa fa-mobile-phone"></i>
                  <i class="fa fa-envelope"></i>
                  <i class="fa fa-map-marker"></i>    
                
             </div>
            <div className={styles.cinfo}>
              
                  
                      <h3>Call Us 24/7</h3><p>(+1)800-600-2323
                </p>
                  
                      <h3>Mail Us 24/7 </h3><p>Info@rengebxweb.co.in</p>
                  
                      <h3>Visit Us 24/7</h3><p> 1508 North Street, AustinTexas,US</p>
                
             </div>
 
       </div>

          <div className={styles.cimage} >
            <Image 
            src={pic2}
            width={597}
            height={695}
            style={{
                marginTop:"8%",
                
            }}
            />
           </div>

      </div>

    </div>
  )
};

export default About;
