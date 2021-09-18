import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Table from "react-bootstrap/Table";

export class FormTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackerData: [],
      ingredent: [],
      serving: [],
      totalCalories: 0,
    };
  }
  handleClickAddItem = async (e) => {
    e.preventDefault();
    this.state.ingredent.push(e.target.item.value);
    await this.setState({ ingredent: this.state.ingredent });
    this.state.serving.push(e.target.serve.value);
    await this.setState({ serving: this.state.serving });
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}/tracker?ingr=${e.target.item.value}`;
    const getDataNutrition = await axios.get(serverUrl);
    console.log(getDataNutrition);
    this.state.trackerData.push(getDataNutrition.data);

    await this.setState({ trackerData: this.state.trackerData });
    console.log(this.state.trackerData);

      let sum =this.state.trackerData[this.state.trackerData.length-1].calories * this.state.serving[this.state.serving.length-1];
      this.state.totalCalories += sum;
    
    await this.setState({ totalCalories: this.state.totalCalories });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleClickAddItem}
        style={{width:'60%',marginLeft:'20%',marginTop:'5%',paddingLeft:'4%'}}>
          <Row>
            <Col xs={7}>
              <Form.Control placeholder="Search for food" name="item" />
            </Col>
            <Col>
              <Form.Control placeholder="quantity/grams" name="serve" />
            </Col>
            <Col>
              <Button type="submit">Add Item</Button>
            </Col>
          </Row>
        </Form>
        <Table striped bordered hover variant="dark"
        style={{width:'60%',marginLeft:'20%',marginTop:'2%'}}>
          <thead>
            <tr>
              <th style={{width:"5%"}}>#</th>
              <th style={{width:"20%"}}>Item</th>
              <th style={{width:"20%"}}>Calories</th>
            </tr>
          </thead>
          <tbody>
            {this.state.trackerData.map((el) => {
              return (
                <tr>
                  <td>{this.state.trackerData.indexOf(el)+1}</td>
                  <td>
                    {this.state.ingredent[this.state.trackerData.indexOf(el)]}
                  </td>
                  <td>
                    {el.calories *
                      this.state.serving[this.state.trackerData.indexOf(el)]}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td>#</td>
              <td>Total</td>
              <td>{this.state.totalCalories}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default FormTracker;
