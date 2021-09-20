import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Profile from './Profile';
// import DietPlan from './components/dietPlan';
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Callback from './components/Callback';
import Recipes from './components/Recipes';
export class App extends Component {
  render() {
    const isAuth = this.props.auth0.isAuthenticated;

    return (
      <div> 
            <>
        <Router>
          {/* <Header user={this.state.user} onLogout={this.logoutHandler} /> */}
          <Switch>
            <Route exact path="/">
              {isAuth ? < Main/> : <Login />}
            </Route>
            <Route exact path="/profile">
              {isAuth && <Profile />}
            </Route>
<Route exact path="/callback">
          <Callback />
      </Route>
      <Route exact path="/recipes">
          <Recipes message="Welcome to youtrition" showbutton="false" />
      </Route>
          </Switch>
          {/* <Footer /> */}
        </Router>
      </>
       
      </div>
    )
  }
}

export default withAuth0(App);

