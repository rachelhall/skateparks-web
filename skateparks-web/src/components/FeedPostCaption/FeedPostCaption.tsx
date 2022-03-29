import React from "react";
import Text from "../../styleComponents/Text";
import Link from "../../styleComponents/Link";
import "./FeedPostCaption.scss";
import cx from "classnames";

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
        <Link className="FeedPostCaption-user" to="#">
          {user}
        </Link>
        {caption}
      </Text>
    </div>
  );
};

export default FeedPostCaption;
