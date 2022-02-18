import React from "react";
import styles from "./Interactions.module.scss";
import { Like } from "../../../Like/Like";
import { Comment } from "../../../Comment/Comment";
import { Share } from "../../../Share/Share";
import { Save } from "../../../Save/Save";

interface IProps {
  prevIsLiked: boolean;
  setPrevIsLiked: (value: boolean) => void;
}

export const Interactions: React.FC<IProps> = ({
  prevIsLiked,
  setPrevIsLiked,
}) => {
  return (
    <div className={styles.interactions}>
      <div className={styles.interactionsLeft}>
        <Like prevIsLiked={prevIsLiked} setPrevIsLiked={setPrevIsLiked} />
        <Comment />
        <Share />
      </div>
      <div className={styles.interactionsRight}>
        <Save />
      </div>
    </div>
  );
};
