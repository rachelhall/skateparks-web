import React, { useState } from "react";
import Text from "../../styleComponents/Text";
import SignUpForm from "../../components/SignUpForm";

import "./SignUpView.scss";

interface IProps {}

export const SignUpView: React.FC<IProps> = (props) => {
  const {} = props;
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="SignUpView">
      <div className="SignUpView-header">
        <Text className="SignUpView-logo" fontSize="large" fontWeight="bold">
          Skateparks
        </Text>
      </div>
      <SignUpForm
        email={email}
        setEmail={setEmail}
        confirmEmail={confirmEmail}
        setConfirmEmail={setConfirmEmail}
        name={name}
        setName={setName}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
};

export default SignUpView;
