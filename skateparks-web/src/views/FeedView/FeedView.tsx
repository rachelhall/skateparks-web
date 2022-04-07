import React, { useEffect, useState } from "react";

import "./FeedView.scss";
import FeedPost from "../../components/FeedPost";
import FileInput from "../../styleComponents/FileInput";
import { Park, useParksQuery } from "src/generated/graphql";
import ParkItem from "src/components/ParkItem";
import { ParkItemContent, comments, users } from "../../DummyData";

interface IProps {}

export const FeedView: React.FC<IProps> = (props) => {
  const {} = props;
  // const [selectedFiles, setSelectedFiles] = useState<
  //   File | Array<File> | Object | null
  // >(null);

  const { data } = useParksQuery();
  const parks = data?.listParks.parks;

  const filesArray = [
    "../images/testpic.jpg",
    "../images/testpic2.jpg",
    "https://picsum.photos/500",
  ];

  useEffect(() => console.log({ parks }), [data, parks]);
  return (
    <div className="FeedView">
      <ParkItem
        description="Great park with lots of ramps and rails and cool shit"
        parkName="6th Avenue Skatepark"
        rating={3}
        src={ParkItemContent}
      />
      {users.map((user, index) => {
        <FeedPost
          key={index}
          user={user.handle}
          filesArray={user.posts?.[0].src}
          location={user.posts?.[0].location}
          comments={user.posts?.[0].comments}
        />;
      })}

      {/* {data?.listParks.parks?.map((park, index) => (
        <FeedPost
          key={index}
          comments={comments}
          user="Bill Trotten"
          src={park}
          filesArray={filesArray}
        />
      ))} */}
    </div>
  );
};

export default FeedView;
