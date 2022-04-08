import React, { useState } from "react";

import ParkItemBody from "../ParkItemBody";
import ParkItemHeader from "../ParkItemHeader";
import { IPark } from "../../generated/graphql";

import "./ParkItem.scss";
import { FALLBACK } from "../../static/assets/images";
import Button from "src/styleComponents/Button";

interface IProps {
  park: IPark;
}

export const ParkItem: React.FC<IProps> = (props) => {
  const { park } = props;
  console.log({ park });
  const [parkOpen, setParkOpen] = useState(false);
  const handleClick = () => {
    setParkOpen(true);
  };

  return (
    <div className="ParkItem">
      <div className="ParkItem-basic">
        <ParkItemHeader parkName={park.title} />

        <ParkItemBody
          description={park.description}
          src={park.imageUrl ?? FALLBACK}
        />
        <Button
          onClick={handleClick}
          className="ParkItem-openPark"
          buttonSize="xSmall"
        >
          Open
        </Button>
      </div>
    </div>
  );
};

export default ParkItem;
