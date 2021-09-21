import React, { Component } from 'react';
import FormTracker from './FormTracker';
import DietPlan from './dietPlan';
// import News from '../News'
import { withAuth0 } from "@auth0/auth0-react";
import Header from './Header';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'



export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      limitCals: '',
      user: null,
    })
  }
  getTheCalsLimit = async (limitOfCals) => {
    await this.setState({ limitCals: limitOfCals })

  }

  loginHandler = (user) => {
    this.setState({
      user,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: null,
    });
  };
  render() {

    return (
      <div className='main' style={{ backgroundImage: 'linear-gradient(120deg, #D4FC79 0%, #96E6A1 100%)', color: 'white' }}>
        <Header user={this.state.user} onLogout={this.logoutHandler} />
        <Tabs defaultActiveKey="BMI" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="BMI" title="BMI">
            <DietPlan getTheCalsLimit={this.getTheCalsLimit} />
          </Tab>
          <Tab eventKey="Calories Tracker" style={{ color: 'white' }} title="Calories Tracker"
            style={{ fontcolor: 'white' }}>
            <FormTracker limitCals={this.state.limitCals} />
          </Tab>
        </Tabs>
        {/* <News/> */}

      </div>
    )
  }
}

export default withAuth0(Main);;







