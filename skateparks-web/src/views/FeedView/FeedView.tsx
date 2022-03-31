import React, { useState } from "react";

import "./FeedView.scss";
import FeedPost from "../../components/FeedPost";
import FileInput from "../../styleComponents/FileInput";

interface IProps {}

export const FeedView: React.FC<IProps> = (props) => {
  const {} = props;
  const [selectedFiles, setSelectedFiles] = useState<
    File | Array<File> | Object | null
  >(null);
  console.log(selectedFiles);

  const filesArray = [
    "../images/testpic.jpg",
    "../images/testpic2.jpg",
    "https://picsum.photos/500",
  ];
  return (
    <div className="FeedView">
      <FeedPost user="profilename" src={filesArray} />
      {/* <FileInput
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
      /> */}
    </div>
  );
};

export default FeedView;
