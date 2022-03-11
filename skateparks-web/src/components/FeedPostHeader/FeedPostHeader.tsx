import React from "react";
import cx from "classnames";
import "./FeedPostHeader.scss";
import ProfilePic from "../../styleComponents/ProfilePic";
import Link from "../../styleComponents/Link";

interface IProps {
  className?: string;
  location?: string;
  user: string;
}

export const FeedPostHeader: React.FC<IProps> = (props) => {
  const { className, location, user } = props;

  const mainClass = cx("FeedPostHeader", className);
  return (
    <div className={mainClass}>
      <div className="FeedPostHeader-left">
        <ProfilePic size="small" image="https://picsum.photos/500" />
        <div className="FeedPostHeader-handlelocation">
          <div className="FeedPostHeader-handle">
            <Link to="#">{user}</Link>
          </div>
          {location && (
            <div className="FeedPostHeader-location">{location}</div>
          )}
        </div>
      </div>
      <div className="FeedPostHeader-right">
        <div className="FeedPostHeader-elipses" />
        <div className="FeedPostHeader-elipses" />
        <div className="FeedPostHeader-elipses" />
      </div>
    </div>
  );
};

export default FeedPostHeader;
