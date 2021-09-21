import React from "react";
// import Card from 'react-bootstrap/Card';
import "./Login.css";
import LoginForm from "./LoginForm";


class Login extends React.Component {
  render() {
    return (
      <div className='loginPage'>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
