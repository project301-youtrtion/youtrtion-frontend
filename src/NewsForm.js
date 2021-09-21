import React from "react";
import { Form, Row, Col } from "react-bootstrap";

class NewsForm extends React.Component {
  render() {
    return (
      <>
        <Form  className="formTracker"
          onSubmit={this.props.handleSearch} 
        >
          <Row className='formRow'>
            <Col xs={7}>
              <Form.Control
                type="text"
                placeholder="Search for Heath and new Type of diets"
                name="search"
              />
             </Col>

           </Row>
           <Row>
            <Col xs={7}>
              <Form.Control type="submit" placeholder="Search" />
            </Col>
            </Row>
        </Form>
      </>
    );
  }
}

export default NewsForm;
