import { userInfo } from "os";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";

import "./AddComment.scss";

interface IProps {
  comments?: any;
  user: string;
}

export const AddComment: React.FC<IProps> = (props) => {
  const { comments, user } = props;
  const [isDisabled, setIsDisabled] = useState(true);
  const [commentText, setCommentText] = useState("");

  return (
    <div className="AddComment">
      <TextInput
        className="AddComment-input"
        placeholder="Add a comment"
        value={commentText}
        onChange={(value) => {
          setCommentText(value);
        }}
      />
      <Button
        // disabled={isDisabled}
        className="AddComment-post"
        buttonSize="xSmall"
        color="transparent"
        onClick={comments?.push({ user: user, comment: commentText })}
      >
        Post
      </Button>
    </div>
  );
};

export default AddComment;
