import React from "react";
import ContentPiece from "src/components/ContentPiece";
import { FALLBACK } from "../../static/assets/images";
import Text from "../Text";

import "./ParkSearchResult.scss";

interface IProps {
  city: string;
  description: string;
  image?: string | null;
  onClick?: () => void;
  state: string;
  title: string;
}

export const ParkSearchResult: React.FC<IProps> = (props) => {
  const { city, description, image, onClick, state, title } = props;

  return (
    <div onClick={onClick} className="ParkSearchResult">
      <ContentPiece
        className="ParkSearchResult-image"
        src={image ?? FALLBACK}
      />
      <Text
        className="ParkSearchResult-text"
        fontSize="small"
        fontWeight="bold"
      >
        {title}
      </Text>
      <Text className="ParkSearchResult-text" fontSize="small">
        {city}, {state}
      </Text>
      <Text className="ParkSearchResult-text" fontSize="xSmall">
        {description}
      </Text>
    </div>
  );
};

export default ParkSearchResult;
