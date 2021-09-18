import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DietPlan from './components/dietPlan'

export class App extends Component {
  render() {
    return (
      <div>
        <DietPlan />
      </div>
    )
  }
}

export default App;

