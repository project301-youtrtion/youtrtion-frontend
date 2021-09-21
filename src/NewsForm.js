import React from "react";
import { Form, Row, Col } from "react-bootstrap";

class NewsForm extends React.Component {
  render() {
    return (
      <>
        <Form className="formTrackers" onSubmit={this.props.handleSearch}>
          <Row className="formRow">
            <Col xs={7}>
           

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
