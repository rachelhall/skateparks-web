import React, { useState } from "react";

import "./CreateNewParkView.scss";
import Heading from "../../styleComponents/Heading/Heading";
import Footer from "../../styleComponents/Footer/Footer";
import Button from "../../styleComponents/Button/Button";
import NewParkGeneralInfoForm from "../../components/NewParkForms/NewParkGeneralInfoForm";
import NewParkRampsForm from "../../components/NewParkForms/NewParkRampsForm/NewParkRampsForm";
import NewParkRailsForm from "../../components/NewParkForms/NewParkRailsForm/NewParkRailsForm";

// import Text from "../../styleComponents/Text/Text";

interface IProps {}

export const CreateNewParkView: React.FC<IProps> = (props) => {
  const {} = props;
  const formPages = [
    <NewParkGeneralInfoForm />,
    <NewParkRampsForm />,
    <NewParkRailsForm />,
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
        <Button
          buttonSize="xSmall"
          borderRadius={2}
          color="black"
          onClick={handleClickForward}
        >
          Next
        </Button>
      </Footer>
    </div>
  );
};

export default CreateNewParkView;
