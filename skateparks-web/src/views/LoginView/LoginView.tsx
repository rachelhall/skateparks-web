import LoginForm from "../../components/LoginForm/LoginForm";
import React from "react";

import "./LoginView.scss";

interface IProps {}

export const LoginView: React.FC<IProps> = (props) => {
  const {} = props;
  //   const navigate = useNavigate();

  //   const [emailAddress, setEmailAddress] = useState("");
  //   const [password, setPassword] = useState("");

  //   const [error, setError] = useState("");
  //   const isInvalid = password === "" || emailAddress === "";

  //   const handleLogin = () => {};

  return (
    <div className="LoginView">
      <div className="LoginView-header">
        <h1 className="LoginView-logo">Skateparks</h1>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginView;
