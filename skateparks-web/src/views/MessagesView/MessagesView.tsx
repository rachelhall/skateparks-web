import React from "react";
import ConversationPreview from "src/components/ConversationPreview";
import { messages } from "../../DummyData";

import "./MessagesView.scss";

interface IProps {}

export const MessagesView: React.FC<IProps> = (props) => {
  const {} = props;
  return (
    <div className="MessagesView">
      {messages.map((message, index) => {
        return (
          <ConversationPreview
            key={index}
            withUser={message.user}
            lastMessage={message.lastMessage}
          />
        );
      })}
    </div>
  );
};

export default MessagesView;
