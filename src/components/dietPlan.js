import React, { Component } from 'react';
import DataModal from './dataModal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import EditDataModel from './EditDataModel';

import './dietPlan.css'
import { withAuth0 } from '@auth0/auth0-react';

export class DietPlan extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            showDataModal: false,
            showUpdateModel: false,
            dailyCalories: '',
            healthStatus: '',
            bmi: '',
            limitOfCalories: '',
            recipeType: '',
            userId: '',
            email: this.props.auth0.user.email,
            gender :'',
            height:'',
            weight:'',
            age :'',
            activety:''
        
        })
    }

    handelDisplayDataModal = () => {
        this.setState({
            showDataModal: !this.state.showDataModal

        })

    }
    handelDisplayUpdateModel = () => {
        this.setState({
            showUpdateModel: !this.state.showUpdateModel
        })
    }

    handelBmi = async (email) => {
      
            let serverUrl = `${process.env.REACT_APP_SERVER_URL}/diet?email=${email}`;
        const BmiDataResponce = await axios.get(serverUrl);
        console.log(BmiDataResponce.data[0]);
        if (BmiDataResponce.data[0]) {
        let gender = BmiDataResponce.data[0].gender;
        let height = BmiDataResponce.data[0].height;
        let weight = BmiDataResponce.data[0].weight;
        let age = BmiDataResponce.data[0].age;
        let activety = BmiDataResponce.data[0].activety;

        let dailyCal;
        let caloreisLimit;
        let typeOfRecipe;
        let bmi = Math.floor((weight / ((height / 100) * (height / 100))));
        // console.log(weight);
        let weightStatus;
        if (gender === 'male') {
            dailyCal = Math.floor(((10 * weight) + (6.25 * height) - (5 * age) + 5) * activety)
        } else {
            dailyCal = Math.floor(((10 * weight) + (6.25 * height) - (5 * age) - 161) * activety)
        };
        if (bmi < '18.5') {
            weightStatus = 'UnderWeight';
            caloreisLimit = dailyCal + 500;
            typeOfRecipe = 'high carbs, high fat, high Protein';
        }
        else if (bmi >= '18.5' && bmi < '24.9') {
            weightStatus = 'Healthy Weight';
            caloreisLimit = dailyCal
            typeOfRecipe = 'balanced'

        } else {
            weightStatus = `OverWeight `
            caloreisLimit = dailyCal - 500
            typeOfRecipe = 'high fiber, low carbs, low Fat'
        }
        await this.setState({
            dailyCalories: dailyCal,           
            healthStatus: weightStatus,
            bmi: bmi,
            limitOfCalories: caloreisLimit,
            recipeType: typeOfRecipe,            
            userId: BmiDataResponce.data[0]._id,
            gender :gender,
            height:height,
            weight:weight,
            age :age,
            activety:activety

        });
        console.log(this.state.height);
        this.props.getTheCalsLimit(this.state.limitOfCalories); 
        }
        
    }
    handelAdd = (e) => {
        console.log('hi');
        e.preventDefault();
        const responseBody = {
            gender: e.target.gender.value,
            height: e.target.height.value,
            weight: e.target.weight.value,
            age: e.target.age.value,
            activety: e.target.activety.value,
            // email: 'salsabil@gmail.com',
            email: this.props.auth0.user.email
        }
        const responsePost = axios.post(`${process.env.REACT_APP_SERVER_URL}/diet`, responseBody);
        
        this.handelBmi(responseBody.email);
        this.handelDisplayDataModal();
        console.log(responsePost);
        
    }

    handelUpdate = (e) => {
        e.preventDefault();
        const responseBody = {
            gender: e.target.gender.value,
            height: e.target.height.value,
            weight: e.target.weight.value,
            age: e.target.age.value,
            activety: e.target.activety.value,
            // email: 'salsabil@gmail.com',
            email: this.props.auth0.user.email

        }
        this.handelBmi(responseBody.email);
        const updateResponse = axios.put(`${process.env.REACT_APP_SERVER_URL}/diet/${this.state.userId}`, responseBody);
        this.handelBmi(responseBody.email);
        this.handelDisplayUpdateModel();
        console.log(updateResponse);
    }

    componentDidMount = () => {
        this.handelBmi(this.state.email);
        
    };

    render() {

        return (
            <div>

                <DataModal
                    showDataModal={this.state.showDataModal}
                    handelDisplayDataModal={this.handelDisplayDataModal}
                    handelAdd={this.handelAdd}
                />
                <EditDataModel
                    handelUpdate={this.handelUpdate}
                    showUpdateModel={this.state.showUpdateModel}
                    handelDisplayUpdateModel={this.handelDisplayUpdateModel}
                    modelState={this.state}
                />
                <>
                    {/* <h3> your daily current calories consumption is {this.state.dailyCalories}</h3>
                <h3> {this.state.healthStatus}</h3>
                <h3> {this.state.bmi}</h3> */}
                    <Table striped bordered hover style={{ width: '80%', marginLeft: '10%', marginTop: '30px' }}>

                        <tbody className='tdDitePlan'>
                            <tr >
                                <td>BMI</td>
                                <td >{this.state.bmi}</td>
                            </tr>
                            <tr>
                                <td>Health State</td>
                                <td>{this.state.healthStatus}</td>
                            </tr>
                            <tr>
                                <td>Body Consumption Calories</td>
                                <td>{this.state.dailyCalories}</td>
                            </tr>
                            <tr>
                                <td>Limit Consumption Calories</td>
                                <td>{this.state.limitOfCalories}</td>
                            </tr>
                            <tr>
                                <td>your Type of Recipe</td>
                                <td>{this.state.recipeType}</td>
                            </tr>
                        </tbody>

                        {
                            this.state.userId ?
                                <Button className='btnDitePlan' style={{ margin: '5px' }} onClick={this.handelDisplayUpdateModel}>
                                    Edit
                                </Button> : <Button className='btnDitePlan' onClick={this.handelDisplayDataModal}>
                                    Add
                                </Button>
                        }

                    </Table>

                </>
            </div>
        )
    }
}

export default withAuth0(DietPlan)
