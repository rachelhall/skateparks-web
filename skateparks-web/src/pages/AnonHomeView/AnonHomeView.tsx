import React from "react";

import "./AnonHomeView.scss";

interface IProps {}

export const AnonHomeView: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className="AnonHomeView">
      Anonymous home view. Setup navigation or change url to /app/login
    </div>
  );
};

export default AnonHomeView;
