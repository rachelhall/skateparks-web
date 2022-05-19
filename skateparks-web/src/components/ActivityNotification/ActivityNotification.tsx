import React from "react";

import "./ActivityNotification.scss";
import Text from "../../styleComponents/Text";
import { Link } from "react-router-dom";
import ProfilePic from "src/styleComponents/ProfilePic";
import CloseIcon from "src/styleComponents/CloseIcon";

interface IProps {
  closeNotification: () => void;
  type: "like" | "follow";
  user: string;
}

export const ActivityNotification: React.FC<IProps> = (props) => {
  const { closeNotification, type, user } = props;

  return (
    <div className="ActivityNotification">
      <div className="ActivityNotification-left">
        <ProfilePic size="small" image="https://picsum.photos/500" />
        <Text className="ActivityNotification-text" fontSize="xSmall">
          <Link className="ActivityNotification-user plainLink" to="#">
            {user}
          </Link>
          {type === "follow" ? `started following you.` : `liked your post.`}
        </Text>
      </div>
      <div className="ActivityNotification-right">
        <CloseIcon
          onClick={closeNotification}
          height="20px"
          width="20px"
          className="ActivityNotification-close"
        />
      </div>
    </div>
  );
};

export default ActivityNotification;
