import React from "react";

import "./NewParkGeneralInfoForm.scss";
import TextInput from "../../../styleComponents/TextInput/TextInput";
import Text from "../../../styleComponents/Text/Text";

interface IProps {
  generalInfo: IGeneralProps;
  setGeneralInfo: (newValue: IGeneralProps) => void;
}
interface IGeneralProps {
  name: string;
  address: string;
  city: string;
  state: string;
}

export const NewParkGeneralInfoForm: React.FC<IProps> = (props) => {
  const { generalInfo, setGeneralInfo } = props;

  return (
    <div className="NewParkGeneralInfoForm">
      <Text className="NewParkGeneralInfoForm-heading" fontSize="medium">
        First, we'll need some general information
      </Text>
      <form className="NewParkGeneralInfoForm-form">
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, name: value });
            }}
            value={generalInfo.name}
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="Skatepark Name"
            placeholder=" "
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, address: value });
            }}
            value={generalInfo.address}
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="Street Address"
            placeholder=" "
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, city: value });
            }}
            value={generalInfo.city}
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="City"
            placeholder=" "
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, state: value });
            }}
            value={generalInfo.state}
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
