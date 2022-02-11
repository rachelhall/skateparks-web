import React from "react";
import { HeartOutline, Heart } from "react-ionicons";

interface IProps {
  prevIsLiked: boolean;
  setPrevIsLiked: (value: boolean) => void;
}
export const Like: React.FC<IProps> = ({ prevIsLiked, setPrevIsLiked }) => {
  const toggleLike = () => {
    setPrevIsLiked(!prevIsLiked);
  };
  if (prevIsLiked) {
    return (
      <Heart onClick={toggleLike} color={"red"} height="29px" width="29px" />
    );
  } else
    return (
      <HeartOutline
        onClick={toggleLike}
        color={"#00000"}
        height="29px"
        width="29px"
      />
    );
};
