import React, { useState } from "react";
import Text from "../../styleComponents/Text";
import SignUpForm from "../../components/SignUpForm";

import "./SignUpView.scss";

interface IProps {}

export const SignUpView: React.FC<IProps> = (props) => {
  const {} = props;
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    confirmEmail: "",
    name: "",
    username: "",
    password: "",
  });

  return (
    <div className="SignUpView">
      <div className="SignUpView-header">
        <Text className="SignUpView-logo" fontSize="large" fontWeight="bold">
          Skateparks
        </Text>
      </div>
      <SignUpForm signUpInfo={signUpInfo} setSignUpInfo={setSignUpInfo} />
    </div>
  );
};

export default SignUpView;
