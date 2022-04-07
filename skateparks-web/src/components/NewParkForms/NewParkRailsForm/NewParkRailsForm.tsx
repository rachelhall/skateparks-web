import React from "react";

import "./NewParkRailsForm.scss";
import SelectorInput from "../../../styleComponents/SelectorInput/SelectorInput";
import Text from "../../../styleComponents/Text/Text";
import ElementSelector from "src/components/ElementSelector";
import { ERails } from "src/generated/graphql";
import { elements, rails } from "src/localModels/elements";
import FileSelectModal from "src/components/FileSelectModal";
interface IProps {
  railInfo: ERails[];
  setRailInfo: (newValue: ERails[]) => void;
}

export const NewParkRailsForm: React.FC<IProps> = (props) => {
  const { railInfo = [], setRailInfo } = props;

  const railSelectors = rails.map((rail: ERails, index) => {
    const handleClick = () => {
      if (railInfo.includes(rail)) {
        const filteredRailInfo = railInfo.filter((r) => {
          return r !== rail;
        });
        setRailInfo(filteredRailInfo);
      } else {
        setRailInfo([...railInfo, rail]);
      }
    };
    return <ElementSelector onClick={handleClick} element={rail} key={index} />;
  });

  return (
    <div className="NewParkRailsForm">
      <Text className="NewParkGeneralInfoForm-heading" fontSize="medium">
        What kind of rails do they have?
      </Text>
      <form className="NewParkRailsForm-form">{railSelectors}</form>
    </div>
  );
};

export default NewParkRailsForm;
