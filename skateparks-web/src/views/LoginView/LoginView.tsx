import LoginForm from "../../components/LoginForm/LoginForm";
import React, { useState } from "react";
import Text from "../../styleComponents/Text";

import "./LoginView.scss";

interface IProps {}

export const LoginView: React.FC<IProps> = (props) => {
  const {} = props;
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="LoginView">
      <div className="LoginView-header">
        <Text className="LoginView-logo" fontSize="large" fontWeight="bold">
          Skateparks
        </Text>
      </div>
      <LoginForm loginInfo={loginInfo} setLoginInfo={setLoginInfo} />
    </div>
  );
};

export default LoginView;
