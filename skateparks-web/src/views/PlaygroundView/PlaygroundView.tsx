import React, { useState } from "react";
import FileInput from "src/styleComponents/FileInput";

import "./PlaygroundView.scss";

interface IProps {}

export const PlaygroundView: React.FC<IProps> = (props) => {
  const {} = props;

  const [value, setValue] = useState("Type something here");

  return <div className="PlaygroundView">{/* <FileInput /> */}</div>;
};

export default PlaygroundView;
