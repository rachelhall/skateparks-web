import React from "react";
import cx from "classnames";
import "./FeedPostHeader.scss";
import ProfilePic from "../../styleComponents/ProfilePic";

interface IProps {
  className?: string;
  location?: string;
  title?: string;
}

export const FeedPostHeader: React.FC<IProps> = (props) => {
  const { className, location = "Nashville, TN", title } = props;

  const mainClass = cx("FeedPostHeader", className);
  return (
    <div className={mainClass}>
      <div className="FeedPostHeader-left">
        <ProfilePic size="small" image="https://picsum.photos/500" />
        <div className="FeedPostHeader-handlelocation">
          <div className="FeedPostHeader-handle">{title}</div>
          {location && (
            <div className="FeedPostHeader-location">{location}</div>
          )}
        </div>
      </div>
      <div className="FeedPostHeader-right">...</div>
    </div>
  );
};

export default FeedPostHeader;
