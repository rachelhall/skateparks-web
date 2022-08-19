import React, { useCallback, useEffect, useRef, useState } from "react";

import "./NewParkGeneralInfoForm.scss";
import TextInput from "../../../styleComponents/TextInput/TextInput";
import Text from "../../../styleComponents/Text/Text";

interface IProps {
  generalInfo: any;
  setGeneralInfo: any;
}

export const NewParkGeneralInfoForm: React.FC<IProps> = (props) => {
  const { generalInfo, setGeneralInfo } = props;

  const fileUploadRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string>();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files !== null && e.target.files.length > 0) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
      setGeneralInfo({
        ...generalInfo,
        imageUrl: e.target.files,
      });
    }
  };
  //MAKE A DEDICATED FILE UPLOAD STYLE COMPONENT

  useEffect(() => console.log(generalInfo.imageUrl[0]), [generalInfo]);

  return (
    <div className="NewParkGeneralInfoForm">
      <Text className="NewParkGeneralInfoForm-heading" fontSize="medium">
        First, we'll need some general information
      </Text>
      <form className="NewParkGeneralInfoForm-form">
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            className="NewParkGeneralInfoForm-TextInput"
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
            className="NewParkGeneralInfoForm-TextInput"
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
            className="NewParkGeneralInfoForm-TextInput"
            labelContent="Street Number"
            placeholder=" "
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, streetNumber: value });
            }}
            value={generalInfo.streetNumber}
          />
        </div>
        <div className="NewParkGeneralInfoForm-inputContainer">
          <TextInput
            className="NewParkGeneralInfoForm-TextInput"
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
            className="NewParkGeneralInfoForm-TextInput"
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
            className="NewParkGeneralInfoForm-TextInput"
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
            className="NewParkGeneralInfoForm-TextInput"
            labelContent="Country"
            placeholder=" "
            onChange={(value) => {
              setGeneralInfo({ ...generalInfo, country: value });
            }}
            value={generalInfo.country}
          />
          <input
            className="NewParkGeneralInfoForm-fileInput"
            type="file"
            id="FileInput"
            ref={fileUploadRef}
            name="newImage"
            onChange={handleImageUpload}
            accept="image/png, image/jpeg"
          />
          {generalInfo.imageUrl && (
            <img src={imagePreview} alt="skatepark" height={100} width={100} />
          )}
        </div>
      </form>
    </div>
  );
};

export default NewParkGeneralInfoForm;
