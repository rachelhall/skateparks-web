import React, { useState } from "react";
import ContentPiece from "../ContentPiece";
import Text from "../../styleComponents/Text";

import "./ParkItemBody.scss";
import Button from "src/styleComponents/Button";
import ParkItemDetails from "../ParkItemDetails";

interface IProps {
  description: string;
  src?: string[];
  onClick?: any;
}

export const ParkItemBody: React.FC<IProps> = (props) => {
  const { description, src, onClick } = props;
  const [detailsOpen, setDetailsOpen] = useState(false);
  const handleClick = () => {
    // setDetailsOpen(!detailsOpen);
    onClick();
  };
  const parkItemContent = src?.map((photo, index) => {
    return (
      <div key={index} className="ParkItemBody-contentContainer">
        <ContentPiece
          className="ParkItemBody-contentPiece"
          src={photo}
          key={index}
        />
      </div>
    );
  });
  return (
    <div className="ParkItemBody">
      <div className="ParkItemBody-container">
        <div className="ParkItemBody-content">{parkItemContent}</div>
        <Text fontSize="small" className="ParkItemBody-description">
          {description}
        </Text>
      </div>
      {detailsOpen && <ParkItemDetails />}
      <Button
        onClick={handleClick}
        className="ParkItemBody-seeMore"
        buttonSize="xSmall"
      >
        {detailsOpen ? "Close" : "See More"}
      </Button>
    </div>
  );
};

export default ParkItemBody;
