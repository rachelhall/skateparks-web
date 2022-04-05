import React from "react";
import cx from "classnames";
import "./NavButton.scss";
import Button from "../Button";
import HomeIcon from "../HomeIcon";
import MessagesIcon from "../MessagesIcon";
import PostIcon from "../PostIcon";
import SearchIcon from "../SearchIcon";
import ActivityIcon from "../ActivityIcon";
import ProfilePic from "../ProfilePic";
import {
  ACTIVITY_VIEW_ROUTE,
  FEED_VIEW_ROUTE,
  MESSAGES_VIEW_ROUTE,
  NEWPOST_VIEW_ROUTE,
  PROFILE_VIEW_ROUTE,
  SEARCH_VIEW_ROUTE,
} from "src/apps/SkateparksApp/skateparksAppRoutes";

export enum ENavType {
  FEED = "feed",
  MESSAGES = "messages",
  SEARCH = "search",
  ACTIVITY = "activity",
  PROFILE = "profile",
  POST = "post",
}
interface IProps {
  activeView: ENavType;
  type: ENavType;
  onClick?: () => void;
  postIsOpen?: boolean;
  closePost?: () => void;
  className?: string;
}

export const NavButton: React.FC<IProps> = (props) => {
  const { activeView, className, type, onClick, postIsOpen } = props;
  const buttonSize = 29;
  const getLinkTo = () => {
    switch (type) {
      case ENavType.FEED:
        return FEED_VIEW_ROUTE;
      case ENavType.MESSAGES:
        return MESSAGES_VIEW_ROUTE;
      case ENavType.POST:
        return undefined;
      case ENavType.SEARCH:
        return SEARCH_VIEW_ROUTE;
      case ENavType.ACTIVITY:
        return ACTIVITY_VIEW_ROUTE;
      case ENavType.PROFILE:
        return PROFILE_VIEW_ROUTE;
    }
  };
  const linkTo = getLinkTo();
  const renderNavIcon = () => {
    switch (type) {
      case ENavType.FEED:
        return (
          <HomeIcon
            buttonSize={buttonSize}
            isActive={activeView === ENavType.FEED}
          />
        );
      case ENavType.MESSAGES:
        return (
          <MessagesIcon
            buttonSize={buttonSize}
            isActive={activeView === ENavType.MESSAGES}
          />
        );
      case ENavType.POST:
        return (
          <PostIcon
            postIsOpen={postIsOpen}
            onClick={onClick}
            buttonSize={buttonSize}
            isActive={activeView === ENavType.POST}
          />
        );
      case ENavType.SEARCH:
        return (
          <SearchIcon
            buttonSize={buttonSize}
            isActive={activeView === ENavType.SEARCH}
          />
        );
      case ENavType.ACTIVITY:
        return (
          <ActivityIcon
            buttonSize={buttonSize}
            isActive={activeView === ENavType.ACTIVITY}
          />
        );
      case ENavType.PROFILE:
        return (
          <ProfilePic
            isActive={activeView === ENavType.PROFILE}
            size="nav"
            image="https://picsum.photos/500"
          />
        );
      default:
        return;
    }
  };
  const mainClass = cx("NavButton", className);
  return (
    <Button textButton={true} linkTo={linkTo} className={mainClass}>
      {renderNavIcon()}
    </Button>
  );
};

export default NavButton;
