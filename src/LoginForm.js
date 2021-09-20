import React from "react";
import LoginButton from "./LoginButton";
// import Card from "react-bootstrap/Card";
class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          {" "}
          <img
            src={
              window.location.origin +
              "/—Pngtree—nutrition diet sport icon_5413722.png"
            }
            alt="hi"
            width="40%"
            height="500px"
          ></img>
          <h2>Youtrition App</h2>
          <p>Track your diet</p>
        </div>

        <LoginButton />
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={window.location.origin +'/—Pngtree—nutrition diet sport icon_5413722.png'} alt="hi"/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <LoginButton />
          </Card.Body>
        </Card> */}
      </div>
    );
  }
}
export default LoginForm;
