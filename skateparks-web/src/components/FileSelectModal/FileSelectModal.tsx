import React, { useState } from "react";

import "./FileSelectModal.scss";
import Text from "../../styleComponents/Text";
import FileInput from "src/styleComponents/FileInput";

interface IProps {
  heading: string;
}

export const FileSelectModal: React.FC<IProps> = (props) => {
  const { heading } = props;

  const [selectedFiles, setSelectedFiles] = useState<
    File | File[] | Object | null
  >(null);

  return (
    <div className="FileSelectModal">
      <Text
        fontSize="small"
        fontWeight="bold"
        className="FileSelectModal-heading"
      >
        {heading}
      </Text>
      <div className="FileSelectModal-body">
        <Text className="FileSelectModal-text">
          Upload photos and videos here
        </Text>
        <FileInput
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
        />
      </div>
    </div>
  );
};

export default FileSelectModal;
