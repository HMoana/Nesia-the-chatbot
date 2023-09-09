import React from "react";
import styles from '../../Styles/Footer.module.css';

const FooterColumn = ({ headline, links }) => {
  return (
    <div className={styles.footer__content__col}>
      <div className={styles.footer__content__col__headline}>
        {headline}
      </div>
      <ul className={styles.footer__content__col__links}>
        {links.map((link, index) => (
          <li key={index + 1}>
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
