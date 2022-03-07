import React from "react";
import TextInput from "../../styleComponents/TextInput";
import Button from "../../styleComponents/Button/Button";

import "./LoginForm.scss";

interface IProps {}

export const LoginForm: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className="LoginForm">
      <form className="LoginForm-form">
        <div className="LoginForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="LoginForm-TextInput"
            labelContent="Username, email, or phone number"
          />
        </div>
        <div className="LoginForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="LoginForm-TextInput"
            labelContent="Password"
            type="password"
          />
        </div>
        <Button className="LoginForm-Button-login" buttonSize="full">
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
