import React from "react";
import styles from "./Main-card.module.scss";
import { ContentPiece } from "./ContentPiece/ContentPiece";

export const MainCard = () => {
  return (
    <div className={styles.mainCard}>
      {/* Card header - count info, profile pic, location, more options*/}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <img className={styles.profilePic} src="./images/testpic.JPG" />
          <div className={styles.handleLocation}>
            <div className={styles.handle}>profilehandle</div>
            <div className={styles.location}>Nashville, Tennessee</div>
          </div>
        </div>
        <div className={styles.headerRight}>...</div>
      </div>
      {/* Picture / video - option to swipe */}
      <div className={styles.contentContainer}>
        <ContentPiece />
      </div>
      {/* Interactions - Like, comment, send to other user, save */}
      <div className={styles.interactions}>
        <div className={styles.interactionsLeft}>
          <div className={styles.like}>heart</div>
          <div className={styles.comment}>bubble</div>
          <div className={styles.share}>paperplane</div>
        </div>
        <div className={styles.interactionsRight}>bookmark</div>
      </div>
      {/* Number of likes */}
      {/* Profile name and caption - click to see more */}
      {/* Preview a couple comments - click to see more */}
      {/* Time since post if within range or post date */}
    </div>
  );
};
