import React from "react";

import "./NewParkRailsForm.scss";
import SelectorInput from "../../../styleComponents/SelectorInput/SelectorInput";
import Text from "../../../styleComponents/Text/Text";
import { rails } from "../../../DummyData";
import { IRailProps } from "../../../views/CreateNewParkView/CreateNewParkView";
interface IProps {
  railInfo: IRailProps[] | undefined;
  setRailInfo: (newValue: IRailProps[]) => void;
}

export const NewParkRailsForm: React.FC<IProps> = (props) => {
  const { railInfo = [], setRailInfo } = props;
  const handleClick = (railType: IRailProps) => {
    if (railInfo.includes(railType)) {
      const filteredRailInfo = railInfo.filter((rail) => {
        return rail !== railType;
      });
      setRailInfo(filteredRailInfo);
    } else {
      setRailInfo([...railInfo, railType]);
    }
  };
  // Take current rail info
  // Check if current rail type exists, if not push to array, if so remove it
  const railSelectors = rails.map((rail) => {
    return <SelectorInput image={rail.image}>{rail.type}</SelectorInput>;
  });

  return (
    <div className="NewParkRailsForm">
      <Text className="NewParkGeneralInfoForm-heading" fontSize="medium">
        What kind of rails do they have?
      </Text>
      <form className="NewParkRailsForm-form">{railSelectors}</form>
    </div>
  );
};

export default NewParkRailsForm;
