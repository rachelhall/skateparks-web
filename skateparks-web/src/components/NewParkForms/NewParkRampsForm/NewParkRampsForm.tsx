import React from "react";

import "./NewParkRampsForm.scss";
import SelectorInput from "../../../styleComponents/SelectorInput/SelectorInput";
import Text from "../../../styleComponents/Text/Text";

import { elements } from "../../../localModels/elements";
import ElementSelector from "src/components/ElementSelector";
import { EElement } from "src/types/enums";

interface IProps {
  rampInfo: EElement[];
  setRampInfo: (newValue: EElement[]) => void;
}

export const NewParkRampsForm: React.FC<IProps> = (props) => {
  const { rampInfo = [], setRampInfo } = props;

  const rampSelectors = elements.map((element: EElement, index) => {
    const handleClick = () => {
      if (rampInfo.includes(element)) {
        const filteredRampInfo = rampInfo.filter((ramp) => {
          return ramp !== element;
        });
        setRampInfo(filteredRampInfo);
      } else {
        setRampInfo([...rampInfo, element]);
      }
    };
    return (
      <ElementSelector onClick={handleClick} element={element} key={index} />
    );
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
