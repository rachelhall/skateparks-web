import { IRoute } from "../../localModels/route";
import PlaygroundView from "../../views/PlaygroundView/";
import LoginView from "../../views/LoginView/LoginView";
import SignUpView from "../../views/SignUpView/SignUpView";
import FeedView from "../../views/FeedView";
const AR = `/app`;

export const LOGIN_VIEW_ROUTE = `${AR}/login`;
export const SIGNUP_VIEW_ROUTE = `${AR}/signup`;
export const PLAYGROUND_VIEW_ROUTE = `${AR}/playground`;
export const FEED_VIEW_ROUTE = `${AR}/feed`;

export const routes: IRoute[] = [
  { component: LoginView, path: LOGIN_VIEW_ROUTE },
  { component: SignUpView, path: SIGNUP_VIEW_ROUTE },
  { component: PlaygroundView, path: PLAYGROUND_VIEW_ROUTE },
  { component: FeedView, path: FEED_VIEW_ROUTE },
];

export const skateparkAppRoutes: IRoute[] = [...routes];

export default skateparkAppRoutes;
