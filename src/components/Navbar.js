import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


class Navbar1 extends Component{
    render(){
        return (
            <Nav className="justify-content-left" defaultActiveKey="/home" as="ul">
    <Navbar.Brand href="/home">
      <img
        src="https://cdn1.vectorstock.com/i/1000x1000/13/95/initial-letter-pz-logo-template-design-vector-22671395.jpg"
        width="40"
        height="40"
        alt="PZ"
      />
    </Navbar.Brand>
            <Nav.Item as="li">
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
          </Nav>
        )
    }
}
export default Navbar1