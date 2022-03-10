import React from "react";
import styles from "./ContentPiece.module.scss";

export const ContentPiece = () => {
  return (
    <div className={styles.contentPiece}>
      <img className={styles.photo} src="./images/testpic2.JPG" />
    </div>
  );
};
