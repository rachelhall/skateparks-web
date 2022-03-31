import React from "react";

import "./NewParkRampsForm.scss";
import SelectorInput from "../../../styleComponents/SelectorInput/SelectorInput";
import Text from "../../../styleComponents/Text/Text";
import { ramps } from "../../../DummyData";

interface IProps {}

export const NewParkRampsForm: React.FC<IProps> = (props) => {
  const {} = props;
  const rampSelectors = ramps.map((ramp) => {
    return <SelectorInput image={ramp.image}>{ramp.type}</SelectorInput>;
  });

  return (
    <div className="NewParkRampsForm">
      <Text className="NewParkGeneralInfoForm-heading" fontSize="medium">
        What kind of ramps do they have?
      </Text>
      <form className="NewParkRampsForm-form">{rampSelectors}</form>
    </div>
  );
};

export default NewParkRampsForm;
