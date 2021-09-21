import React from "react";
import LoginButton from "./LoginButton";
// import Card from "react-bootstrap/Card";
class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <div>


          <h2 id="mainh2">Youtrition App</h2>
          <p id="mainp">
          An Apple a Day keep the Doctor Away
          </p>


        </div>

        <LoginButton />
      </div>
    );
  }
}
export default LoginForm;
