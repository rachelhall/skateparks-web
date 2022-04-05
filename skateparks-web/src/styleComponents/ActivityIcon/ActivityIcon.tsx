import React, { useState } from "react";
import { Notifications, NotificationsOutline } from "react-ionicons";

import "./ActivityIcon.scss";

interface IProps {
  buttonSize: number;
  isActive: boolean;
}

export const ActivityIcon: React.FC<IProps> = (props) => {
  const { buttonSize, isActive } = props;
  if (isActive) {
    return (
      <Notifications
        color={"#00000"}
        height={`${buttonSize}px`}
        width={`${buttonSize}px`}
      />
    );
  } else {
    return (
      <NotificationsOutline
        color={"#00000"}
        height={`${buttonSize}px`}
        width={`${buttonSize}px`}
      />
    );
  }
};

export default ActivityIcon;
