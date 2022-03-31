<<<<<<< HEAD
import React, { useCallback } from "react";
=======
import React from "react";
>>>>>>> 11ce64e (Squashing will's commit)

import "./NewParkGeneralInfoForm.scss";
import TextInput from "../../../styleComponents/TextInput/TextInput";
import Text from "../../../styleComponents/Text/Text";

<<<<<<< HEAD
import { useEffect } from "react";
import { useCreateParkMutation } from "../../../generated/graphql";

interface IProps {}

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
=======
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
>>>>>>> 11ce64e (Squashing will's commit)

  return (
    <div className="NewParkGeneralInfoForm">
      <Text className="NewParkGeneralInfoForm-heading" fontSize="medium">
        First, we'll need some general information
      </Text>
      <form className="NewParkGeneralInfoForm-form">
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
<<<<<<< HEAD
=======
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, name: value });
            }}
            value={generalInfo.name}
>>>>>>> 11ce64e (Squashing will's commit)
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="Skatepark Name"
            placeholder=" "
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
<<<<<<< HEAD
=======
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, address: value });
            }}
            value={generalInfo.address}
>>>>>>> 11ce64e (Squashing will's commit)
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="Street Address"
            placeholder=" "
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
<<<<<<< HEAD
=======
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, city: value });
            }}
            value={generalInfo.city}
>>>>>>> 11ce64e (Squashing will's commit)
            inputWrapperClass="NewParkGeneralInfoForm-TextInput"
            labelContent="City"
            placeholder=" "
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
<<<<<<< HEAD
=======
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, state: value });
            }}
            value={generalInfo.state}
>>>>>>> 11ce64e (Squashing will's commit)
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
