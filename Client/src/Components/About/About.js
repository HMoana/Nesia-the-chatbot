import React from 'react';
import styles from '../../Styles/About.module.css';
import YouTubeEmbed from './YouTubeEmbed';

const About = () => {
  const videoId = "qHvFCSgxH6NY7SFr"; 

  return (
    <div className={styles["about__container"]}>
      <h1>What is Upsouth?</h1>
      <div className={styles["about__video"]}>
        <YouTubeEmbed videoId={videoId} />
      </div>
    </div>
  );
};

export default About;





