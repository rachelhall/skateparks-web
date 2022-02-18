import { ComponentClass, FunctionComponent } from "react";

export interface IRoute {
  anonOnly?: boolean;
  component: ComponentClass<any> | FunctionComponent<any>;
  exact?: boolean;
  hideNav?: boolean;
  location?: any;
  path: string | string[];
  secured?: boolean;
}
