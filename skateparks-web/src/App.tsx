import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/Navigation";

import { useRouteRenderer } from "./utils/useRouteRenderer";
import NewPostView from "./views/NewPostView";

export const App = () => {
  const currentView = useRouteRenderer();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { pathname } = useLocation();

  const [postIsOpen, setPostIsOpen] = useState<boolean>(false);
  const navigation = isLoggedIn && (
    <Navigation setPostIsOpen={setPostIsOpen} pathname={pathname} />
  );
  return (
    <main role="main">
      {navigation}
      {postIsOpen && <NewPostView setPostIsOpen={setPostIsOpen} />}
      {currentView}
    </main>
  );
};

export default App;
