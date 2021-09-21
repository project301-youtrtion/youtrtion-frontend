import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    const isAuth = this.props.auth0.isAuthenticated;
    return (
      <Navbar collapseOnSelect expand="lg" style={{backgroundColor :'#DDFFBC'}} >
        <Navbar.Brand>
        <img
        src={window.location.origin +'/youtrition.png'}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="logo"
        style={{marginLeft:'20%',paddingRight:'7%'}}
   
      />     
        </Navbar.Brand>
        {/* <Navbar.Brand style={{color:'#52734D'}}>Youtrition</Navbar.Brand> */}
        <NavItem><Link  style={{color:'#52734D'}} to="/" className="nav-link">Youtrition</Link></NavItem>
        {
          isAuth &&
          <NavItem><Link to="/profile" className="nav-link" style={{color:'#52734D'}} >Profile</Link></NavItem>
        }
        
        {
          isAuth &&
          <NavItem><Link to="/news" className="nav-link" style={{color:'#52734D'}} >Latest News</Link></NavItem>
        }

        
        {
          isAuth ? <LogoutButton /> : <LoginButton />
        }
      </Navbar>
    )
  }
}

export default withAuth0(Header);