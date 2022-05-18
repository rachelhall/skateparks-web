import React, { useState } from "react";
import ActivityNotification from "src/components/ActivityNotification";

import "./ActivityView.scss";

interface IProps {}

export const ActivityView: React.FC<IProps> = (props) => {
  const {} = props;
  const [dummyNotifications, setDummyNotifications] = useState([
    { type: "like", user: "user301" },
    { type: "like", user: "newskater" },
    { type: "follow", user: "willtrotman" },
    { type: "like", user: "paulmccartney" },
    { type: "follow", user: "goodskater" },
    { type: "like", user: "badskater" },
  ]);

  return (
    <div className="ActivityView">
      {dummyNotifications.map((notification, index) => {
        const closeNotification = () => {
          const newArray = dummyNotifications.filter((index) => {
            return index !== notification;
          });
          setDummyNotifications(newArray);
        };
        return (
          <ActivityNotification
            // @ts-ignore
            type={notification.type}
            user={notification.user}
            closeNotification={closeNotification}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ActivityView;
