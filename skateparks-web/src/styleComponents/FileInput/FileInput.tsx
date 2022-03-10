import React, { useState } from "react";

import "./FileInput.scss";
interface IProps {
  selectedFiles: File | Array<File> | Object | null;
  setSelectedFiles: (newFile: File | Array<File> | Object | null) => void;
}

export const FileInput: React.FC<IProps> = (props) => {
  const { selectedFiles, setSelectedFiles } = props;

  const fileSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setSelectedFiles(Array.from(e.target.files));
  };
  const fileUploadHandler = () => {};
  return (
    <div className="FileInput">
      <input type="file" onChange={fileSelectedHandler} multiple />
    </div>
  );
};

export default FileInput;
