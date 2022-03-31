import React from "react";

import "./NewParkRampsForm.scss";
import SelectorInput from "../../../styleComponents/SelectorInput/SelectorInput";
import Text from "../../../styleComponents/Text/Text";
import { ramps } from "../../../DummyData";
<<<<<<< HEAD

interface IProps {}

export const NewParkRampsForm: React.FC<IProps> = (props) => {
  const {} = props;
  const rampSelectors = ramps.map((ramp) => {
    return <SelectorInput image={ramp.image}>{ramp.type}</SelectorInput>;
=======
import { IRampProps } from "../../../views/CreateNewParkView/CreateNewParkView";

interface IProps {
  rampInfo: IRampProps[] | undefined;
  setRampInfo: (newValue: IRampProps[]) => void;
}

export const NewParkRampsForm: React.FC<IProps> = (props) => {
  const { rampInfo, setRampInfo } = props;

  const rampSelectors = ramps.map((ramp, index) => {
    return (
      <SelectorInput name={ramp.type} key={index} image={ramp.image}>
        {ramp.type}
      </SelectorInput>
    );
>>>>>>> 11ce64e (Squashing will's commit)
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
