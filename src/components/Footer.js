import React from "react";
import { Navbar, NavItem } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (<>
            <br />
            <div style={{ backgroundColor: '#213E3B', height: '100px', padding: '0.5%', clear: "both", position: "relative",  bottom:"0"}}>

                <Navbar collapseOnSelect expand="lg">

                    <NavItem style={{ color: 'white', fontSize: "14pt", marginLeft: '150px' }}>Salsabil Mislat</NavItem>
                    <NavItem style={{ color: 'white', fontSize: "14pt", marginLeft: '50px' }}>Haneen Haidara</NavItem>
                    <NavItem style={{ color: 'white', fontSize: "14pt", marginLeft: '50px' }}>Tamara Al manaseer</NavItem>
                    <NavItem style={{ color: 'white', fontSize: "14pt", marginLeft: '50px' }}>Oqla Al refai</NavItem>
                    <NavItem style={{ color: 'white', fontSize: "14pt", marginLeft: '50px' }}>Ahmad Hamzeh</NavItem>
                    <NavItem style={{ color: 'white', fontSize: "14pt", marginLeft: '50px' }}>Mohammed Al jedaya</NavItem>
                </Navbar>
                <br />
                <h3 style={{ color: 'white', fontSize: "14pt", marginLeft: '45%' }}>©️Youtrition</h3>




            </div>
        </>)

    }
}
export default Footer;