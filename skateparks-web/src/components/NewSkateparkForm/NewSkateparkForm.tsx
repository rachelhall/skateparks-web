import TextInput from "../../styleComponents/TextInput";
import React from "react";

import "./NewSkateparkForm.scss";

interface IProps {}

export const NewSkateparkForm: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className="NewSkateparkForm">
      <TextInput />
    </div>
  );
};

export default NewSkateparkForm;
