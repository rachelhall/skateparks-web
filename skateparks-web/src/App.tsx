import React from "react";
import "./App.scss";
import client from "./graphql/client";

import { useRouteRenderer } from "./utils/useRouteRenderer";
import { gql } from "@apollo/client";

export const App = () => {
  const currentView = useRouteRenderer();
  return <main role="main">{currentView}</main>;
};

export default App;
