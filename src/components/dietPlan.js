import React, { Component } from 'react';
import DataModal from './dataModal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'


export class DietPlan extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            showDataModal: false,
            showYourInfoButton: true,
            dailyCalories: '',
            healthStatus: '',
            bmi: '',
            limitOfCalories: '',
            recipeType: ''
        })
    }

    handelDisplayDataModal = () => {
        this.setState({
            showDataModal: !this.state.showDataModal

        })

    }


    handelBmi = async (e) => {
        e.preventDefault();
        let gender = e.target.gender.value;
        let height = e.target.height.value;
        let weight = e.target.weight.value;
        let age = e.target.age.value;
        let activety = e.target.activety.value
        let dailyCal;
        let caloreisLimit;
        let typeOfRecipe;
        let bmi = Math.floor((weight / ((height / 100) * (height / 100))));
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
            showDataModal: !this.state.showDataModal,
            healthStatus: weightStatus,
            bmi: bmi,
            limitOfCalories: caloreisLimit,
            recipeType: typeOfRecipe,
            showYourInfoButton: !this.state.howYourInfoButton
        });
    }

    render() {
        return (
            <div>

                <DataModal
                    showDataModal={this.state.showDataModal}
                    handelDisplayDataModal={this.handelDisplayDataModal}
                    handelBmi={this.handelBmi}
                />

                <>
                    {/* <h3> your daily current calories consumption is {this.state.dailyCalories}</h3>
                <h3> {this.state.healthStatus}</h3>
                <h3> {this.state.bmi}</h3> */}
                    <Table striped bordered hover style={{ width: '80%', marginLeft: '10%',marginTop:'30px' }}>

                        <tbody>
                            <tr >
                                <td style={{ width: '50%' }}>BMI</td>
                                <td>{this.state.bmi}</td>

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
                        <Button style={{ margin: '5px' }} onClick={this.handelDisplayDataModal}>
                            Edit
                        </Button>
                    </Table>

                </>
            </div>
        )
    }
}

export default DietPlan
