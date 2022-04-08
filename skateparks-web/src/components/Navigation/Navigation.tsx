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
  setPostIsOpen?: any;
}

export const Navigation: React.FC<IProps> = (props) => {
  const { pathname, setPostIsOpen } = props;
  const activeView = useMemo(() => {
    if (pathname.includes("feed")) {
      return ENavType.FEED;
    } else if (pathname.includes("messages")) {
      return ENavType.MESSAGES;
    }
    // else if (pathname.includes("newpost")) {
    //   return ENavType.POST;
    // }
    else if (pathname.includes("search")) {
      return ENavType.SEARCH;
    } else if (pathname.includes("activity")) {
      return ENavType.ACTIVITY;
    } else if (pathname.includes("username")) {
      return ENavType.PROFILE;
    } else if (pathname.includes("park")) {
      return ENavType.SEARCH;
    } else {
      return ENavType.FEED;
    }
  }, [pathname]);

  const handlePostClick = () => {
    setPostIsOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="Navigation">
      <div className="Navigation-left">
        <Text className="Navigation-logo">GrindyLocks</Text>
      </div>
      <div className="Navigation-right">
        <NavButton
          className="Navigation-button"
          type={ENavType.FEED}
          activeView={activeView}
        />
        <NavButton
          className="Navigation-button"
          type={ENavType.MESSAGES}
          activeView={activeView}
        />
        <NavButton
          className="Navigation-button"
          onClick={handlePostClick}
          type={ENavType.POST}
          activeView={activeView}
        />
        <NavButton
          className="Navigation-button"
          type={ENavType.SEARCH}
          activeView={activeView}
        />
        <NavButton
          className="Navigation-button"
          type={ENavType.ACTIVITY}
          activeView={activeView}
        />
        <NavButton
          className="Navigation-button"
          type={ENavType.PROFILE}
          activeView={activeView}
        />
      </div>
    </div>
  );
};

export default Navigation;
