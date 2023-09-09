import React from "react";
import styles from '../../Styles/Footer.module.css';

const FooterBase = () => {
  return (
    <div className={styles.footer__base}>
      <span className={styles["footer__base--year"]}>
        Upsouth&nbsp;&copy;&nbsp;{new Date().getFullYear()}
      </span>
    </div>
  );
};

export default FooterBase;
