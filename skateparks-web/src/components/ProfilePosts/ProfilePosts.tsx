import React from "react";

import "./ProfilePosts.scss";

interface IProps {}

export const ProfilePosts: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className="ProfilePosts">
      <div className="ProfilePosts-postContainer">
        <img src="https://picsum.photos/600" />
      </div>
      <div className="ProfilePosts-postContainer">
        <img src="https://picsum.photos/600" />
      </div>
      <div className="ProfilePosts-postContainer">
        <img src="https://picsum.photos/600" />
      </div>
      <div className="ProfilePosts-postContainer">
        <img src="https://picsum.photos/600" />
      </div>
      <div className="ProfilePosts-postContainer">
        <img src="https://picsum.photos/600" />
      </div>
      <div className="ProfilePosts-postContainer">
        <img src="https://picsum.photos/600" />
      </div>
    </div>
  );
};

export default ProfilePosts;
