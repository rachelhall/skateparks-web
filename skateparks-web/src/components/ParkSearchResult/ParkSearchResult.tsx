import React from "react";
import ContentPiece from "src/components/ContentPiece";
import { IPark } from "src/generated/graphql";
import { FALLBACK } from "../../static/assets/images";
import Text from "../../styleComponents/Text";
import "./ParkSearchResult.scss";

interface IProps {
  park: IPark;
}

export const ParkSearchResult: React.FC<IProps> = (props) => {
  const { park } = props;

  return (
    <div className="ParkSearchResult">
      <ContentPiece
        className="ParkSearchResult-image"
        src={park.imageUrl ?? FALLBACK}
      />
      <Text
        className="ParkSearchResult-text"
        fontSize="small"
        fontWeight="bold"
      >
        {park.title}
      </Text>
      <Text className="ParkSearchResult-text" fontSize="small">
        {park.city}, {park.state}
      </Text>
      <Text className="ParkSearchResult-text" fontSize="xSmall">
        {park.description}
      </Text>
    </div>
  );
};

export default ParkSearchResult;
