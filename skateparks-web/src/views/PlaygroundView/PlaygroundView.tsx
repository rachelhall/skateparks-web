import React, { useState } from "react";
import TextInput from "src/styleComponents/TextInput";

import "./PlaygroundView.scss";

interface IProps {}

export const PlaygroundView: React.FC<IProps> = (props) => {
  const {} = props;

  const [value, setValue] = useState("Type something here");

  return (
    <div className="PlaygroundView">
      <TextInput value={value} onChange={setValue} />
    </div>
  );
};

export default PlaygroundView;
