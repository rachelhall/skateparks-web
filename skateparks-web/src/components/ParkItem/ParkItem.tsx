import React from "react";

import ParkItemBody from "../ParkItemBody";
import ParkItemHeader from "../ParkItemHeader";
import { IPark } from "../../generated/graphql";

import "./ParkItem.scss";

interface IProps {
  park: IPark;
}

export const ParkItem: React.FC<IProps> = (props) => {
  const { park } = props;
  console.log({ park });

  return (
    <div className="ParkItem">
      <ParkItemHeader parkName={park.title} />
      <ParkItemBody description={park.description} src={park.imageUrl} />
    </div>
  );
};

export default ParkItem;
