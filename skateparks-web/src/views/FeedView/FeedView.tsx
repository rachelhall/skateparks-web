import React, { useEffect, useState } from "react";

import "./FeedView.scss";
import FeedPost from "../../components/FeedPost";
import FileInput from "../../styleComponents/FileInput";
import { Park, useParksQuery } from "src/generated/graphql";

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
      <p>Test</p>
      {data?.listParks.parks?.map((park) => (
        <FeedPost user="Bill Trotten" src={park} filesArray={filesArray} />
      ))}
      {/* <FeedPost user="profilename" src={filesArray} /> */}
      {/* <FileInput
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
      /> */}
    </div>
  );
};

export default FeedView;
