import React from "react";
import Text from "src/styleComponents/Text";
import { Star } from "react-ionicons";

import "./ParkItemHeader.scss";

interface IProps {
  parkName: string;
  rating: number;
}

export const ParkItemHeader: React.FC<IProps> = (props) => {
  const { parkName, rating } = props;

  return (
    <div className="ParkItemHeader">
      <Text
        className="ParkItemHeader-parkName"
        fontSize="medium"
        fontWeight="bold"
      >
        {parkName}
      </Text>
      <Star color={"gold"} height="30px" width="30px" />
      {/* <Text fontSize="small" className="ParkItemHeader-rating">
        {rating.toString()}
      </Text> */}
    </div>
  );
};

export default ParkItemHeader;
