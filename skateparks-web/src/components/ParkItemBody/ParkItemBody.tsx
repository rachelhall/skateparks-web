import React, { useState } from "react";
import ContentPiece from "../ContentPiece";
import Text from "../../styleComponents/Text";

import "./ParkItemBody.scss";
import Button from "src/styleComponents/Button";

interface IProps {
  description: string;
  src: string;
}

export const ParkItemBody: React.FC<IProps> = (props) => {
  const { description, src } = props;

  const parkItemContent = () => {
    return (
      <div className="ParkItemBody-contentContainer">
        <ContentPiece className="ParkItemBody-contentPiece" src={src} />
      </div>
    );
  };

  return (
    <div className="ParkItemBody">
      <div className="ParkItemBody-content">{parkItemContent()}</div>
      <Text fontSize="small" className="ParkItemBody-description">
        {description}
      </Text>
    </div>
  );
};

export default ParkItemBody;
