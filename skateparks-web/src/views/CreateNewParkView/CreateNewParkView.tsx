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

export interface IRampProps {
  miniRamp: boolean;
  quarterPipe: boolean;
  halfPipe: boolean;
  bowl: boolean;
}

export interface IRailProps {
  roundRail: boolean;
  squareRail: boolean;
  downRail: boolean;
  rainbowRail: boolean;
}

export const CreateNewParkView: React.FC<IProps> = (props) => {
  const {} = props;

  // State for form values

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
  });

  const [rampInfo, setRampInfo] = useState<IRampProps[]>();
  const [railInfo, setRailInfo] = useState<IRailProps[]>();

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
