import React from 'react';
import './App.css';

import Callback from './components/Callback';
import Recipes from './components/Recipes';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Router>
    <Switch>
      <Route exact path="/callback">
          <Callback />
      </Route>
      <Route exact path="/recipes">
          <Recipes message="Welcome to youtrition" showbutton="false" />
      </Route>
  </Switch>
    </Router>
    </div>
  );
}

export default App;
