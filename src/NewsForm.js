import React from "react";
import { Form, Row, Col } from "react-bootstrap";

class NewsForm extends React.Component {
  render() {
    return (
      <>
        <Form className="formTracker" onSubmit={this.props.handleSearch}>
          <Row className="formRow">
            <Col xs={7}>
            <img id='iconimage' src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'/>

              <Form.Control
                type="text"
                placeholder="     Search for Heath and new Type of diets"
                name="search"
              />
                <Form.Control
                className="inputNews"
                type="submit"
                placeholder="Search"
              />
            </Col>
          </Row>
         
        </Form>
      </>
    );
  }
}

export default NewsForm;
