import React from "react";
import Like from "../../styleComponents/Like";
import CommentIcon from "../../styleComponents/CommentIcon";
import Share from "../../styleComponents/Share";
import Save from "../../styleComponents/Save";

import "./FeedPostInteractions.scss";

interface IProps {
  prevIsLiked?: boolean;
  prevIsSaved?: boolean;
  onClickLike: () => void;
  onClickSave: () => void;
  onClickComment: () => void;
}

export const FeedPostInteractions: React.FC<IProps> = (props) => {
  const { prevIsLiked, prevIsSaved, onClickLike, onClickSave, onClickComment } =
    props;

  return (
    <div className="FeedPostInteractions">
      <div className="FeedPostInteractions-left">
        <Like prevIsLiked={prevIsLiked} onClick={onClickLike} />
        <CommentIcon onClick={onClickComment} />
        <Share />
      </div>
      <div className="FeedPostInteractions-right">
        <Save onClick={onClickSave} prevIsSaved={prevIsSaved} />
      </div>
    </div>
  );
};

export default FeedPostInteractions;
