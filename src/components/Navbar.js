import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import home from '../images/home.png';
import Proyects from './Proyects';
import Contact from './Contact';



class Navbar1 extends Component {
  render() {
    return (
      <Navbar justify variant="tabs" className="navbar-form navbar-fixed-top">
        <Navbar.Brand className="mr-auto" href="#home">
          <img
            src={home}
            width="30"
            height="30"
            alt="PZ"
          />
        </Navbar.Brand>
        <Nav className="justify-content-end" defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/proyects" component={Proyects}>Proyectos</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/contact" component={Contact}>Contacto</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

    )
  }
}
export default Navbar1