import React, { Component } from 'react';
import FormTracker from './FormTracker';
import DietPlan from './dietPlan';
// import News from '../News'
import { withAuth0 } from "@auth0/auth0-react";
import Header from './Header';

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
      <div>
         <Header user={this.state.user} onLogout={this.logoutHandler} />
        <DietPlan getTheCalsLimit={this.getTheCalsLimit}/>
        
        <FormTracker limitCals={this.state.limitCals}/>
       
      
        {/* <News/> */}

      </div>
    )
  }
}

export default  withAuth0(Main);;







