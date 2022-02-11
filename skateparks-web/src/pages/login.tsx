import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export const Login = () => {
  // const navigate = useNavigate();

  // const [emailAddress, setEmailAddress] = useState("");
  // const [password, setPassword] = useState("");

  // const [error, setError] = useState("");
  // const isInvalid = password === "" || emailAddress === "";

  // const handleLogin = () => {};
  useEffect(() => {
    document.title = "Login - Skateparks";
  }, []);
  return (
    <div className="container">
      <div>
        <img src="picsum.photos/1000" alt="samplePic" />
      </div>
      <div>
        <p>I will be the form</p>
      </div>
    </div>
  );
};
