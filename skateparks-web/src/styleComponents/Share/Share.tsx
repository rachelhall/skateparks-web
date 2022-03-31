import React from "react";
import { SendOutline } from "react-ionicons";

import "./Share.scss";

interface IProps {}

export const Share: React.FC<IProps> = (props) => {
  const {} = props;

  return <SendOutline color={"#00000"} height="28px" width="28px" />;
};

export default Share;
