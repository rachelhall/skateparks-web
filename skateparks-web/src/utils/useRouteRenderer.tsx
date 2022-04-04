import React from "react";
import { useRoutes } from "react-router-dom";

import PlaygroundView from "../views/PlaygroundView";
import NoMatchView from "../views/NoMatchView";
import LoginView from "../views/LoginView/LoginView";
import SignUpView from "../views/SignUpView/SignUpView";
import CreateNewParkView from "../views/CreateNewParkView/CreateNewParkView";
import { ERoutes } from "../constants/routes";
import SkateparksApp from "../apps/SkateparksApp";
import AnonHomeView from "../views/AnonHomeView";
import FeedView from "../views/FeedView";
import MessagesView from "src/views/MessagesView";
import NewPostView from "src/views/NewPostView";
import SearchView from "src/views/SearchView";
import ActivityView from "src/views/ActivityView";
import ProfileView from "src/views/ProfileView";

export const useRouteRenderer = () => {
  return useRoutes([
    { path: ERoutes.Anon_HOME_ROUTE, element: <AnonHomeView /> },
    {
      path: ERoutes.HOME_PAGE,
      element: <SkateparksApp />,
      children: [
        { path: ERoutes.LOGIN, element: <LoginView /> },
        { path: ERoutes.SIGN_UP, element: <SignUpView /> },
        { path: ERoutes.FEED, element: <FeedView /> },
        { path: ERoutes.CREATEPARK, element: <CreateNewParkView /> },
        { path: "playground", element: <PlaygroundView /> },
        { path: "*", element: <NoMatchView /> },
        { path: ERoutes.MESSAGES, element: <MessagesView /> },
        { path: ERoutes.NEWPOST, element: <NewPostView /> },
        { path: ERoutes.SEARCH, element: <SearchView /> },
        { path: ERoutes.ACTIVITY, element: <ActivityView /> },
        { path: ERoutes.PROFILE, element: <ProfileView /> },
      ],
    },
    { path: "*", element: <NoMatchView /> },
  ]);
};
