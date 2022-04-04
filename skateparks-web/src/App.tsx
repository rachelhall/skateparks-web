import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/Navigation";

import { useRouteRenderer } from "./utils/useRouteRenderer";

export const App = () => {
  const currentView = useRouteRenderer();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { pathname } = useLocation();
  return (
    <main role="main">
      {isLoggedIn && <Navigation pathname={pathname} />}
      {currentView}
    </main>
  );
};

export default App;
