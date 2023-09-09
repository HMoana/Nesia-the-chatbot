import React from "react";
import styles from '../../Styles/Footer.module.css';
import Moana from '../../Images/Moana.jpg';

const SubscriptionSection = ({ handleSubmit, setEmail, email }) => {
  return (
    <div className={styles.footer__subscription}>
      <img src={Moana} alt="hook" className={styles.moana} />
      <h4 className={styles["footer__subscription--headline"]}>
        Want to become a sponsor? Subscribe here for more info.
      </h4>
      <div className={styles["footer__subscription--form"]} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Your Email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <button className={styles.footer__btn}>Subscribe</button>
      </div>
    </div>
  );
};

export default SubscriptionSection;
