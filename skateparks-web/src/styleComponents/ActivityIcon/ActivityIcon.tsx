import React, { useState } from "react";
import { Notifications, NotificationsOutline } from "react-ionicons";

import "./ActivityIcon.scss";

interface IProps {
  isActive: boolean;
}

export const ActivityIcon: React.FC<IProps> = (props) => {
  const { isActive } = props;
  if (isActive) {
    return <Notifications color={"#00000"} height="26px" width="26px" />;
  } else {
    return <NotificationsOutline color={"#00000"} height="26px" width="26px" />;
  }
};

export default ActivityIcon;
