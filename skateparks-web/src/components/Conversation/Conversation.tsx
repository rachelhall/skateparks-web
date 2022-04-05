import React from "react";
import BackIcon from "src/styleComponents/BackIcon";
import FriendMessage from "src/styleComponents/FriendMessage";
import UserMessage from "src/styleComponents/UserMessage";

import "./Conversation.scss";

interface IProps {
  closeConversation: any;
  index: number;
  withUser: string;
}

export const Conversation: React.FC<IProps> = (props) => {
  const { closeConversation, index, withUser } = props;

  return (
    <div className="Conversation">
      <div onClick={closeConversation} className="Conversation-top">
        <BackIcon onClick={closeConversation} />
      </div>
      <div className="Conversation-chat">
        <UserMessage children="Yo what's up" />
        <FriendMessage children="Nm wbu" />
        <UserMessage children="cool" />
        <FriendMessage children="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sint incidunt? Quos dolore, eveniet accusantium impedit eaque suscipit similique qui recusandae excepturi ea dicta enim aliquid neque dolor, libero voluptatum ullam dignissimos numquam? Tempore nemo quo earum eos minus ullam nisi, deleniti nihil ex provident quos, dicta voluptatem. In vel quibusdam porro, ducimus provident qui nisi tempora quaerat ad sapiente ab perferendis modi assumenda mollitia error consectetur praesentium voluptas perspiciatis recusandae aut excepturi commodi, dicta est? Voluptate, velit" />
        <UserMessage children="cool" />
        <FriendMessage children="cool" />
      </div>
    </div>
  );
};

export default Conversation;
