import React from "react";

import Login from "../pages/Login";
import { useRoutes } from "react-router-dom";
import { ERoutes } from "../constants/routes";
import SkateparksApp from "../apps/SkateparksApp";
import AnonHomeView from "../pages/AnonHomeView";

export const useRouteRenderer = () => {
  return useRoutes([
    { path: ERoutes.Anon_HOME_ROUTE, element: <AnonHomeView /> },
    {
      path: ERoutes.HOME_PAGE,
      element: <SkateparksApp />,
      children: [{ path: ERoutes.LOGIN, element: <Login /> }],
    },
  ]);
};
