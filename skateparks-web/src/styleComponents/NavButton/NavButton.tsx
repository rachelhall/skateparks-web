import React from "react";

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
}

export const NavButton: React.FC<IProps> = (props) => {
  const { activeView, type } = props;
  const getLinkTo = () => {
    switch (type) {
      case ENavType.FEED:
        return FEED_VIEW_ROUTE;
      case ENavType.MESSAGES:
        return MESSAGES_VIEW_ROUTE;
      case ENavType.POST:
        return NEWPOST_VIEW_ROUTE;
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
        return <HomeIcon isActive={activeView === ENavType.FEED} />;
      case ENavType.MESSAGES:
        return <MessagesIcon isActive={activeView === ENavType.MESSAGES} />;
      case ENavType.POST:
        return <PostIcon isActive={activeView === ENavType.POST} />;
      case ENavType.SEARCH:
        return <SearchIcon isActive={activeView === ENavType.SEARCH} />;
      case ENavType.ACTIVITY:
        return <ActivityIcon isActive={activeView === ENavType.ACTIVITY} />;
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
  return (
    <Button textButton={true} linkTo={linkTo} className="NavButton">
      {renderNavIcon()}
    </Button>
  );
};

export default NavButton;
