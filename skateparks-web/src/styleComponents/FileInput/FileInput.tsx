import React, { useRef, useState } from "react";
import Button from "../Button";

import "./FileInput.scss";
interface IProps {
  selectedFiles: File | Array<File> | Object | null;
  setSelectedFiles: (newFile: File | Array<File> | Object | null) => void;
}

export const FileInput: React.FC<IProps> = (props) => {
  const { selectedFiles, setSelectedFiles } = props;

  const fileSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setSelectedFiles(e.target.files);
    // console.log(selectedFiles);
  };

  const hiddenInput = useRef(null);

  const handleClick = () => {
    // @ts-ignore
    hiddenInput.current?.click();
  };
  const fileUploadHandler = (files: File | Array<File>) => {};
  return (
    <div className="FileInput">
      <input
        ref={hiddenInput}
        className="FileInput-input"
        type="file"
        onChange={fileSelectedHandler}
        multiple
      />
      <Button onClick={handleClick} buttonSize="small" borderRadius="none">
        Select Files
      </Button>
    </div>
  );
};

export default FileInput;
