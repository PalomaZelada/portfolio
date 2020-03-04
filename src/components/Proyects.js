import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
import './components.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import burger from '../images/burger.png';
import pokemon from '../images/pokemon.jpg';
import woman from '../images/mujeres.jpg';

class Proyects extends Component {
  render() {
    return (
      <ScrollableAnchor id="proyects">
      <div>
        <section className="section-title">
        <h3>Proyectos Destacados</h3>
        </section>
        <div className="borderCard">
          <Row>
            <Col sm="4">
              <Card body>
                <CardTitle className="cardTitle">Burger Queen</CardTitle>
                <CardImg top width="100%" height="140" src={burger} alt="Burger Queen" />
                <CardText>Proyecto para restaurant, para toma de pedidos y preparación de pedidos.</CardText>
                <Button color="primary"
                  href="https://burger-queen-9b026.firebaseapp.com/"
                  target="blank">
                  Demo</Button>
                <Button color="primary"
                  href="https://github.com/PalomaZelada/SCL011-BurgerQueen"
                  target="blank"
                >Código</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle className="cardTitle">Maestro Pokemon Go</CardTitle>
                <CardImg top width="100%" height="140" src={pokemon} alt="Maestro Pokemon GO" />
                <CardText>Aplicación para jugadores de Pokemon Go, con data de la primera generación.</CardText>
                <Button color="primary"
                  href="https://palomazelada.github.io/SCL011-data-lovers/src/index.html"
                  target="blank"
                >Demo</Button>
                <Button color="primary"
                  href="https://github.com/PalomaZelada/SCL011-data-lovers"
                  target="blank"
                >Código</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle className="cardTitle">Feminist PWR</CardTitle>
                <CardImg top width="100%" height="140" src={woman} alt="Feminist PWR" />
                <CardText>Red social creada para mujeres para tratar temas de feminismo y de minorias</CardText>
                <Button color="primary"
                  href="https://carpoolcl-b2a85.firebaseapp.com/"
                  target="blank"
                >Demo</Button>
                <Button color="primary"
                href="https://github.com/PalomaZelada/SCL011-Social-Network-2"
                  target="blank"
                >Código</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      </ScrollableAnchor>
    )
  }
}

export default Proyects;