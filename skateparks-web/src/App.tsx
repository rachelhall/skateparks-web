import React from "react";
import { Router } from "react-router-dom";
import "./App.scss";

import { useRouteRenderer } from "./utils/useRouteRenderer";

const App = () => {
  const currentView = useRouteRenderer();
  return (
    <Router>
      <main role="main">{currentView}</main>;
    </Router>
  );
};

export default App;
