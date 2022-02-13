import React from "react";

import "./AnonHomeView.scss";
import { gql, useMutation } from "@apollo/client";

interface IProps {}

export const AnonHomeView: React.FC<IProps> = (props) => {
  const {} = props;

  const CREATE_POST_METHOD = gql`
    mutation createPark(
      $title: string
      $description: string
      $created_at: string
    ) {
      createPost(
        title: $title
        description: $description
        created_at: $created_at
      ) {
        success
        errors
        post {
          id
          title
          description
          created_at
        }
      }
    }
  `;

  const [createPark] = useMutation(CREATE_POST_METHOD);

  const handleCreateStandardPark = (
    title: string,
    description: string,
    created_at: string
  ) => {
    createPark({ variables: { title, description, created_at } });
  };

  return (
    <div className="AnonHomeView">
      <p>Anonymous home view. Setup navigation or change url to /app/login</p>
      <button
        onClick={() =>
          handleCreateStandardPark(
            "Two Rivers",
            "Concrete park in Nashville",
            `${Date.now()}`
          )
        }
      >
        create standard park
      </button>
    </div>
  );
};

export default AnonHomeView;
