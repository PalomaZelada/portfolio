import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navfunct from '../Router';
import './components.css';


class Navbar1 extends Component {
  render() {
    return (
      <div>
      {/* <Navfunct /> */}
      <nav className="navbar-style">
                    <a href="#home"><button className="btnNav">Sobre mi</button></a>
                    <a href="#skills"><button className="btnNav">Herramientas</button></a>
                    <a href="#proyects"><button className="btnNav">Proyectos</button></a>
                    <a href="#contact"><button className="btnNav">Contacto</button></a>
                </nav>
</div>
    )
  }
}
export default Navbar1