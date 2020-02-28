import React, { Component } from 'react';
import './components.css';


class Navbar1 extends Component {
  render() {
    return (
      <div>
      <nav className="navbar-style">
                    <a href="#home"><button className="btnNav btnNavRespo">Sobre mi</button></a>
                    <a href="#skills"><button className="btnNav btnNavRespo">Herramientas</button></a>
                    <a href="#proyects"><button className="btnNav btnNavRespo">Proyectos</button></a>
                    <a href="#contact"><button className="btnNav btnNavRespo">Contacto</button></a>
                </nav>
</div>
    )
  }
}
export default Navbar1