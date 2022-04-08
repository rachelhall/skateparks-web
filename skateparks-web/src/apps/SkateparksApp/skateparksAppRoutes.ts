import { IRoute } from "../../localModels/route";
import PlaygroundView from "../../views/PlaygroundView/";
import LoginView from "../../views/LoginView/LoginView";
import SignUpView from "../../views/SignUpView/SignUpView";
import FeedView from "../../views/FeedView";
import MessagesView from "../../views/MessagesView";
import NewPostView from "../../views/NewPostView";
import SearchView from "src/views/SearchView";
import ActivityView from "src/views/ActivityView";
import ProfileView from "src/views/ProfileView";
import ParkView from "src/views/ParkView";
const AR = `/app`;

export const LOGIN_VIEW_ROUTE = `${AR}/login`;
export const SIGNUP_VIEW_ROUTE = `${AR}/signup`;
export const PLAYGROUND_VIEW_ROUTE = `${AR}/playground`;
export const FEED_VIEW_ROUTE = `${AR}/feed`;
export const MESSAGES_VIEW_ROUTE = `${AR}/messages`;
export const NEWPOST_VIEW_ROUTE = `${AR}/newpost`;
export const SEARCH_VIEW_ROUTE = `${AR}/search`;
export const ACTIVITY_VIEW_ROUTE = `${AR}/activity`;
export const PROFILE_VIEW_ROUTE = `${AR}/p/:username`;
export const PARK_VIEW_ROUTE = `${AR}/park/parkname`;

export const routes: IRoute[] = [
  { component: LoginView, path: LOGIN_VIEW_ROUTE },
  { component: SignUpView, path: SIGNUP_VIEW_ROUTE },
  { component: PlaygroundView, path: PLAYGROUND_VIEW_ROUTE },
  { component: FeedView, path: FEED_VIEW_ROUTE },
  { component: MessagesView, path: MESSAGES_VIEW_ROUTE },
  { component: NewPostView, path: NEWPOST_VIEW_ROUTE },
  { component: SearchView, path: SEARCH_VIEW_ROUTE },
  { component: ActivityView, path: ACTIVITY_VIEW_ROUTE },
  { component: ProfileView, path: PROFILE_VIEW_ROUTE },
  { component: ParkView, path: PARK_VIEW_ROUTE },
];

export const skateparkAppRoutes: IRoute[] = [...routes];

export default skateparkAppRoutes;
