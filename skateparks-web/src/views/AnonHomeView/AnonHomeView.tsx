import React, { useState } from "react";
import client from "../../graphql/client";

import "./AnonHomeView.scss";
import { gql, useMutation } from "@apollo/client";

interface IProps {}

export const AnonHomeView: React.FC<IProps> = (props) => {
  const {} = props;

  // const CREATE_POST_METHOD = gql`
  //   mutation createPark(
  //     $title: String!
  //     $description: String!
  //     $created_at: string!
  //   ) {
  //     createPost(
  //       title: $title
  //       description: $description
  //       created_at: $created_at
  //     ) {
  //       success
  //       errors
  //       post {
  //         id
  //         title
  //         description
  //         created_at
  //       }
  //     }
  //   }
  // `;

  // const [createPark] = useMutation(CREATE_POST_METHOD);

  // const handleCreateStandardPark = (
  //   title: String,
  //   description: String,
  //   created_at: String
  // ) => {
  //   createPark({ variables: { title, description, created_at } });
  // };

  const [allPosts, setAllPosts] = useState();

  client.query({
    query: gql`
      query Query {
        listPosts {
          posts {
            id
            title
            description
            created_at
          }
          success
          errors
        }
      }
    `,
  });
  // .then((result) => setAllPosts(result));

  return (
    <div className="AnonHomeView">
      <p>Anonymous home view. Setup navigation or change url to /app/login</p>
      <p>
        Existing routes: /app/login, /app/signup, /app/createpark,
        /app/playground
      </p>
      {/* <button
        onClick={() =>
          handleCreateStandardPark(
            "Two Rivers",
            "Concrete park in Nashville",
            `${Date.now()}`
          )
        }
      > */}
      {/* create standard park
      </button> */}
      {/* <p>{allPosts.post}</p> */}
    </div>
  );
};

export default AnonHomeView;
