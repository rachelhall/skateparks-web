import React from "react";

import "./NewParkGeneralInfoForm.scss";
import TextInput from "../../../styleComponents/TextInput/TextInput";
import Text from "../../../styleComponents/Text/Text";

interface IProps {}

export const NewParkGeneralInfoForm: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className="NewParkGeneralInfoForm">
      <Text className="NewParkGeneralInfoForm-heading" fontSize="medium">
        First, we'll need some general information
      </Text>
      <form className="NewParkGeneralInfoForm-form">
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="Skatepark Name"
            placeholder=" "
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="Street Address"
            placeholder=" "
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="City"
            placeholder=" "
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="State"
            placeholder=" "
          />
        </div>
      </form>
    </div>
  );
};

export default NewParkGeneralInfoForm;
