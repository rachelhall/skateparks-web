import React from "react";
import Text from "../../styleComponents/Text";
import "./FeedPostCaption.scss";
import cx from "classnames";
import { Link } from "react-router-dom";

interface IProps {
  user: string;
  caption?: string;
}

export const FeedPostCaption: React.FC<IProps> = (props) => {
  const { caption, user } = props;

  const captionClass = cx(
    "FeedPostCaption-caption",
    caption && caption.length > 50 && "FeedPostCaption-long"
  );
  return (
    <div className="FeedPostCaption">
      <Text className={captionClass} display="inline" fontSize="xSmall">
        <Link className="FeedPostCaption-user plainLink" to="#">
          {user}
        </Link>
        {caption}
      </Text>
    </div>
  );
};

export default FeedPostCaption;
