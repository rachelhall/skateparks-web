import React, { useCallback } from "react";

import "./NewParkGeneralInfoForm.scss";
import TextInput from "../../../styleComponents/TextInput/TextInput";
import Text from "../../../styleComponents/Text/Text";

interface IProps {
  generalInfo: any;
  setGeneralInfo: any;
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
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="Skatepark Name"
            placeholder=" "
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, name: value });
            }}
            value={generalInfo.name}
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="Description"
            placeholder=" "
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, description: value });
            }}
            value={generalInfo.description}
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="Street Number"
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, streetNumber: parseInt(value) });
            }}
            value={generalInfo.streetNumber}
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="Street Name"
            placeholder=" "
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, streetName: value });
            }}
            value={generalInfo.streetName}
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="City"
            placeholder=" "
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, city: value });
            }}
            value={generalInfo.city}
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="State"
            placeholder=" "
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, state: value });
            }}
            value={generalInfo.state}
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="Country"
            placeholder=" "
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, country: value });
            }}
            value={generalInfo.country}
          />
        </div>
      </form>
    </div>
  );
};

export default NewParkGeneralInfoForm;
