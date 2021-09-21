import { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';
import Main from './components/Main'
class Profile extends Component {

  render() {
    
    return (
      <div>
        <Main />

      </div>
    )
  }
};

export default withAuth0(Profile);