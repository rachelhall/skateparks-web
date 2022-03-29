import React from "react";
import TextInput from "../../styleComponents/TextInput";
import Button from "../../styleComponents/Button/Button";
import Text from "../../styleComponents/Text";
import Link from "../../styleComponents/Link";

import "./SignUpForm.scss";

interface IProps {
  signUpInfo: ISignUpProps;
  setSignUpInfo: (newValue: ISignUpProps) => void;
}

interface ISignUpProps {
  email: string;
  confirmEmail: string;
  name: string;
  username: string;
  password: string;
}

export const SignUpForm: React.FC<IProps> = (props) => {
  const { signUpInfo, setSignUpInfo } = props;

  return (
    <div className="SignUpForm">
      <form className="SignUpForm-form">
        <div className="SignUpForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="SignUpForm-TextInput"
            labelContent="Email"
            value={signUpInfo.email}
            onChange={(value) => {
              setSignUpInfo({ ...signUpInfo, email: value });
            }}
          />
        </div>
        <div className="SignUpForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="SignUpForm-TextInput"
            labelContent="Confirm email"
            value={signUpInfo.confirmEmail}
            onChange={(value) => {
              setSignUpInfo({ ...signUpInfo, confirmEmail: value });
            }}
          />
        </div>
        <div className="SignUpForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="SignUpForm-TextInput"
            labelContent="Full Name"
            value={signUpInfo.name}
            onChange={(value) => {
              setSignUpInfo({ ...signUpInfo, name: value });
            }}
          />
        </div>
        <div className="SignUpForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="SignUpForm-TextInput"
            labelContent="Username"
            value={signUpInfo.username}
            onChange={(value) => {
              setSignUpInfo({ ...signUpInfo, username: value });
            }}
          />
        </div>

        <div className="SignUpForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="SignUpForm-TextInput"
            labelContent="Password"
            type="password"
            value={signUpInfo.password}
            onChange={(value) => {
              setSignUpInfo({ ...signUpInfo, password: value });
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
