import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.Contactcontainer}>
      <h1>CONTACT US </h1>
      <div className={styles.titles}>
        <h3>LETS CONNECT</h3>
        <h2>
          Drop us your message and we will get back to you as soon as possible
        </h2>
      </div>
      {/*       
      <form className={styles.forms}>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <button type="submit" value="Submit">
    Submit
  </button>
     </form> */}
    </div>
  );
};

export default Contact;
