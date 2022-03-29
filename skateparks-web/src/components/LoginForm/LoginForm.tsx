import React from "react";
import TextInput from "../../styleComponents/TextInput";
import Button from "../../styleComponents/Button/Button";

import "./LoginForm.scss";
import { FEED_ROUTE } from "../../apps/SkateparksApp/skateparksAppRoutes";

interface IProps {
  loginInfo: ILoginInfo;
  setLoginInfo: (newValue: ILoginInfo) => void;
}
interface ILoginInfo {
  username: string;
  password: string;
}

export const LoginForm: React.FC<IProps> = (props) => {
  const { loginInfo, setLoginInfo } = props;

  return (
    <div className="LoginForm">
      <form className="LoginForm-form">
        <div className="LoginForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="LoginForm-TextInput"
            labelContent="Username, email, or phone number"
            value={loginInfo.username}
            onChange={(value) => {
              setLoginInfo({ ...loginInfo, username: value });
            }}
          />
        </div>
        <div className="LoginForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="LoginForm-TextInput"
            labelContent="Password"
            type="password"
            value={loginInfo.password}
            onChange={(value) => {
              setLoginInfo({ ...loginInfo, password: value });
            }}
          />
        </div>
        <Button
          className="LoginForm-Button-login"
          buttonSize="full"
          linkTo={FEED_ROUTE}
        >
          Log In
        </Button>
        <a className="LoginForm-link">Forgot password?</a>
        <p className="LoginForm-signUp">
          Don't have an account? <a className="LoginForm-link">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
