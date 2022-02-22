import TextInput from "../../styleComponents/TextInput";
import React from "react";

import "./LoginForm.scss";

interface IProps {}

export const LoginForm: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className="LoginForm">
      <form className="LoginForm-form">
        <div className="LoginForm-inputContainer">
          {/* <input className="LoginForm-userInput" type="text" /> */}
          <TextInput
            className="LoginForm-userInput"
            label="Username, email, or phone number"
          />
        </div>
        <div className="LoginForm-inputContainer">
          <input className="LoginForm-passInput" type="text" />
          <label className="LoginForm-label">Password</label>
        </div>
        <button className="LoginForm-loginButton">Log In</button>
        <a className="LoginForm-link">Forgot password?</a>
        <p className="LoginForm-signUp">
          Don't have an account? <a className="LoginForm-link">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
