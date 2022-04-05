import React, { useState } from "react";
import Conversation from "src/components/Conversation";
import ConversationPreview from "src/components/ConversationPreview";
import { messages } from "../../DummyData";

import "./MessagesView.scss";

interface IProps {}

export const MessagesView: React.FC<IProps> = (props) => {
  const {} = props;
  const [conversationOpen, setConversationOpen] = useState<number | null>(null);
  const openConversation = (index: number) => {
    setConversationOpen(index);
    console.log("conversationOpen is " + conversationOpen);
  };
  const closeConversation = () => {
    setConversationOpen(null);
  };
  return (
    <div className="MessagesView">
      {messages.map((message, index) => {
        return (
          <div key={index}>
            <ConversationPreview
              onClick={() => {
                openConversation(index);
              }}
              key={index}
              withUser={message.user}
              lastMessage={message.lastMessage}
            />
            {conversationOpen === index && (
              <Conversation
                index={index}
                withUser={message.user}
                closeConversation={closeConversation}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MessagesView;
