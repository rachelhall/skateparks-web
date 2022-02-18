import React from "react";

import "./AnonHomeView.scss";
import { gql, useMutation } from "@apollo/client";
import { MainCard } from "../../components/MainCard/MainCard";
import NewSkateparkForm from "../../components/NewSkateparkForm";

interface IProps {}

export const AnonHomeView: React.FC<IProps> = (props) => {
  const {} = props;

  const CREATE_POST_METHOD = gql`
    mutation createPark($title: String!, $description: String!) {
      createPost(title: $title, description: $description) {
        success
        errors
        post {
          id
          title
          description
        }
      }
    }
  `;

  const [createPark] = useMutation(CREATE_POST_METHOD);

  const handleCreateStandardPark = (title: string, description: string) => {
    createPark({ variables: { title, description } });
  };

  return (
    <div className="AnonHomeView">
      <p>Anonymous home view. Setup navigation or change url to /app/login</p>
      <button
        onClick={() =>
          handleCreateStandardPark("Two Rivers", "Concrete park in Nashville")
        }
      >
        create standard park
      </button>
      <NewSkateparkForm />
    </div>
  );
};

export default AnonHomeView;
