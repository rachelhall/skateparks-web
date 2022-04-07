import React from "react";

import "./FeedView.scss";
import { useParksQuery } from "src/generated/graphql";
import ParkItem from "src/components/ParkItem";

interface IProps {}

export const FeedView: React.FC<IProps> = (props) => {
  const {} = props;

  const { data } = useParksQuery();
  const parks = data?.listParks.parks ?? [];

  return (
    <div>
      {parks?.map((park) => (
        <ParkItem park={park} key={park?.id} />
      ))}
    </div>
  );
};

export default FeedView;
