import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";

// Component Imports

import { Login } from "./pages/login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.LOGIN} element={Login} />
      </Routes>
    </Router>
  );
};

export default App;
