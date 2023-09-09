import React from "react";
import styles from "../../Styles/CallUps.module.css";

const GalleryItem = ({ callUp, image }) => (
  <div className={styles.gallery__item}>
    <img
      src={image}
      alt={callUp}
      className={styles["gallery__item--img"]}
    />
    <div className={styles.overlay} />
    <div className={styles.gallery__item__content}>
      <h2 className={styles.gallery__item__content__callUp}>
        {callUp}
      </h2>
    </div>
  </div>
);

export default GalleryItem;
