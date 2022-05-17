import React from "react";
import Button from "src/styleComponents/Button";
import ProfilePic from "src/styleComponents/ProfilePic";
import Text from "../../styleComponents/Text";

import "./ProfileHeader.scss";

interface IProps {
  user: string;
  name: string;
  bio: string;
  postCount: number;
  followerCount: number;
  followingCount: number;
}

export const ProfileHeader: React.FC<IProps> = (props) => {
  const { user, name, bio, postCount, followerCount, followingCount } = props;

  return (
    <div className="ProfileHeader">
      <div className="ProfileHeader-top">
        <ProfilePic
          className="ProfileHeader-pic"
          size="large"
          image="https://picsum.photos/500"
        />
        <div className="ProfileHeader-right">
          <Text>{user}</Text>
          <Button
            color="white"
            className="ProfileHeader-editProfile"
            buttonSize="small"
          >
            Edit Profile
          </Button>
        </div>
      </div>
      <div className="ProfileHeader-nameBio">
        <Text className="ProfileHeader-name" fontSize="small">
          {name}
        </Text>
        <Text className="ProfileHeader-bio" fontSize="xSmall">
          {bio}
        </Text>
      </div>
      <div className="ProfileHeader-stats">
        <div className="ProfileHeader-statContainer">
          <Text fontWeight="bold" fontSize="small">
            {postCount}
          </Text>
          <Text fontSize="small">posts</Text>
        </div>
        <div className="ProfileHeader-statContainer">
          <Text fontWeight="bold" fontSize="small">
            {followerCount}
          </Text>
          <Text fontSize="small">followers</Text>
        </div>
        <div className="ProfileHeader-statContainer">
          <Text fontWeight="bold" fontSize="small">
            {followingCount}
          </Text>
          <Text fontSize="small">following</Text>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
