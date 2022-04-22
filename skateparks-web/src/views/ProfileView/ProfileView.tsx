import React from "react";
import "./ProfileView.scss";

import ProfileHeader from "../../components/ProfileHeader";
import ProfilePosts from "src/components/ProfilePosts";
interface IProps {}

export const ProfileView: React.FC<IProps> = (props) => {
  const {} = props;
  const user = "willtrotman";
  const name = "Will Trotman";
  const bio =
    "Cool skater guy from nashville. Kickflips, ollies, shuv its, all the good stuff";
  const followerCount = 177;
  const followingCount = 101;
  const postCount = 34;

  return (
    <div className="ProfileView">
      <ProfileHeader
        user={user}
        name={name}
        bio={bio}
        followerCount={followerCount}
        followingCount={followingCount}
        postCount={postCount}
      />
      <ProfilePosts />
    </div>
  );
};

export default ProfileView;
