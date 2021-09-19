import React, { Component } from 'react';
import FormTracker from './FormTracker';
import DietPlan from './dietPlan'
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      limitCals: ''
    })
  }
  getTheCalsLimit = async (limitOfCals) => {
    await this.setState({ limitCals: limitOfCals })

  }

  render() {
    return (
      <div>
        <DietPlan getTheCalsLimit={this.getTheCalsLimit}/>
        
        <FormTracker limitCals={this.state.limitCals}/>
      </div>
    )
  }
}

export default Main;





