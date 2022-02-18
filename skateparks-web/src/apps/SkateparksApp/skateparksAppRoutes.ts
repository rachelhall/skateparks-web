import { IRoute } from "@skateparks/localModels/route";
import Login from "@skateparks/pages/Login";
import PlaygroundView from "@skateparks/views/PlaygroundView";

const AR = `/app`;

export const LOGIN_VIEW_ROUTE = `${AR}/login`;
export const PLAYGROUND_VIEW_ROUTE = `${AR}/playground`;

export const routes: IRoute[] = [
  { component: Login, path: LOGIN_VIEW_ROUTE },
  { component: PlaygroundView, path: PLAYGROUND_VIEW_ROUTE },
];

export const skateparkAppRoutes: IRoute[] = [...routes];

export default skateparkAppRoutes;
