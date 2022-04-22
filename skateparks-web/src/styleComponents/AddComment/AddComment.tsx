import { userInfo } from "os";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";

import "./AddComment.scss";

interface IProps {
  comments: any;
}

export const AddComment: React.FC<IProps> = (props) => {
  const { comments } = props;
  const [isDisabled, setIsDisabled] = useState(true);
  const [commentText, setCommentText] = useState("");

  const handlePost = () => {
    comments?.push({ user: "yourmom", comment: commentText });
    setCommentText("");
  };

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
        onClick={handlePost}
      >
        Post
      </Button>
    </div>
  );
};

export default AddComment;
