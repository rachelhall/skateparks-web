import React from "react";
import styles from "./Header.module.scss";
import { MessagesIcon } from "../MessagesIcon/MessagesIcon";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Skateparks</div>
      <div className={styles.headerRight}>
        <MessagesIcon />
      </div>
    </div>
  );
};
