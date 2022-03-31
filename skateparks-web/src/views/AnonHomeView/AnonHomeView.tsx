import React from "react";

import "./AnonHomeView.scss";

interface IProps {}

export const AnonHomeView: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className="AnonHomeView">
      <p>Anonymous home view. Setup navigation or change url to /app/login</p>
      <p>
        Existing routes: /app/login, /app/signup, /app/createpark,
        /app/playground
      </p>
<<<<<<< HEAD
=======
      <button
        onClick={() =>
          handleCreateStandardPark(
            "Two Rivers",
            "Concrete park in Nashville",
            `${Date.now()}`
          )
        }
      >
        create standard park
      </button>
      {/* <p>{allPosts.post}</p> */}
>>>>>>> 11ce64e (Squashing will's commit)
    </div>
  );
};

export default AnonHomeView;
