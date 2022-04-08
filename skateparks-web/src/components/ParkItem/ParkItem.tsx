import React, { useState } from "react";
<<<<<<< HEAD

import ParkItemBody from "../ParkItemBody";
import ParkItemHeader from "../ParkItemHeader";
import { IPark } from "../../generated/graphql";

import "./ParkItem.scss";
import { FALLBACK } from "../../static/assets/images";
=======
import FeedPostContent from "../FeedPostContent";
import ParkItemBody from "../ParkItemBody";
import ParkItemHeader from "../ParkItemHeader";
import cx from "classnames";

import "./ParkItem.scss";
>>>>>>> 70443bdb84536e5970b691ec02f1461981486e96
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
