import React, { useEffect, useMemo, useState } from "react";

import "./FeedView.scss";
import FeedPost from "../../components/FeedPost";
import FileInput from "../../styleComponents/FileInput";
import { useParksQuery } from "src/generated/graphql";
import ParkItem from "src/components/ParkItem";
import { ParkItemContent, comments } from "../../DummyData";

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
    // <div className="FeedView">
    //   <ParkItem
    //     description="Great park with lots of ramps and rails and cool shit"
    //     parkName="6th Avenue Skatepark"
    //     rating={3}
    //     src={ParkItemContent}
    //   />
    //   {data?.listParks.parks?.map((park, index) => (
    //     <FeedPost
    //       key={index}
    //       comments={comments}
    //       user="Bill Trotten"
    //       src={park}
    //       filesArray={filesArray}
    //     />
    //   ))}
    //   <ParkItem
    //     description="Great park with lots of ramps and rails and cool shit"
    //     parkName="6th Avenue Skatepark"
    //     rating={3}
    //     src={ParkItemContent}
    //   />
    //   {/* <FeedPost user="profilename" src={filesArray} /> */}
    //   {/* <FileInput
    //     selectedFiles={selectedFiles}
    //     setSelectedFiles={setSelectedFiles}
    //   /> */}
    // </div>
  );
};

export default FeedView;
