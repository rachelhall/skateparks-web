import { IUser } from "src/types/user";

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  delete localStorage.token;
};

export const storeUser = (user: IUser) => {
  localStorage.setItem("user", JSON.stringify(user));
};
