import React from "react";
import { MenuList } from "./MenuList";
import MenuItem from "./MenuItem";
import styles from '../../Styles/Navbar.module.css';

const MenuListContainer = ({ isMenuOpen }) => {
  const menuItems = MenuList.map(({ url, title }, index) => (
    <MenuItem key={index} url={url} title={title} />
  ));

  return (
    <ul
      className={`${styles.navbar__menuList} ${
        isMenuOpen ? styles.navbar__menuList_opened : styles.navbar__menuList_close
      }`}
    >
      {menuItems}
    </ul>
  );
};

export default MenuListContainer;
