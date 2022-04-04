import React from "react";
import FeedPostContent from "../FeedPostContent";
import ParkItemBody from "../ParkItemBody";
import ParkItemHeader from "../ParkItemHeader";

import "./ParkItem.scss";

interface IProps {
  description: string;
  parkName: string;
  rating: number;
  src?: string[];
}

export const ParkItem: React.FC<IProps> = (props) => {
  const { description, parkName, rating, src } = props;

  return (
    <div className="ParkItem">
      <ParkItemHeader parkName={parkName} rating={rating} />
      <ParkItemBody description={description} src={src} />
    </div>
  );
};

export default ParkItem;
