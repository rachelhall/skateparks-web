import React, { useEffect, useState } from "react";
import { createPost } from "src/api/createPost";
import TextInput from "src/styleComponents/TextInput";
import { IPost } from "src/types/post";

import "./CreatePostView.scss";

interface IProps {}

export const CreatePostView: React.FC<IProps> = (props) => {
  const {} = props;

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [park, setPark] = useState<number>(1);

  const [image, setImage] = useState<any>();

  //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     event.target.files && setImage(event.target.files);
  //   };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createPost({ title, description, park, image });
  };

  return (
    <div className="CreatePostView">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <TextInput
          className="CreatePost-input"
          label="Title"
          placeholder=" "
          onChange={setTitle}
          value={title}
        />
        <TextInput
          className="CreatePost-input"
          label="Description"
          placeholder=" "
          onChange={setDescription}
          value={description}
        />

        <input
          type="file"
          onChange={(e) => e.target.files && setImage(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePostView;
