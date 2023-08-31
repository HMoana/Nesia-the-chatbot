import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import styles from '../Styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index} className={styles.navbar__menuItem}>
        <NavLink exact to={url} activeClassName={styles.navbar__menuItem_active}>
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logoContainer}>
        <h1>Upsouth</h1>
      </div>
      <div className={`${styles.navbar__menuIcon} ${isOpen && styles.navbar__menuIcon_active}`} onClick={handleClick}>
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <ul className={`${styles.navbar__menuList} ${isOpen ? styles.navbar__menuList_opened : styles.navbar__menuList_close}`}>{menuList}</ul>
    </nav>
  );
};

export default Navbar;
