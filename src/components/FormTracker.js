import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "../FormTracker.css"
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

    let sum =
      this.state.trackerData[this.state.trackerData.length - 1].calories *
      this.state.serving[this.state.serving.length - 1];
    this.state.totalCalories += sum;

    await this.setState({ totalCalories: this.state.totalCalories });
  };
  handleCompletetracker = async () => {
    await this.setState({ trackerData: [], totalCalories: 0 });
  };

  render() {
    return (
      <div>
        <img
              src={window.location.origin + '/BMI2.png'}
              alt="BMI2"
              style={{width:'50%', height:'250px', marginLeft:'23%'}}
               />
        <Form
          onSubmit={this.handleClickAddItem}
          style={{
            width: "60%",
            marginLeft: "15%",
            marginTop: "5%",
            
          }}
          className="formTracker"
        >
          <Row>

            <Col xs={7}>
              <Form.Control type='text' placeholder="Search for food" name="item" style={{width:'102%'}} />
            </Col>
            <Col>
              <Form.Control type='text' placeholder="quantity/serve" name="serve" style={{width:'100%'}} />
            </Col>
            <Col>
              <Button type="submit">Add Item</Button>
            </Col>
          </Row>
        </Form>
        <div className='claRemani'

        >
          <h5 >
            Calories Remaining
          </h5>

          <Table responsive className='dailyCalGoalTable' >
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Goal</th>
                <th style={{ fontSize: "25px" }}>-</th>

                <th style={{ width: "20%" }}>daily Calories</th>
                <th style={{ fontSize: "25px" }}>=</th>

                <th style={{ width: "20%" }}>Remaining</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.limitCals}</td>
                <td></td>
                <td>{this.state.totalCalories}</td>
                <td></td>
                <td>{this.props.limitCals - this.state.totalCalories}</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <Table
          // striped
          // bordered
          hover
          style={{ width: "47%", marginLeft: "23%", marginTop: "2%" }}
          className="tableform"
        >
          <thead>
            <tr>
              <th style={{ width: "5%" }}>#</th>
              <th style={{ width: "20%" }}>Item</th>
              <th style={{ width: "20%" }}>Calories</th>
            </tr>
          </thead>
          <tbody>
            {this.state.trackerData.map((el) => {
              return (
                <tr>
                  <td>{this.state.trackerData.indexOf(el) + 1}</td>
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
        <Button
          size="lg"
          style={{ marginLeft: "37.5%" }}
          onClick={this.handleCompletetracker}
          className="buttonforClear"
        >
          Complete your Daily-Tracker
        </Button>
        
      </div>
    );
  }
}

export default FormTracker;
