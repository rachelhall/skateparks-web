import LoginForm from "../../components/LoginForm/LoginForm";
import React, { useState } from "react";
import Text from "../../styleComponents/Text";

import "./LoginView.scss";

interface IProps {}

export const LoginView: React.FC<IProps> = (props) => {
  const {} = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || username === "";

  return (
    <div className="LoginView">
      <div className="LoginView-header">
        <Text className="LoginView-logo" fontSize="large" fontWeight="bold">
          Skateparks
        </Text>
      </div>
      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
};

export default LoginView;
