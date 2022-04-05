import React, { useState } from "react";
import FileSelectModal from "src/components/FileSelectModal";
import CloseIcon from "src/styleComponents/CloseIcon";
import FileInput from "src/styleComponents/FileInput";

import "./NewPostView.scss";

interface IProps {
  setPostIsOpen?: any;
}

export const NewPostView: React.FC<IProps> = (props) => {
  const { setPostIsOpen } = props;

  const closePost = () => {
    setPostIsOpen(false);
    document.body.style.overflow = "unset";
  };
  return (
    <div className="NewPostView">
      <CloseIcon className="NewPostView-close" onClick={closePost} />
      <FileSelectModal heading="Create New Post" />
    </div>
  );
};

export default NewPostView;
