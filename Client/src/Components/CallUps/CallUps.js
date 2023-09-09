import React from "react";
import styles from "../../Styles/CallUps.module.css";
import { CallUpsData } from "./CallUpsData";
import GalleryItem from "./GalleryItem";

const CallUps = (props) => {
  const { page } = props;
  const mapData = CallUpsData.slice(0, page ? CallUpsData.length : 6);

  return (
    <div className={styles.container}>
      <div className={`${styles.callUps} ${page ? styles.page : ""}`}>
        <div className={styles["callUps__content"]}>
          <h2 className={styles["callUps__content--title"]}>
            Browse callups
          </h2>
          <div className={styles["callUps__content--gallery"]}>
            {mapData.map(({ id, callUp, Image }) => (
              <GalleryItem key={id} callUp={callUp} image={Image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUps;
