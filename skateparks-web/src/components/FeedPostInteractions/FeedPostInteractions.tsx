import React from "react";
import Like from "../../styleComponents/Like";
import CommentIcon from "../../styleComponents/CommentIcon";
import Share from "../../styleComponents/Share";
import Save from "../../styleComponents/Save";

import "./FeedPostInteractions.scss";

interface IProps {
  prevIsLiked?: boolean;
  setPrevIsLiked: (value: boolean) => void;
  prevIsSaved?: boolean;
  setPrevIsSaved: (value: boolean) => void;
}

export const FeedPostInteractions: React.FC<IProps> = (props) => {
  const { prevIsLiked, setPrevIsLiked, prevIsSaved, setPrevIsSaved } = props;

  return (
    <div className="FeedPostInteractions">
      <div className="FeedPostInteractions-left">
        <Like prevIsLiked={prevIsLiked} setPrevIsLiked={setPrevIsLiked} />
        <CommentIcon />
        <Share />
      </div>
      <div className="FeedPostInteractions-right">
        <Save prevIsSaved={prevIsSaved} setPrevIsSaved={setPrevIsSaved} />
      </div>
    </div>
  );
};

export default FeedPostInteractions;
