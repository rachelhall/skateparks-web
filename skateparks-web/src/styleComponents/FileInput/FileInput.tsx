import React, { useState } from "react";

import "./FileInput.scss";
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
  const fileUploadHandler = () => {
    axios.post(storage);
  };
  return (
    <div className="FileInput">
      <input type="file" onChange={fileSelectedHandler} />
      <Button onClick={fileUploadHandler}>Upload</Button>
    </div>
  );
};

export default FileInput;
