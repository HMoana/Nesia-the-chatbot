import React from 'react';
import styles from "../../Styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContainer__imageContainer}>
        <img
          className={styles.heroContainer__ideaImage}
          src={require("../../Images/Youth.jpg")}
          alt="idea"
        />
      </div>
      <div className={styles.heroContainer__textContainer}>
        <div className={styles.heroContainer__content}>
          <h1 className={styles.heroContainer__title}>TUARI. HIWA. RIRO.</h1>
          <h2 className={styles.heroContainer__subTitle}>Share. Engage. Earn.</h2>
          <button className={styles.heroContainer__button}>Sign up NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
