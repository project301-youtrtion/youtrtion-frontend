import React, { Component } from 'react';
import FormTracker from './FormTracker';
import DietPlan from './dietPlan'

export class Main extends Component {
  render() {
    return (
      <div>
      
         <DietPlan />
        <FormTracker/>
      </div>
    )
  }
}

export default Main;





