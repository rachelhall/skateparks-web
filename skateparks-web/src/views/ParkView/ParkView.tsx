import React, { useEffect } from "react";

import "./ParkView.scss";
import { IPark } from "../../generated/graphql";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContentPiece from "src/components/ContentPiece";
import { FALLBACK } from "../../static/assets/images";
import BackIcon from "../../styleComponents/BackIcon";
import Button from "src/styleComponents/Button";
import Text from "../../styleComponents/Text";
import StarIcon from "../../styleComponents/StarIcon";
import axios from "axios";
import { getToken } from "src/utils/localStorage";

interface IProps {}

export const ParkView: React.FC<IProps> = () => {
  const location = useLocation();
  //@ts-ignore
  const { park } = location.state;
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="ParkView">
      <div className="ParkView-contentContainer">
        <BackIcon
          className="ParkView-back"
          color="white"
          onClick={handleBackClick}
        />
        <Button color="white" className="ParkView-follow" buttonSize="xSmall">
          Follow
        </Button>
        <ContentPiece
          className="ParkView-picture"
          src={park.imageUrl ?? FALLBACK}
        />
      </div>
      <div className="ParkView-infoContainer">
        <div className="ParkView-infoSection">
          <div className="ParkView-titleFollowers">
            <Text className="ParkView-title" fontWeight="bold">
              {park.title}
            </Text>
            <Text fontSize="xSmall" className="ParkView-followers">
              1,206 followers
            </Text>
          </div>
          <div className="ParkView-ratingContainer">
            <StarIcon height={18} width={18} />
            <Text
              fontWeight="bold"
              fontSize="xSmall"
              className="ParkView-rating"
            >
              4.3
            </Text>
          </div>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Text className="ParkView-location ParkView-link" fontSize="xSmall">
              {park.city}, {park.state}, {park.country}
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ParkView;
