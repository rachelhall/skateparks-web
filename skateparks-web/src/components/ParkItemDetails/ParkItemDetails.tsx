import React from "react";
import Text from "../../styleComponents/Text";
import ListItem from "../../styleComponents/ListItem";

import "./ParkItemDetails.scss";

interface IProps {}

export const ParkItemDetails: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className="ParkItemDetails">
      <Text fontWeight="bold" className="ParkItemDetails-heading">
        Specifications
      </Text>
      <div className="ParkItemDetails-specsContainer">
        <div className="ParkItemDetails-column">
          <Text>Ramps</Text>
          <ListItem>Ramp 1</ListItem>
          <ListItem>Ramp 2</ListItem>
        </div>
        <div className="ParkItemDetails-column">
          <Text>Rails</Text>
          <ListItem>Rail 1</ListItem>
          <ListItem>Rail 2</ListItem>
        </div>
      </div>
    </div>
  );
};

export default ParkItemDetails;
