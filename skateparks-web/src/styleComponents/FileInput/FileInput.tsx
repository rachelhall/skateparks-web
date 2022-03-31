import React, { useState } from "react";

import "./FileInput.scss";
<<<<<<< HEAD
import axios from "axios";
import storage from "../../firebase";
import Button from "src/styleComponents/Button";
interface IProps {}

export const FileInput: React.FC<IProps> = (props) => {
  const {} = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setSelectedFile(e.target.files[0]);
  };
  // const fileUploadHandler = () => {
  //   axios.post(storage);
  // };
  return (
    <div className="FileInput">
      <input type="file" onChange={fileSelectedHandler} />
      {/* <Button onClick={fileUploadHandler}>Upload</Button> */}
=======
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
>>>>>>> 11ce64e (Squashing will's commit)
    </div>
  );
};

export default FileInput;
