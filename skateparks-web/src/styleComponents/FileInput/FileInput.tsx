import React, { useState } from "react";

import "./FileInput.scss";
interface IProps {
  selectedFiles: File | Array<File> | Object | null;
  setSelectedFiles: (newFile: File | Array<File> | Object | null) => void;
}

export const FileInput: React.FC<IProps> = (props) => {
  const { selectedFiles, setSelectedFiles } = props;

  const fileSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setSelectedFiles(e.target.files);
    console.log(selectedFiles);
  };
  const fileUploadHandler = (files: File | Array<File>) => {};
  return (
    <div className="FileInput">
      <input type="file" onChange={fileSelectedHandler} multiple />
    </div>
  );
};

export default FileInput;
