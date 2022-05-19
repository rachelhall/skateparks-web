import React, { useCallback, useState } from "react";

import "./CreateNewParkView.scss";
import Heading from "../../styleComponents/Heading/Heading";
import Footer from "../../styleComponents/Footer/Footer";
import Button from "../../styleComponents/Button/Button";
import NewParkGeneralInfoForm from "../../components/NewParkForms/NewParkGeneralInfoForm";
import NewParkRampsForm from "../../components/NewParkForms/NewParkRampsForm/NewParkRampsForm";
import NewParkRailsForm from "../../components/NewParkForms/NewParkRailsForm/NewParkRailsForm";
import { EElement, ERails, useCreateParkMutation } from "src/generated/graphql";

// import Text from "../../styleComponents/Text/Text";

interface IProps {}

export const CreateNewParkView: React.FC<IProps> = (props) => {
  const {} = props;

  // State for form values

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    description: "",
    streetNumber: "",
    streetName: "",
    city: "",
    state: "",
    country: "",
    imageUrl: "",
  });

  const [rampInfo, setRampInfo] = useState<EElement[]>([]);
  const [railInfo, setRailInfo] = useState<ERails[]>([]);

  const [createPark] = useCreateParkMutation({
    variables: {
      title: generalInfo.name,
      description: generalInfo.description,
      streetNumber: generalInfo.streetNumber,
      streetName: generalInfo.streetName,
      city: generalInfo.city,
      state: generalInfo.state,
      country: generalInfo.country,
      imageUrl: generalInfo.imageUrl,
      elements: [...rampInfo, ...(railInfo as unknown as EElement[])],
    },
  });

  const handleSubmitPark = useCallback(async () => {
    const result = await createPark();
    // variables: {
    //   title: generalInfo.name,
    //   description: generalInfo.description,
    //   streetNumber: generalInfo.streetNumber,
    //   streetName: generalInfo.streetName,
    //   city: generalInfo.city,
    //   state: generalInfo.state,
    //   country: generalInfo.country,
    //   elements: [...rampInfo, ...(railInfo as unknown as EElement[])],
    // },
    console.log({ result });
  }, [createPark]);

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
