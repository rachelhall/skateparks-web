import React from "react";
import TextInput from "../../styleComponents/TextInput";
import Button from "../../styleComponents/Button/Button";
import Text from "../../styleComponents/Text";

import "./SignUpForm.scss";

interface IProps {
  email: string;
  confirmEmail: string;
  name: string;
  username: string;
  password: string;
  setEmail: (newValue: string) => void;
  setConfirmEmail: (newValue: string) => void;
  setName: (newValue: string) => void;
  setUsername: (newValue: string) => void;
  setPassword: (newValue: string) => void;
}

export const SignUpForm: React.FC<IProps> = (props) => {
  const {
    email,
    confirmEmail,
    name,
    username,
    password,
    setEmail,
    setConfirmEmail,
    setName,
    setUsername,
    setPassword,
  } = props;

  return (
    <div className="SignUpForm">
      <form className="SignUpForm-form">
        <div className="SignUpForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="SignUpForm-TextInput"
            labelContent="Email"
            value={email}
            onChange={(value) => {
              setEmail(value);
            }}
          />
        </div>
        <div className="SignUpForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="SignUpForm-TextInput"
            labelContent="Confirm email"
            value={confirmEmail}
            onChange={(value) => {
              setConfirmEmail(value);
            }}
          />
        </div>
        <div className="SignUpForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="SignUpForm-TextInput"
            labelContent="Full Name"
            value={name}
            onChange={(value) => {
              setName(value);
            }}
          />
        </div>
        <div className="SignUpForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="SignUpForm-TextInput"
            labelContent="Username"
            value={username}
            onChange={(value) => {
              setUsername(value);
            }}
          />
        </div>

        <div className="SignUpForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="SignUpForm-TextInput"
            labelContent="Password"
            type="password"
            value={password}
            onChange={(value) => {
              setPassword(value);
            }}
          />
        </div>
        <Button className="SignUpForm-Button-signup" buttonSize="full">
          Sign Up
        </Button>
        <Text className="SignUpForm-agreementText" fontSize="small">
          By signing up, you agree to Skatepark's Terms of Use, Privacy Policy
          and Cookie Policy.
        </Text>
      </form>
    </div>
  );
};

export default SignUpForm;
