import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


class Navbar1 extends Component{
    render(){
        return (
            <Nav className="justify-content-end" defaultActiveKey="/home" as="ul">
    <Navbar.Brand href="/home">
      <img
        src={"//images/favicon.jpg"}
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