import React from "react";
import styles from "./Caption.module.scss";

export const Caption = () => {
  const dummyCaption = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat sed doloribus sapiente quae beatae maxime asperiores consequatur iste et. Aut quisquam neque dolores commodi nihil libero fuga. Voluptatum, unde nobis!`;

  return (
    <div className={styles.caption}>
      <span className={styles.profileName}>profilehandle</span>
      <span className={styles.captionText}>{dummyCaption}</span>
    </div>
  );
};
