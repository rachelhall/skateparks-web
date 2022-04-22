import React from "react";
import Text from "src/styleComponents/Text";

import "./ParkItemHeader.scss";

interface IProps {
  parkName: string;
  rating?: number;
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

      {/* <Text fontSize="small" className="ParkItemHeader-rating">
        {rating.toString()}
      </Text> */}
    </div>
  );
};

export default ParkItemHeader;
