import React from "react";
import Text from "../../styleComponents/Text";
import "./CommentsView.scss";
import BackIcon from "../../styleComponents/BackIcon";
import Comment from "../../styleComponents/Comment";
import AddComment from "src/styleComponents/AddComment";

interface IComments {
  user: string;
  comment: string;
}
interface IProps {
  comments: IComments[];
  setCommentsOpen: (newValue: number | null) => void;
}

export const CommentsView: React.FC<IProps> = (props) => {
  const { setCommentsOpen, comments } = props;

  const closeComments = () => {
    setCommentsOpen(null);
    document.body.style.overflow = "unset";
  };
  return (
    <div className="CommentsView">
      <div className="CommentsView-header">
        <BackIcon
          className="CommentsView-back"
          onClick={() => closeComments()}
        />
        <Text fontWeight="bold" fontSize="small">
          Comments
        </Text>
      </div>
      <div className="CommentsView-comments">
        {comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              className="CommentsView-comment"
              user={comment.user}
              comment={comment.comment}
            />
          );
        })}
        <AddComment comments={comments} />
      </div>
    </div>
  );
};

export default CommentsView;
