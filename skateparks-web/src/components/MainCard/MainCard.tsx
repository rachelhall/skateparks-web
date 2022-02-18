import React, { useState } from "react";
import styles from "./MainCard.module.scss";
import { ContentPiece } from "./ContentPiece/ContentPiece";
import { Interactions } from "./CardBottom/Interactions/Interactions";
import { Caption } from "./CardBottom/Caption/Caption";
import { ProfilePic } from "../ProfilePic/ProfilePic";

// interface IProps {
//   user: string;
//   location: string;
// }

export const MainCard = () => {
  const [prevIsLiked, setPrevIsLiked] = useState(false);
  return (
    <div className={styles.mainCard}>
      {/* Card header - count info, profile pic, location, more options*/}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <ProfilePic />
          <div className={styles.handleLocation}>
            <div className={styles.handle}>profilename</div>
            <div className={styles.location}>Nashville, TN</div>
          </div>
        </div>
        <div className={styles.headerRight}>...</div>
      </div>
      {/* Picture / video - option to swipe */}
      <div className={styles.contentContainer}>
        <ContentPiece />
      </div>
      {/* Bottom of Card */}
      <div className={styles.cardBottom}>
        {/* Interaction buttons */}
        <Interactions
          prevIsLiked={prevIsLiked}
          setPrevIsLiked={setPrevIsLiked}
        />
        {/* Number of likes */}
        <div className={styles.likeCount}>Liked by 3,279 others</div>
        {/* Profile name and caption - click to see more */}
        <Caption />
      </div>

      {/* Preview a couple comments - click to see more */}
      {/* Time since post if within range or post date */}
    </div>
  );
};
