import React, { useCallback } from "react";

import "./NewParkGeneralInfoForm.scss";
import TextInput from "../../../styleComponents/TextInput/TextInput";
import Text from "../../../styleComponents/Text/Text";

import { useEffect } from "react";
import { useCreateParkMutation } from "../../../generated/graphql";

interface IProps {
  generalInfo: any;
  setGeneralInfo: any;
}

export const NewParkGeneralInfoForm: React.FC<IProps> = (props) => {
  const {} = props;

  const [createPark] = useCreateParkMutation({});

  const handleSubmitPark = useCallback(
    async (
      title,
      description,
      streetNumber,
      streetName,
      city,
      state,
      country,
      elements
    ) => {
      const result = await createPark({
        variables: {
          title,
          description,
          streetNumber,
          streetName,
          city,
          state,
          country,
          elements,
        },
      });
      console.log({ result });
    },
    [createPark]
  );

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
