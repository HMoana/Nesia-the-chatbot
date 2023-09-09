import React from "react";
import styles from '../../Styles/Navbar.module.css';

const MenuIcon = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`${styles.navbar__menuIcon} ${
        isMenuOpen && styles.navbar__menuIcon_active
      }`}
      onClick={toggleMenu}
    >
      <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
    </div>
  );
};

export default MenuIcon;
