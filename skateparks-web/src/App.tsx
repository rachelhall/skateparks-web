import React from "react";
import "./App.scss";

import { useRouteRenderer } from "./utils/useRouteRenderer";

const App = () => {
  const currentView = useRouteRenderer();
  return <main role="main">{currentView}</main>;
};

export default App;
