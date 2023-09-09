import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../../Styles/Navbar.module.css';

const MenuItem = ({ url, title }) => {
  return (
    <li className={styles.navbar__menuItem}>
      <NavLink exact to={url} activeClassName={styles.navbar__menuItem_active}>
        {title}
      </NavLink>
    </li>
  );
};

export default MenuItem;
