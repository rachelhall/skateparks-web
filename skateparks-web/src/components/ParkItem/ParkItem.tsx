import React, { useState } from "react";
import FeedPostContent from "../FeedPostContent";
import ParkItemBody from "../ParkItemBody";
import ParkItemHeader from "../ParkItemHeader";
import cx from "classnames";

import "./ParkItem.scss";
import Button from "src/styleComponents/Button";

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
      <div className="ParkItem-feedview">
        <ParkItemHeader parkName={parkName} rating={rating} />
        <ParkItemBody description={description} src={src} />
      </div>
    </div>
  );
};

export default ParkItem;
