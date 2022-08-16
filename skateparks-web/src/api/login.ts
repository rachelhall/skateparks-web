import axios from "axios";
import { setToken, storeUser } from "src/utils/localStorage";
import { API_URL } from "./API_URL";

const url = `${API_URL}/user/token/`;

interface IProps {
  email: string;
  password: string;
}

export const login = async (props: IProps) => {
  const { email, password } = props;

  try {
    const response = await axios.post(url, {
      email,
      password,
    });

    let loginSuccess;

    const { data } = response;

    if (data) {
      setToken(data.token);
      loginSuccess = true;
    }
    return loginSuccess;
  } catch (error) {
    console.warn(error);
    return undefined;
  }
};
