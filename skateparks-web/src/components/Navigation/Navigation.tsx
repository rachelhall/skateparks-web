import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FEED_VIEW_ROUTE,
  LOGIN_VIEW_ROUTE,
  routes,
  SIGNUP_VIEW_ROUTE,
} from "src/apps/SkateparksApp/skateparksAppRoutes";
import ActivityIcon from "src/styleComponents/ActivityIcon";

import HomeIcon from "src/styleComponents/HomeIcon";
import MessagesIcon from "src/styleComponents/MessagesIcon";
import PostIcon from "src/styleComponents/PostIcon";
import ProfilePic from "src/styleComponents/ProfilePic";
import SearchIcon from "src/styleComponents/SearchIcon";
import Text from "../../styleComponents/Text";
import NavButton from "../../styleComponents/NavButton";

import "./Navigation.scss";
import { ENavType } from "src/styleComponents/NavButton/NavButton";

interface IProps {
  pathname: string;
}

export const Navigation: React.FC<IProps> = (props) => {
  const { pathname } = props;
  const activeView = useMemo(() => {
    if (pathname.includes("feed")) {
      return ENavType.FEED;
    } else if (pathname.includes("messages")) {
      return ENavType.MESSAGES;
    } else {
      return ENavType.FEED;
    }
  }, [pathname]);

  //   useEffect(() => {
  //     navigate(LOGIN_VIEW_ROUTE);
  //   });

  return (
    <div className="Navigation">
      <div className="Navigation-left">
        <Text className="Navigation-logo">GrindyLocks</Text>
      </div>
      <div className="Navigation-right">
        <NavButton type={ENavType.FEED} activeView={activeView} />
        <NavButton type={ENavType.MESSAGES} activeView={activeView} />
        <NavButton type={ENavType.POST} activeView={activeView} />
        <NavButton type={ENavType.SEARCH} activeView={activeView} />
        <NavButton type={ENavType.ACTIVITY} activeView={activeView} />
        <NavButton type={ENavType.PROFILE} activeView={activeView} />
      </div>
    </div>
  );
};

export default Navigation;
