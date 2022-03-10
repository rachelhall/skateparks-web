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
  return (
    <div className="FeedView">
      <FeedPost />
      <FileInput
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
      />
    </div>
  );
};

export default FeedView;
