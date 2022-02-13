import React from "react";
import "./App.scss";
import client from "./graphql/client";

import { useRouteRenderer } from "./utils/useRouteRenderer";
import { gql } from "@apollo/client";

export const App = () => {
  client
    .query({
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
    })
    .then((result) => console.log(result));

  const currentView = useRouteRenderer();
  return <main role="main">{currentView}</main>;
};

export default App;
