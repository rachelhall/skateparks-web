import React from "react";
import Text from "../../styleComponents/Text";
import Link from "../../styleComponents/Link";
import "./FeedPostCaption.scss";

interface IProps {
  user: string;
  caption?: string;
}

export const FeedPostCaption: React.FC<IProps> = (props) => {
  const { caption, user } = props;

  return (
    <div className="FeedPostCaption">
      <Text className="" display="inline" fontSize="xSmall">
        <Link className="FeedPostCaption-user" to="#">
          {user}
        </Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
        voluptatibus nulla aliquam dignissimos nisi facere exercitationem id
        alias quis temporibus?
      </Text>
    </div>
  );
};

export default FeedPostCaption;
