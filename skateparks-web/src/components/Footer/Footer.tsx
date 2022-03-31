import React from "react";
import styles from "./Footer.module.scss";
import { ActivityIcon } from "../ActivityIcon/ActivityIcon";
import { HomeIcon } from "../HomeIcon/HomeIcon";
import { PostIcon } from "../PostIcon/PostIcon";
import { SearchIcon } from "../SearchIcon/SearchIcon";
import { ProfileIcon } from "../ProfileIcon/ProfileIcon";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <HomeIcon />
      <SearchIcon />
      <PostIcon />
      <ActivityIcon />
      {/* <ProfileIcon /> */}
    </div>
  );
};
