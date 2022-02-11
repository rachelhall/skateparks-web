import React from "react";
import { Outlet } from "react-router-dom";

import "./SkateparksApp.scss";

interface IProps {}

export const SkateparksApp: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className="SkateparksApp">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SkateparksApp;
