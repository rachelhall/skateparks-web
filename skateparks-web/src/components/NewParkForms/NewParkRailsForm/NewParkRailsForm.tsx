import React from "react";

import "./NewParkRailsForm.scss";
import SelectorInput from "../../../styleComponents/SelectorInput/SelectorInput";
import Text from "../../../styleComponents/Text/Text";
import { rails } from "../../../DummyData";

interface IProps {}

export const NewParkRailsForm: React.FC<IProps> = (props) => {
  const {} = props;

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
