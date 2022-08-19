import React, { useCallback, useState } from "react";

import "./CreateNewParkView.scss";
import Heading from "../../styleComponents/Heading/Heading";
import Footer from "../../styleComponents/Footer/Footer";
import Button from "../../styleComponents/Button/Button";
import NewParkGeneralInfoForm from "../../components/NewParkForms/NewParkGeneralInfoForm";
import NewParkRampsForm from "../../components/NewParkForms/NewParkRampsForm/NewParkRampsForm";
import NewParkRailsForm from "../../components/NewParkForms/NewParkRailsForm/NewParkRailsForm";
import { EElement, ERails } from "src/types/enums";
import { createPark } from "src/api/createPark";

// import Text from "../../styleComponents/Text/Text";

interface IProps {}

export const CreateNewParkView: React.FC<IProps> = (props) => {
  const {} = props;

  // State for form values

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    description: "",
    streetNumber: 0,
    streetName: "",
    city: "",
    state: "",
    postalCode: 0,
    country: "",
    imageUrl: "",
  });

  const [rampInfo, setRampInfo] = useState<EElement[]>([]);
  const [railInfo, setRailInfo] = useState<ERails[]>([]);

  const handleSubmitPark = useCallback(async () => {
    createPark({
      name: generalInfo.name,
      street_number: generalInfo.streetNumber,
      street_name: generalInfo.streetName,
      city: generalInfo.city,
      state: generalInfo.state,
      postal_code: generalInfo.postalCode,
      country: generalInfo.country,
      description: generalInfo.description,
      image: generalInfo.imageUrl,
    });
  }, [
    generalInfo.city,
    generalInfo.country,
    generalInfo.description,
    generalInfo.imageUrl,
    generalInfo.name,
    generalInfo.postalCode,
    generalInfo.state,
    generalInfo.streetName,
    generalInfo.streetNumber,
  ]);

  // Array for form JSX components

  const formPages = [
    <NewParkGeneralInfoForm
      generalInfo={generalInfo}
      setGeneralInfo={setGeneralInfo}
    />,
    <NewParkRampsForm rampInfo={rampInfo} setRampInfo={setRampInfo} />,
    <NewParkRailsForm railInfo={railInfo} setRailInfo={setRailInfo} />,
  ];

  const [formPage, setFormPage] = useState(0);
  const handleClickBack = () => {
    formPage > 0 && setFormPage(formPage - 1);
  };

  const handleClickForward = () => {
    formPage < formPages.length - 1 && setFormPage(formPage + 1);
  };
  return (
    <div className="CreateNewParkView">
      <div className="CreateNewParkView-header">
        <Heading
          className="CreateNewParkView-heading"
          center={true}
          fontSize="medium"
        >
          Create New Park
        </Heading>
      </div>
      <div className="CreateNewParkView-formContainer">
        {formPages[formPage]}
      </div>

      <Footer className="CreateNewParkView-footer">
        <Button
          buttonSize="xSmall"
          borderRadius={2}
          color="transparent"
          onClick={handleClickBack}
        >
          Back
        </Button>
        {formPage === formPages.length - 1 ? (
          <Button
            buttonSize="xSmall"
            borderRadius={2}
            onClick={handleSubmitPark}
          >
            Save
          </Button>
        ) : (
          <Button
            buttonSize="xSmall"
            borderRadius={2}
            color="black"
            onClick={handleClickForward}
          >
            Next
          </Button>
        )}
      </Footer>
    </div>
  );
};

export default CreateNewParkView;
