import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} id='Login'>Log In</button>;
};

export default LoginButton;