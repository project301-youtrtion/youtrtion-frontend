import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    const user = this.props.auth0.user;
    const isAuth = this.props.auth0.isAuthenticated;
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#213E3B', height: '100px' }} >
          <Navbar.Brand>
            <img
              src={window.location.origin + '/logo.png'}
              alt="logo"
              style={{ height: '80px', marginLeft: '30px', marginBottom: '10px' }}

            />
          </Navbar.Brand>

          {/* <Navbar.Brand style={{color:'#52734D'}}>Youtrition</Navbar.Brand> */}
          <NavItem><Link style={{ color: 'white', fontSize: "14pt" }} to="/" className="nav-link">Youtrition</Link></NavItem>

          {
            isAuth &&
            <NavItem><Link to="/profile" className="nav-link" style={{ color: 'white', fontSize: "14pt" }} >Profile</Link></NavItem>
          }

          {
            isAuth &&
            <NavItem><Link to="/news" className="nav-link" style={{ color: 'white', fontSize: "14pt" }} >Latest News</Link></NavItem>
          }
          
            <NavItem style={{ color: 'white', fontSize: "14pt", marginLeft:'55%' }}>{user.name}</NavItem>
          

          {
            isAuth ? <LogoutButton /> : <LoginButton />
          }
        </Navbar>
      </header>
    )
  }
}

export default withAuth0(Header);
