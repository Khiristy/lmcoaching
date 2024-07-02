import styles from "./Contact.module.scss";

const Contact = () => (
  <div className={styles.contact}>
    <h1>Contact Us</h1>
    <p>If you have any questions, feel free to reach out to us!</p>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Contact;

