import React from "react";
import ProfilePic from "src/styleComponents/ProfilePic";
import Text from "../../styleComponents/Text";

import "./ConversationPreview.scss";

interface IProps {
  withUser: string;
  lastMessage: string;
}

export const ConversationPreview: React.FC<IProps> = (props) => {
  const { lastMessage, withUser } = props;

  return (
    <div className="ConversationPreview">
      <ProfilePic image="https://picsum.photos/500" size="medium" />
      <div className="ConversationPreview-preview">
        <Text className="ConversationPreview-text" fontSize="small">
          {withUser}
        </Text>
        <Text
          className="ConversationPreview-text ConversationPreview-lastMessage"
          fontSize="small"
        >
          {lastMessage}
        </Text>
      </div>
    </div>
  );
};

export default ConversationPreview;
