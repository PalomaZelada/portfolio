import React, { Component } from 'react';
import Navbar1 from './Navbar';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';

class Proyects extends Component {
    render() {
        return (
          <div>
                <Navbar1 />
                <div className="borderCard">
                <Row>
      <Col sm="6">
        <Card body>
          <CardTitle className="cardTitle">Burger Queen</CardTitle>
          <CardImg top width="100%" src="https://lh5.googleusercontent.com/proxy/ZXvakVk6taUUxk5B0h7vfGeJ6hrLK13KKaqTQ-Zncf6qEmR1-NK5v7FjMdaS_VQV7PfA1cuRRkBui9tpEN2XCAaUYA" alt="Card image cap" />
          <CardText>Proyecto para restaurant, para toma de pedidos y preparación de pedidos.</CardText>
          <Button color="info"
            href="https://burger-queen-9b026.firebaseapp.com/"
            target="blank">
          Demo</Button>
          <Button color="info"
          href="https://github.com/PalomaZelada/SCL011-BurgerQueen"
          target="blank"
          >Código</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle className="cardTitle">Maestro Pokemon Go</CardTitle>
          <CardImg top width="100%" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2596d0e-8292-46b8-ad65-d5ec8d67f020/d3ei2p6-2c7a7cd7-c5e5-403f-baf2-ecccac3ba278.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyNTk2ZDBlLTgyOTItNDZiOC1hZDY1LWQ1ZWM4ZDY3ZjAyMFwvZDNlaTJwNi0yYzdhN2NkNy1jNWU1LTQwM2YtYmFmMi1lY2NjYWMzYmEyNzguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n3hhHRZ0UITG4nvmAcdziiq51jmz2KzYWnJcAgjEKQY" alt="Card image cap" />
          <CardText>Aplicación para jugadores de Pokemon Go, con data de la primera generación.</CardText>
          <Button color="info"
          href="https://palomazelada.github.io/SCL011-data-lovers/src/index.html"
          target="blank"
          >Demo</Button>
          <Button color="info"
          href="https://github.com/PalomaZelada/SCL011-data-lovers"
          target="blank"
          >Código</Button>
        </Card>
      </Col>
    </Row>
    </div>
            </div>
        )
    }
  }

export default Proyects;