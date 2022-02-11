import { IRoute } from "@skateparks/localModels/route";
import Login from "@skateparks/pages/Login";

const AR = `/app`;

export const LOGIN_VIEW_ROUTE = `${AR}/login`;

export const routes: IRoute[] = [{ component: Login, path: LOGIN_VIEW_ROUTE }];

export const skateparkAppRoutes: IRoute[] = [...routes];

export default skateparkAppRoutes;
