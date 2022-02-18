import React from "react";
import PlaygroundView from "../views/PlaygroundView";
import NoMatchView from "../views/NoMatchView";
import LoginView from "../views/LoginView/LoginView";
import SignUpView from "../views/SignUpView/SignUpView";
import { useRoutes } from "react-router-dom";
import { ERoutes } from "../constants/routes";
import SkateparksApp from "../apps/SkateparksApp";
import AnonHomeView from "../views/AnonHomeView";

export const useRouteRenderer = () => {
  return useRoutes([
    { path: ERoutes.Anon_HOME_ROUTE, element: <AnonHomeView /> },
    {
      path: ERoutes.HOME_PAGE,
      element: <SkateparksApp />,
      children: [
        { path: ERoutes.LOGIN, element: <LoginView /> },
        { path: ERoutes.SIGN_UP, element: <SignUpView /> },
        { path: "playground", element: <PlaygroundView /> },
        { path: "*", element: <NoMatchView /> },
      ],
    },
    { path: "*", element: <NoMatchView /> },
  ]);
};
